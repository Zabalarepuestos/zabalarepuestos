document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('productDetailContainer');

    // Get product ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        showError('No se especifico ningun producto.');
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        showError('Producto no encontrado.');
        return;
    }

    document.title = `${product.name} | Zabala Repuestos`;
    renderProductDetail(product, productDetailContainer);
});

const STOP_WORDS = new Set([
    'para', 'con', 'sin', 'del', 'las', 'los', 'una', 'uno', 'por', 'tipo',
    'jgo', 'juego', 'repuesto', 'repuestos', 'motor', 'marca', 'varios',
    'usos', 'completo', 'completa', 'nuevo', 'nueva', 'viejo', 'vieja',
    'derecho', 'derecha', 'izquierdo', 'izquierda'
]);

const SERIES_PATTERNS = [
    ['SCANIA 111', /\bscania\s*111\b|\bscania111\b|scania 111/i],
    ['STRALIS', /\bstralis\b/i],
    ['OM457', /\bom\s*457\b|\bom457\b/i],
    ['OM904', /\bom\s*904\b|\bom904\b/i],
    ['OM906', /\bom\s*906\b|\bom906\b/i],
    ['OM926', /\bom\s*926\b|\bom926\b/i],
    ['OM924', /\bom\s*924\b|\bom924\b/i],
    ['OM447', /\bom\s*447\b|\bom447\b/i],
    ['OM366', /\bom\s*366\b|\bom366\b/i],
    ['OM352', /\bom\s*352\b|\bom352\b/i],
    ['OM611', /\bom\s*611\b|\bom611\b/i],
    ['OM651', /\bom\s*651\b|\bom651\b/i],
    ['O500', /\bo\s*500\b|\bo500\b/i],
    ['ISC', /\bisc\b|\bcummins\s*isc\b/i],
    ['ISB', /\bisb\b|\bcummins\s*isb\b/i],
    ['6C', /\b6c\b|\bcummins\s*6c\b/i],
    ['6B', /\b6b\b|\bcummins\s*6b\b/i]
];

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function normalizeText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
}

function productText(product) {
    return [
        product.name,
        product.code,
        product.originalCode,
        product.brand,
        product.rubro,
        product.description,
        product.image
    ].join(' ');
}

function productSeries(product) {
    const text = productText(product);
    return SERIES_PATTERNS
        .filter(([, pattern]) => pattern.test(text))
        .map(([series]) => series);
}

function productTokens(product) {
    const text = normalizeText(productText(product));
    return new Set(text.split(' ').filter(token =>
        token.length >= 3 &&
        !STOP_WORDS.has(token) &&
        !/^\d+$/.test(token)
    ));
}

function imageFolder(product) {
    const image = String(product.image || '').replace(/\\/g, '/');
    const parts = image.split('/');
    return parts.length > 2 ? parts.slice(0, -1).join('/').toLowerCase() : '';
}

function sharedTokenCount(a, b) {
    let count = 0;
    a.forEach(token => {
        if (b.has(token)) count++;
    });
    return count;
}

