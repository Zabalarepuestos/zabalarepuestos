const fs = require('fs');
const path = require('path');
const vm = require('vm');

process.env.NODE_PATH = [
  'C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules',
  'C:/Users/Usuario/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright-core@1.60.0/node_modules'
].join(';');
require('module').Module._initPaths();

const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const PRODUCTS_FILE = path.join(ROOT, 'products.js');
const SEARCH_TERM = process.argv[2] || 'flexible';
const IMAGE_SUBDIR = process.argv[3] || 'Flexibles';
const IMAGE_DIR = path.join(ROOT, 'img', 'products', IMAGE_SUBDIR);
const IMAGE_PUBLIC_DIR = `img/products/${IMAGE_SUBDIR}`;
const SEARCH_URL = `https://ezequielmsilva.com/?s=${encodeURIComponent(SEARCH_TERM)}&id=41567&post_type=product`;
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function cleanText(value) {
  return String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleCaseFromSlug(slug) {
  return String(slug || '')
    .split('-')
    .filter(Boolean)
    .map(part => {
      const upper = part.toUpperCase();
      if (['vw', 'tkl', 'ugr', 'sabo', 'blk', 'tf', 'p', 'man'].includes(part.toLowerCase())) return upper;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join(' ')
    .replace(/\bTf P\b/g, 'TF&P')
    .replace(/\bBlk\b/g, 'BLK');
}

function slugify(value) {
  return normalize(value)
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

function loadProducts() {
  const source = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  const context = {};
  vm.runInNewContext(`${source}; this.products = products;`, context, { filename: PRODUCTS_FILE });
  return context.products;
}

function duplicateKeys(products) {
  const names = new Set();
  const codeName = new Set();
  const codes = new Map();

  for (const product of products) {
    const name = normalize(product.name);
    const code = normalize(product.code);
    if (name) names.add(name);
    if (code && name) codeName.add(`${code}|${name}`);
    if (code) {
      if (!codes.has(code)) codes.set(code, []);
      codes.get(code).push(name);
    }
  }

  return { names, codeName, codes };
}

function isDuplicate(item, keys) {
  const name = normalize(item.name);
  const code = normalize(item.code);
  if (name && keys.names.has(name)) return true;
  if (code && name && keys.codeName.has(`${code}|${name}`)) return true;

  const namesWithCode = keys.codes.get(code) || [];
  return Boolean(code && name && namesWithCode.some(existingName =>
    existingName === name || existingName.includes(name) || name.includes(existingName)
  ));
}

function nextProductId(products) {
  const max = products.reduce((highest, product) => {
    const match = String(product.id || '').match(/^P(\d+)$/);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, 0);
  let current = max;
  return () => `P${String(++current).padStart(4, '0')}`;
}

async function waitForCatalogPage(page) {
  for (let i = 0; i < 6; i += 1) {
    const title = await page.title();
    const hasProducts = await page.locator('li.product').count().catch(() => 0);
    if (!/momento|one moment/i.test(title) && hasProducts > 0) return;
    await page.waitForTimeout(i === 0 ? 7000 : 2500);
  }
}

async function waitForProductPage(page) {
  for (let i = 0; i < 6; i += 1) {
    const title = await page.title();
    const hasTitle = await page.locator('h1').count().catch(() => 0);
    if (!/momento|one moment/i.test(title) && hasTitle > 0) return;
    await page.waitForTimeout(i === 0 ? 5000 : 2000);
  }
}

async function browserContext() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--window-size=1440,900']
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    locale: 'es-AR',
    viewport: { width: 1440, height: 900 }
  });
  await context.addInitScript(() => {
    try { delete Navigator.prototype.webdriver; } catch (_) {}
    Object.defineProperty(navigator, 'webdriver', { get: () => false, configurable: true });
    Object.defineProperty(navigator, 'languages', { get: () => ['es-AR', 'es', 'en'], configurable: true });
    Object.defineProperty(window, 'outerWidth', { get: () => 1440, configurable: true });
    Object.defineProperty(window, 'outerHeight', { get: () => 900, configurable: true });
  });
  return { browser, context };
}

function pageUrl(pageNumber) {
  if (pageNumber === 1) return SEARCH_URL;
  return `https://ezequielmsilva.com/page/${pageNumber}/?s=${encodeURIComponent(SEARCH_TERM)}&id=41567&post_type=product`;
}

async function collectCards(page) {
  await page.goto(SEARCH_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await waitForCatalogPage(page);

  const maxPage = await page.evaluate(() => {
    const pageNumbers = [...document.querySelectorAll('a.page-numbers, span.page-numbers')]
      .map(el => Number(el.textContent.trim()))
      .filter(Number.isFinite);
    return Math.max(1, ...pageNumbers);
  });

  const allCards = [];
  for (let pageNumber = 1; pageNumber <= maxPage; pageNumber += 1) {
    await page.goto(pageUrl(pageNumber), { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForCatalogPage(page);
    const cards = await page.evaluate(() => [...document.querySelectorAll('li.product')].map(el => {
      const title = clean(el.querySelector('h2, .woocommerce-loop-product__title')?.textContent || el.innerText.split('\n')[0]);
      const productLink = [...el.querySelectorAll('a[href*="/producto/"]')].map(a => a.href)[0] || '';
      const brandLink = [...el.querySelectorAll('a[href*="/marca/"]')].map(a => a.href)[0] || '';
      const image = [...el.querySelectorAll('img')]
        .map(img => img.currentSrc || img.src)
        .find(src => !/logo|marca|argentina|RIGIFLEX|ENGINE/i.test(src)) || '';
      const [rawCode, rawName] = title.split('|').map(part => clean(part));
      return {
        title,
        code: rawName ? rawCode : '',
        name: rawName || title,
        href: productLink,
        brandSlug: brandLink.split('/marca/')[1]?.split('/')[0] || '',
        image
      };

      function clean(value) {
        return String(value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
      }
    })).then(items => items.filter(item => item.href && item.name));

    console.log(`Pagina ${pageNumber}/${maxPage}: ${cards.length} productos`);
    allCards.push(...cards);
  }

  const unique = new Map();
  for (const card of allCards) unique.set(card.href, card);
  return [...unique.values()];
}

function extractRelevantText(bodyText) {
  const lines = String(bodyText || '')
    .split('\n')
    .map(cleanText)
    .filter(Boolean);
  const out = [];
  const startMarkers = ['Vehículos compatibles:', 'Codigo Original / Similar:', 'Código Original / Similar:'];
  const stopMarkers = ['Consultar por este producto', 'Comprar en la app', 'Información sobre diseño web.'];
  let capture = false;

  for (const line of lines) {
    if (stopMarkers.some(marker => line.includes(marker))) break;
    if (startMarkers.some(marker => line.includes(marker))) {
      capture = true;
      out.push(line);
      continue;
    }
    if (capture) out.push(line);
  }

  return out.join(' ');
}

async function detailForCard(page, card) {
  let loaded = false;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      await page.goto(card.href, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await waitForProductPage(page);
      loaded = true;
      break;
    } catch (error) {
      if (attempt === 2) throw error;
      await page.waitForTimeout(2500);
    }
  }
  if (!loaded) throw new Error(`No se pudo cargar ${card.href}`);

  const detail = await page.evaluate(() => {
    const h1 = document.querySelector('h1')?.textContent.trim() || '';
    const mainImage = document.querySelector('img.wp-post-image')?.currentSrc || document.querySelector('img.wp-post-image')?.src || '';
    const breadcrumb = document.querySelector('.woocommerce-breadcrumb')?.textContent || '';
    const body = document.body.innerText || '';
    return { h1, mainImage, breadcrumb, body };
  });

  const title = cleanText(detail.h1 || card.title);
  const [rawCode, rawName] = title.split('|').map(cleanText);
  const code = rawName ? rawCode : card.code;
  const name = rawName || card.name;
  const brand = card.brandSlug ? titleCaseFromSlug(card.brandSlug) : 'Ezequiel M. Silva';
  const breadcrumbParts = detail.breadcrumb.split('/').map(cleanText).filter(Boolean);
  const rubro = breadcrumbParts.length > 1 ? breadcrumbParts[1] : IMAGE_SUBDIR.toUpperCase();
  const relevantText = extractRelevantText(detail.body);
  const description = cleanText([name, code, brand, relevantText].filter(Boolean).join(' '));

  return {
    sourceUrl: card.href,
    code,
    name,
    brand,
    rubro,
    description,
    imageUrl: detail.mainImage || card.image
  };
}

async function downloadImage(context, imageUrl, product) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  const urlPath = new URL(imageUrl).pathname;
  const ext = (path.extname(urlPath).split('?')[0] || '.jpg').toLowerCase();
  const filename = `${slugify(product.name)}-${slugify(product.code || 'sin-codigo')}${ext}`;
  const absolutePath = path.join(IMAGE_DIR, filename);
  const publicPath = `${IMAGE_PUBLIC_DIR}/${filename}`;

  if (!fs.existsSync(absolutePath)) {
    const response = await context.request.get(imageUrl, {
      headers: { Referer: product.sourceUrl }
    });
    if (!response.ok()) throw new Error(`No se pudo descargar imagen ${imageUrl}: ${response.status()}`);
    fs.writeFileSync(absolutePath, Buffer.from(await response.body()));
  }

  return publicPath;
}

function writeProducts(products) {
  const source = `const products = ${JSON.stringify(products, null, 4)};\n\nif (typeof module !== 'undefined' && module.exports) {\n    module.exports = products;\n}\n`;
  fs.writeFileSync(PRODUCTS_FILE, source, 'utf8');
}

(async () => {
  const existingProducts = loadProducts();
  const keys = duplicateKeys(existingProducts);
  const getNextId = nextProductId(existingProducts);
  const { browser, context } = await browserContext();
  const page = await context.newPage();

  try {
    const cards = await collectCards(page);
    console.log(`Total unico en resultados: ${cards.length}`);

    const candidateCards = cards.filter(card => !isDuplicate(card, keys));
    console.log(`Faltantes por importar: ${candidateCards.length}`);

    const imported = [];
    const failed = [];
    for (let index = 0; index < candidateCards.length; index += 1) {
      const card = candidateCards[index];
      let detail;
      try {
        detail = await detailForCard(page, card);
      } catch (error) {
        failed.push({ href: card.href, title: card.title, error: error.message });
        console.log(`No se pudo importar ${index + 1}/${candidateCards.length}: ${card.title} (${error.message})`);
        continue;
      }
      if (isDuplicate(detail, keys)) {
        console.log(`Duplicado omitido tras detalle: ${detail.code} ${detail.name}`);
        continue;
      }
      const image = detail.imageUrl ? await downloadImage(context, detail.imageUrl, detail) : 'parts_image.png';
      const product = {
        id: getNextId(),
        name: detail.name,
        brand: detail.brand,
        code: detail.code,
        image,
        description: detail.description,
        rubro: detail.rubro
      };
      existingProducts.push(product);
      imported.push(product);
      writeProducts(existingProducts);
      keys.names.add(normalize(product.name));
      keys.codeName.add(`${normalize(product.code)}|${normalize(product.name)}`);
      if (!keys.codes.has(normalize(product.code))) keys.codes.set(normalize(product.code), []);
      keys.codes.get(normalize(product.code)).push(normalize(product.name));
      console.log(`Importado ${index + 1}/${candidateCards.length}: ${product.id} ${product.code} ${product.name}`);
    }

    if (imported.length) writeProducts(existingProducts);

    console.log(JSON.stringify({
      found: cards.length,
      candidates: candidateCards.length,
      imported: imported.length,
      failed: failed.length,
      firstNewId: imported[0]?.id || null,
      lastNewId: imported[imported.length - 1]?.id || null
    }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