function getRelatedProducts(product, limit = 8) {
    if (!Array.isArray(products)) return [];

    const currentSeries = productSeries(product);
    const currentTokens = productTokens(product);
    const currentFolder = imageFolder(product);
    const currentBrand = normalizeText(product.brand);
    const currentName = normalizeText(product.name);

    return products
        .filter(candidate => candidate.id !== product.id)
        .map(candidate => {
            const candidateSeries = productSeries(candidate);
            const candidateTokens = productTokens(candidate);
            const sharedSeries = candidateSeries.filter(series => currentSeries.includes(series)).length;
            const sharedTokens = sharedTokenCount(currentTokens, candidateTokens);
            const sameFolder = currentFolder && currentFolder === imageFolder(candidate);
            const sameBrand = currentBrand && currentBrand === normalizeText(candidate.brand);
            const candidateName = normalizeText(candidate.name);

            let score = 0;
            if (sameFolder) score += 90;
            score += sharedSeries * 70;
            if (sameBrand) score += 25;
            score += Math.min(sharedTokens, 8) * 8;
            if (candidateName && currentName && (candidateName.includes(currentName) || currentName.includes(candidateName))) {
                score += 15;
            }

            return { product: candidate, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.product);
}

function renderRelatedProducts(product) {
    const relatedProducts = getRelatedProducts(product);

    if (relatedProducts.length === 0) {
        return '';
    }

    const cards = relatedProducts.map(related => `
        <a class="related-product-card" href="producto.html?id=${escapeHtml(related.id)}" title="${escapeHtml(related.name)}">
            <div class="related-product-image">
                <img src="${escapeHtml(related.image || 'img/no-image.jpg')}" alt="${escapeHtml(related.name)}" loading="lazy" decoding="async" onerror="this.src='img/no-image.jpg'">
            </div>
            <div class="related-product-info">
                <span>${escapeHtml(related.brand || '')}</span>
                <h3>${escapeHtml(related.name)}</h3>
                <p>Codigo: ${escapeHtml(related.code || '')}</p>
            </div>
        </a>
    `).join('');

    return `
        <section class="related-products-section" aria-labelledby="relatedProductsTitle">
            <div class="related-products-header">
                <h2 id="relatedProductsTitle">Productos relacionados</h2>
            </div>
            <div class="related-products-grid">
                ${cards}
            </div>
        </section>
    `;
}

function renderProductDetail(product, container) {
    const whatsappMessage = encodeURIComponent(`Hola Zabala Repuestos! Me gustaria cotizar el siguiente producto: ${product.name} (Codigo: ${product.code})`);
    const whatsappLink = `https://wa.me/5492645859764?text=${whatsappMessage}`;

    const html = `
        <a href="catalogo.html" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Volver al catalogo
        </a>
        
        <div class="product-detail-container">
            <div class="product-detail-img-container">
                <img src="${escapeHtml(product.image || 'img/no-image.jpg')}" alt="${escapeHtml(product.name)}" class="product-detail-img" onerror="this.src='img/no-image.jpg'">
            </div>
            
            <div class="product-detail-info">
                <span class="product-detail-brand">${escapeHtml(product.brand || '')}</span>
                <h1 class="product-detail-name">${escapeHtml(product.name)}</h1>
                
                <div>
                    <span class="product-detail-code">Codigo: ${escapeHtml(product.code || '')}</span>
                    ${product.originalCode ? `<span class="product-detail-code" style="margin-left: 10px;">Orig: ${escapeHtml(product.originalCode)}</span>` : ''}
                </div>
                
                <p class="product-detail-description">
                    ${escapeHtml(product.description || 'Sin descripcion disponible para este producto.')}
                </p>
                
                <a href="${whatsappLink}" class="btn-whatsapp-large" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24" fill="currentColor">
                        <path d="M248 8C111 8 0 119 0 256c0 58.8 22.1 114.5 62.1 158.4L8.7 512.6c-1.3 5.4 2.8 9.6 8.3 8.3l108.8-57.9c43.6 28.1 94.9 43 147.2 43 137 0 248-111 248-248S385 8 248 8zm120.3 365.1c-6.8 19.1-39.7 34.9-54.3 37.1-12.7 1.9-28.5 3.3-80.9-17-48.4-18.7-79.6-66.3-81.8-69.3-2.2-3-19.4-25.8-19.4-49.2 0-23.4 12.1-35 16.4-39.7 3.5-3.8 7.7-4.4 10.3-4.4 2.6 0 5.2 0 7.4.1 2.4.1 5.7.5 8.7 7.7 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9-2.2 4-4.4 6.6c-2.4 2.8-5.1 6.3-7.2 8.5-2.6 2.6-5.3 5.5-2.2 10.8 3.1 5.3 13.9 22.8 29.8 37 20.3 18.1 37.4 24.2 42.7 26.9 5.3 2.7 8.5 2.2 11.6-1.4 3.1-3.6 13.5-15.7 17.1-21 3.6-5.3 7.3-4.4 12.3-2.6 5.1 1.8 32.2 15.2 37.7 17.9 5.5 2.7 9.2 4 10.5 6.3 1.3 2.3 1.3 13.2-5.5 32.3z" />
                    </svg>
                    Consultar Precio por WhatsApp
                </a>
            </div>
        </div>

        ${renderRelatedProducts(product)}
    `;

    container.innerHTML = html;
}

function showError(message) {
    document.getElementById('productDetailContainer').innerHTML = `
        <div class="error-message">
            <h2>Ups!</h2>
            <p>${escapeHtml(message)}</p>
            <a href="catalogo.html" class="back-link" style="margin-top: 20px;">
                Volver al catalogo
            </a>
        </div>
    `;
}
