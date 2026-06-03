document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const filterEngine = document.getElementById('filterEngine');
    const filterTruck = document.getElementById('filterTruck');
    const filterCategory = document.getElementById('filterCategory');
    const filterBrand = document.getElementById('filterBrand');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const activeFilters = document.getElementById('activeFilters');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn'); // Ensure this is selected if used
    const productsData = typeof products !== 'undefined' && Array.isArray(products) ? products : [];
    const INITIAL_RENDER_LIMIT = 96;
    const RESULT_RENDER_LIMIT = 240;
    const LOAD_MORE_INCREMENT = 120;
    const SEARCH_DEBOUNCE_MS = 140;
    const FALLBACK_IMAGE = 'parts_image.png';
    let searchTimer = null;
    let currentProducts = [];
    let currentRenderLimit = INITIAL_RENDER_LIMIT;
    let productsStatus = document.getElementById('productsStatus');

    if (!productsStatus && productGrid) {
        productsStatus = document.createElement('p');
        productsStatus.id = 'productsStatus';
        productsStatus.className = 'products-status';
        productGrid.parentNode.insertBefore(productsStatus, productGrid);
    }

    // Defined lists for filters
    const engines = [
        "OM352", "OM366", "OM904", "OM906", "OM924", "OM926",
        "OM355", "OM447", "OM457", "OM611", "OM651",
        "ISB", "ISF", "6B", "6C", "O500", "SPRINTER", "IVECO", "SCANIA"
    ].sort();

    // Simplified consolidated category mapping. Keywords are normalized before matching.
    const categoryMapping = {
        "MOTOR": ["MOTOR", "BLOCK", "CIGUEÑAL", "CIGUENAL", "DISTRIBUCION", "JUNTA", "JGO JUNTA", "JTA", "RETEN", "TAPA CILINDRO", "VALVULA MOTOR", "SOPORTE MOTOR", "PISTON", "BIELA", "CAMISA", "CARTER", "MULTIPLE", "ESCAPE"],
        "INYECCION Y TURBO": ["INYECCION", "INYECTOR", "TOBERA", "BOMBA INYECTORA", "TURBO", "TURBINA", "COMBUSTIBLE", "GAS OIL", "GASOIL", "DIESEL", "ACELERADOR", "ACELERACION"],
        "REFRIGERACION": ["REFRIGERACION", "RADIADOR", "BOMBA AGUA", "CALEFACCION", "VENTILADOR", "TERMOSTATO", "VISCOSO", "MANGUERA AGUA", "DEPOSITO AGUA", "REFRIGERANTE"],
        "TRANSMISION Y EMBRAGUE": ["EMBRAGUE", "CAJA", "VELOCIDAD", "EJE", "CARDAN", "DIFERENCIAL", "TRANSMISION", "RUEDA", "CRAPODINA", "HORQUILLA", "SINCRONIZADO", "DIRECTA", "PALIER"],
        "FRENOS Y AIRE": ["FRENO", "COMPRESOR", "VALVULA", "CAMARA", "AIRE", "PEDALERA", "TRISTOP", "SECADOR", "PULMON", "REGISTRO"],
        "SUSPENSION Y DIRECCION": ["DIRECCION", "SUSPENSION", "ELASTICO", "AMORTIGUADOR", "TREN DELANTERO", "BARRA", "BUJE", "ROTULA", "EXTREMO"],
        "ELECTRICIDAD": ["ELECTRICIDAD", "ALTERNADOR", "ARRANQUE", "INSTRUMENTAL", "FAROS", "LUCES", "BATERIA", "INSTALACION", "ELECTRICA"],
        "FILTROS Y LUBRICACION": ["FILTRO", "LUBRICACION", "ACEITE", "GRASA"],
        "ACOPLES Y CONEXIONES": ["ACOPLE", "RACORD", "CONECTOR", "CONEXION", "TEE", "MANGUERA", "TUBO"],
        "CARROCERIA Y OTROS": ["CABINA", "PUERTA", "VIDRIO", "ESPEJO", "PARAGOLPE", "GUARDABARRO", "HERRAMIENTAS", "REVESTIMIENTO", "BEPO", "DESPIECE", "TANQUE"]
    };

    const normalizedCategoryMapping = Object.fromEntries(
        Object.entries(categoryMapping).map(([category, keywords]) => [
            category,
            keywords.map(normalizeText)
        ])
    );

    const engineAliasGroups = [
        ["OM352", "OM 352", "OM-352", "OM352A", "OM 352A", "1114", "1517", "1518", "1314", "1317", "1215", "1620", "L1114", "L1517", "L1518", "OH1314"],
        ["OM366", "OM 366", "OM-366", "OM366A", "OM366LA", "1215", "1418", "1420", "1517", "1620", "OHL1420", "OHL1620"],
        ["OM904", "OM 904", "OM-904", "OM906", "OM 906", "OM-906", "O500", "OH1618", "OHL1618", "ATEGO", "1725", "2423"],
        ["OM924", "OM 924", "OM-924", "OM926", "OM 926", "OM-926", "O500", "O500U", "OHL1621", "1721"],
        ["OM611", "OM 611", "OM-611", "OM651", "OM 651", "OM-651", "SPRINTER", "CDI", "313", "413"],
        ["ISB", "ISBE", "ISF", "6B", "6C", "CUMMINS", "FORD CARGO", "VW", "VOLKSWAGEN"],
        ["IVECO", "DAILY", "TECTOR", "EUROCARGO"],
        ["SCANIA", "113", "114", "124", "P94", "PGR"]
    ];

    const truckModelGroups = [
        { label: "Mercedes Benz 1114", aliases: ["Mercedes 1114", "Mercedes Benz 1114", "MB 1114", "L 1114", "L1114", "1114"] },
        { label: "Mercedes Benz 1517", aliases: ["Mercedes 1517", "Mercedes Benz 1517", "MB 1517", "L 1517", "L1517", "1517"] },
        { label: "Mercedes Benz 1518", aliases: ["Mercedes 1518", "Mercedes Benz 1518", "MB 1518", "L 1518", "L1518", "1518"] },
        { label: "Mercedes Benz 1215", aliases: ["Mercedes 1215", "Mercedes Benz 1215", "MB 1215", "L 1215", "L1215", "1215"] },
        { label: "Mercedes Benz 1620", aliases: ["Mercedes 1620", "Mercedes Benz 1620", "MB 1620", "L 1620", "L1620", "1620"] },
        { label: "Mercedes Benz 710", aliases: ["Mercedes 710", "Mercedes Benz 710", "MB 710", "710"] },
        { label: "Mercedes Benz Atego", aliases: ["Mercedes Atego", "Mercedes Benz Atego", "Atego", "1725", "1726", "2423"] },
        { label: "Mercedes Benz O 500", aliases: ["Mercedes O 500", "Mercedes Benz O 500", "O500", "O 500", "O500U", "O 500U"] },
        { label: "Mercedes Benz Sprinter", aliases: ["Mercedes Sprinter", "Sprinter", "313 CDI", "413 CDI", "CDI"] },
        { label: "Ford Cargo", aliases: ["Ford Cargo", "Cargo"] },
        { label: "Ford 1722", aliases: ["Ford 1722", "Cargo 1722", "1722"] },
        { label: "Ford 1730", aliases: ["Ford 1730", "Cargo 1730", "1730"] },
        { label: "Ford 1832", aliases: ["Ford 1832", "Cargo 1832", "1832"] },
        { label: "Iveco Daily", aliases: ["Iveco Daily", "Daily"] },
        { label: "Iveco Eurocargo", aliases: ["Iveco Eurocargo", "Eurocargo"] },
        { label: "Iveco Tector", aliases: ["Iveco Tector", "Tector"] },
        { label: "Iveco Stralis", aliases: ["Iveco Stralis", "Stralis"] },
        { label: "Scania 111", aliases: ["Scania 111", "111"] },
        { label: "Scania 113", aliases: ["Scania 113", "113"] },
        { label: "Scania 114", aliases: ["Scania 114", "114"] },
        { label: "Scania 124", aliases: ["Scania 124", "124"] },
        { label: "Scania PGR", aliases: ["Scania PGR", "PGR", "P94", "P 94"] },
        { label: "Volkswagen Worker", aliases: ["Volkswagen Worker", "VW Worker", "Worker"] },
        { label: "Volkswagen Constellation", aliases: ["Volkswagen Constellation", "VW Constellation", "Constellation"] },
        { label: "Volkswagen 17-220", aliases: ["Volkswagen 17-220", "VW 17-220", "17220", "17 220"] },
        { label: "Volkswagen 17-310", aliases: ["Volkswagen 17-310", "VW 17-310", "17310", "17 310"] }
    ];

    function normalizeText(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .trim()
            .replace(/\s+/g, ' ');
    }

    const querySynonyms = new Map([
        ["f", ["filtro"]],
        ["filtro", ["f"]],
        ["aceite", ["lubricacion"]],
        ["gas oil", ["gasoil", "combustible", "diesel"]],
        ["gasoil", ["gas oil", "combustible", "diesel"]],
        ["diesel", ["gas oil", "gasoil", "combustible"]],
        ["jgo", ["juego"]],
        ["juego", ["jgo"]],
        ["jta", ["junta"]],
        ["junta", ["jta"]],
        ["reten", ["retentor"]],
        ["retentor", ["reten"]],
        ["manguera", ["flexible"]],
        ["flexible", ["manguera"]],
        ["crapodina", ["ruleman empuje"]],
        ["ruleman", ["rodamiento"]],
        ["rodamiento", ["ruleman"]],
        ["electro", ["electrico", "electromagnetico"]],
        ["electrico", ["electro"]],
        ["mb", ["mercedes benz"]]
    ]);

    function termAlternatives(term) {
        const alternatives = [term];
        const synonyms = querySynonyms.get(term);

        if (synonyms) {
            alternatives.push(...synonyms.map(normalizeText));
        }

        return [...new Set(alternatives)].map(text => ({
            text,
            compact: text.replace(/\s+/g, '')
        }));
    }

    const normalizedAliasGroups = engineAliasGroups.map(group => group.map(normalizeText));
    const normalizedAliasCompactGroups = normalizedAliasGroups.map(group => group.map(alias => alias.replace(/\s+/g, '')));
    const normalizedTruckModelGroups = truckModelGroups.map(group => ({
        label: group.label,
        aliases: group.aliases.map(createQueryIndex)
    }));

    function includesTerm(text, compact, term, compactTerm) {
        if (!term) return true;
        return text.includes(term) || compact.includes(compactTerm);
    }

    function productBaseText(product) {
        return normalizeText([
            product.id,
            product.name,
            product.code,
            product.originalCode,
            product.brand,
            product.rubro,
            product.description,
            product.image
        ].join(' '));
    }

    function createProductIndex(product) {
        const baseText = productBaseText(product);
        const compactBase = baseText.replace(/\s+/g, '');
        const categoryText = normalizeText([
            product.name,
            product.code,
            product.originalCode,
            product.rubro,
            product.description,
            product.image
        ].join(' '));
        const aliasesToAdd = [];

        normalizedAliasGroups.forEach((group, groupIndex) => {
            const compactGroup = normalizedAliasCompactGroups[groupIndex];
            const belongsToGroup = group.some((alias, aliasIndex) =>
                baseText.includes(alias) || compactBase.includes(compactGroup[aliasIndex])
            );

            if (belongsToGroup) {
                aliasesToAdd.push(...group);
            }
        });

        const searchText = `${baseText} ${aliasesToAdd.join(' ')}`.trim();
        const nameText = normalizeText(product.name);
        const codeText = normalizeText(`${product.code || ''} ${product.originalCode || ''}`);

        return {
            product,
            baseText,
            baseCompact: compactBase,
            searchText,
            searchCompact: searchText.replace(/\s+/g, ''),
            nameText,
            nameCompact: nameText.replace(/\s+/g, ''),
            codeText,
            codeCompact: codeText.replace(/\s+/g, ''),
            brandText: normalizeText(product.brand),
            brandLower: String(product.brand || '').toLowerCase(),
            categoryText,
            rubroUpper: String(product.rubro || '').toUpperCase()
        };
    }

    function createQueryIndex(query) {
        const text = normalizeText(query);
        const compact = text.replace(/\s+/g, '');
        return {
            text,
            compact,
            terms: text ? text.split(' ').map(term => ({
                text: term,
                compact: term.replace(/\s+/g, ''),
                alternatives: termAlternatives(term)
            })) : []
        };
    }

    const indexedProducts = productsData.map(createProductIndex);

    function matchesSearchQuery(indexedProduct, queryIndex) {
        if (!queryIndex.text) return true;

        if (includesTerm(indexedProduct.searchText, indexedProduct.searchCompact, queryIndex.text, queryIndex.compact)) {
            return true;
        }

        return queryIndex.terms.every(term =>
            term.alternatives.some(alternative =>
                includesTerm(indexedProduct.searchText, indexedProduct.searchCompact, alternative.text, alternative.compact)
            )
        );
    }

    function searchScore(indexedProduct, queryIndex) {
        if (!queryIndex.text) return 0;

        if (includesTerm(indexedProduct.codeText, indexedProduct.codeCompact, queryIndex.text, queryIndex.compact)) return 0;
        if (includesTerm(indexedProduct.nameText, indexedProduct.nameCompact, queryIndex.text, queryIndex.compact)) return 1;
        if (includesTerm(indexedProduct.baseText, indexedProduct.baseCompact, queryIndex.text, queryIndex.compact)) return 2;
        if (matchesSearchQuery(indexedProduct, queryIndex)) return 3;
        if (includesTerm(indexedProduct.searchText, indexedProduct.searchCompact, queryIndex.text, queryIndex.compact)) return 4;
        return 5;
    }

    function optionLabel(label, count) {
        return Number.isFinite(count) ? `${label} (${count})` : label;
    }

    function categoryMatches(indexedProduct, category) {
        if (!category) return true;
        const keywords = normalizedCategoryMapping[category] || [];
        return keywords.some(keyword => indexedProduct.categoryText.includes(keyword));
    }

    function brandMatches(indexedProduct, brand) {
        if (!brand) return true;
        const filterBrand = normalizeText(brand);
        const productBrand = indexedProduct.brandText;
        const vehicleText = indexedProduct.searchText;

        if (filterBrand === "mercedes benz") {
            return productBrand.includes("mercedes") || vehicleText.includes("mercedes") || vehicleText.includes("benz") || vehicleText.includes("mb ");
        }

        if (filterBrand === "volkswagen") {
            return productBrand.includes("volkswagen") || productBrand.includes("vw") || vehicleText.includes("volkswagen") || vehicleText.includes("vw");
        }

        return productBrand === filterBrand || productBrand.includes(filterBrand) || vehicleText.includes(filterBrand);
    }

    function includesWholeToken(text, term) {
        return (` ${text} `).includes(` ${term} `);
    }

    function truckAliasMatches(indexedProduct, aliasQuery) {
        if (!aliasQuery.text) return true;

        const isNumericOnly = /^[0-9]+$/.test(aliasQuery.text);
        if (isNumericOnly) {
            return includesWholeToken(indexedProduct.searchText, aliasQuery.text);
        }

        const hasCompactModel = /[a-z]+[0-9]+|[0-9]+[a-z]+/.test(aliasQuery.compact);
        if (hasCompactModel && indexedProduct.searchCompact.includes(aliasQuery.compact)) {
            return true;
        }

        return aliasQuery.terms.every(term => includesWholeToken(indexedProduct.searchText, term.text));
    }

    function truckMatches(indexedProduct, truckLabel) {
        if (!truckLabel) return true;
        const group = normalizedTruckModelGroups.find(item => item.label === truckLabel);
        if (!group) return true;

        return group.aliases.some(aliasQuery => truckAliasMatches(indexedProduct, aliasQuery));
    }

    function countMatches(predicate) {
        return indexedProducts.reduce((count, indexedProduct) => count + (predicate(indexedProduct) ? 1 : 0), 0);
    }

    function appendFilterOption(select, value, label, count) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = optionLabel(label, count);
        select.appendChild(option);
    }

    // Function to populate filters
    function populateFilters() {
        // Populate Engines
        engines.forEach(engine => {
            const engineIndex = createQueryIndex(engine);
            const count = countMatches(indexedProduct => matchesSearchQuery(indexedProduct, engineIndex));
            appendFilterOption(filterEngine, engine, engine, count);
        });

        // Populate truck/model filter.
        truckModelGroups.forEach(group => {
            const count = countMatches(indexedProduct => truckMatches(indexedProduct, group.label));
            if (count === 0) return;
            appendFilterOption(filterTruck, group.label, group.label, count);
        });

        // Populate Categories (Simplified List)
        Object.keys(categoryMapping).forEach(category => {
            const count = countMatches(indexedProduct => categoryMatches(indexedProduct, category));
            appendFilterOption(filterCategory, category, category, count);
        });

        // Only truck brands, not parts suppliers.
        const brands = ["Mercedes Benz", "Ford", "Iveco", "Scania", "Volkswagen", "Sprinter"];

        brands.forEach(brand => {
            const count = countMatches(indexedProduct => brandMatches(indexedProduct, brand));
            if (count === 0) return;
            appendFilterOption(filterBrand, brand, brand, count);
        });
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function updateProductsStatus(visibleCount, totalCount, isLimited) {
        if (!productsStatus) return;

        if (totalCount === 0) {
            productsStatus.textContent = '';
            return;
        }

        productsStatus.textContent = isLimited
            ? `Mostrando ${visibleCount} de ${totalCount} productos.`
            : `Mostrando ${visibleCount} productos.`;
    }

    function updateLoadMoreButton(visibleCount, totalCount) {
        if (!loadMoreBtn) return;

        const remaining = Math.max(totalCount - visibleCount, 0);
        loadMoreBtn.style.display = remaining > 0 ? 'inline-flex' : 'none';
        loadMoreBtn.textContent = remaining > 0
            ? `Ver ${Math.min(LOAD_MORE_INCREMENT, remaining)} productos más`
            : 'Ver más productos';
    }

    function createFilterChip(label, value, onRemove) {
        if (!activeFilters || !value) return;

        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.textContent = `${label}: ${value}`;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.setAttribute('aria-label', `Quitar ${label}`);
        removeButton.textContent = '×';
        removeButton.addEventListener('click', onRemove);

        chip.appendChild(removeButton);
        activeFilters.appendChild(chip);
    }

    function updateActiveFilters() {
        if (!activeFilters) return;

        activeFilters.textContent = '';
        createFilterChip('Búsqueda', searchInput.value.trim(), () => {
            searchInput.value = '';
            applyFilters();
            searchInput.focus();
        });
        createFilterChip('Motor', filterEngine.value, () => {
            filterEngine.value = '';
            applyFilters();
        });
        createFilterChip('Camión', filterTruck.value, () => {
            filterTruck.value = '';
            applyFilters();
        });
        createFilterChip('Rubro', filterCategory.value, () => {
            filterCategory.value = '';
            applyFilters();
        });
        createFilterChip('Marca', filterBrand.value, () => {
            filterBrand.value = '';
            applyFilters();
        });
    }

    // Function to render products
    function renderProducts(filteredProducts, renderLimit = RESULT_RENDER_LIMIT) {
        productGrid.textContent = '';

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<div class="no-results"><h3>No se encontraron productos</h3><p>Probá con otro código, motor, rubro o marca.</p></div>';
            updateProductsStatus(0, 0, false);
            updateLoadMoreButton(0, 0);
            return;
        }

        const productsToRender = filteredProducts.slice(0, renderLimit);
        const isLimited = filteredProducts.length > productsToRender.length;
        updateProductsStatus(productsToRender.length, filteredProducts.length, isLimited);

        const fragment = document.createDocumentFragment();

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-item';
            productCard.title = product.name;
            productCard.dataset.productId = product.id;
            productCard.tabIndex = 0;
            productCard.setAttribute('role', 'link');
            productCard.setAttribute('aria-label', `Ver detalles de ${product.name}`);

            // Handle missing image
            const imgPath = product.image || FALLBACK_IMAGE;
            const safeName = escapeHtml(product.name);
            const safeBrand = escapeHtml(product.brand || '');
            const safeCode = escapeHtml(product.code || '');
            const safeRubro = escapeHtml(product.rubro || '');

            productCard.innerHTML = `
                <img src="${escapeHtml(imgPath)}" alt="${safeName}" class="product-item-img" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
                <div class="product-item-info">
                    <span class="product-item-brand">${safeBrand}</span>
                    <h3 class="product-item-name">${safeName}</h3>
                    <p class="product-item-code">Código: ${safeCode}</p>
                    ${product.rubro ? `<p class="product-item-category">${safeRubro}</p>` : ''}
                    <div class="btn-detail">Ver detalles</div>
                </div>
            `;
            fragment.appendChild(productCard);
        });

        productGrid.appendChild(fragment);
        updateLoadMoreButton(productsToRender.length, filteredProducts.length);
    }

    productGrid.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-item');
        if (!productCard || !productCard.dataset.productId) return;

        window.location.href = `producto.html?id=${productCard.dataset.productId}`;
    });

    productGrid.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;

        const productCard = event.target.closest('.product-item');
        if (!productCard || !productCard.dataset.productId) return;

        event.preventDefault();
        window.location.href = `producto.html?id=${productCard.dataset.productId}`;
    });

    // Main Filter Function
    function applyFilters() {
        const searchTerm = searchInput.value;
        const selectedEngine = filterEngine.value;
        const selectedTruck = filterTruck.value;
        const selectedCategory = filterCategory.value; // Simplified Category Key
        const selectedBrand = filterBrand.value;
        const searchIndex = createQueryIndex(searchTerm);
        const engineIndex = createQueryIndex(selectedEngine);
        const scoreIndex = searchIndex.text ? searchIndex : engineIndex;
        const shouldLimitInitialView = !searchIndex.text && !engineIndex.text && !selectedTruck && !selectedCategory && !selectedBrand;

        const filteredProducts = indexedProducts.filter(indexedProduct => {
            const product = indexedProduct.product;
            // Search Text Filter
            const matchesSearch = matchesSearchQuery(indexedProduct, searchIndex);

            // Engine Filter with aliases, e.g. OM352 also finds 1114/1517/1518 parts.
            const matchesEngine = matchesSearchQuery(indexedProduct, engineIndex);

            // Truck/model filter, e.g. 1114, 1620, Ford 1722, Iveco Eurocargo.
            const matchesTruck = truckMatches(indexedProduct, selectedTruck);

            // Category filter checks rubro, name, code, description and image path.
            const matchesCategory = categoryMatches(indexedProduct, selectedCategory);

            // Brand Filter (Custom Logic)
            const matchesBrand = brandMatches(indexedProduct, selectedBrand);

            return matchesSearch && matchesEngine && matchesTruck && matchesCategory && matchesBrand;
        });

        const shouldSort = Boolean(searchIndex.text || engineIndex.text);
        const rankedProducts = shouldSort
            ? filteredProducts
                .map(indexedProduct => ({
                    product: indexedProduct.product,
                    score: searchScore(indexedProduct, scoreIndex)
                }))
                .sort((a, b) => a.score - b.score)
                .map(item => item.product)
            : filteredProducts.map(indexedProduct => indexedProduct.product);

        currentProducts = rankedProducts;
        currentRenderLimit = shouldLimitInitialView ? INITIAL_RENDER_LIMIT : RESULT_RENDER_LIMIT;

        updateActiveFilters();
        renderProducts(currentProducts, currentRenderLimit);
    }

    function scheduleFilters() {
        window.clearTimeout(searchTimer);
        searchTimer = window.setTimeout(applyFilters, SEARCH_DEBOUNCE_MS);
    }

    // Event Listeners
    searchInput.addEventListener('input', scheduleFilters);
    filterEngine.addEventListener('change', applyFilters);
    filterTruck.addEventListener('change', applyFilters);
    filterCategory.addEventListener('change', applyFilters);
    filterBrand.addEventListener('change', applyFilters);

    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterEngine.value = '';
        filterTruck.value = '';
        filterCategory.value = '';
        filterBrand.value = '';
        applyFilters();
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentRenderLimit += LOAD_MORE_INCREMENT;
            renderProducts(currentProducts, currentRenderLimit);
        });
    }

    // Voice Search Functionality
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'es-ES';
        recognition.interimResults = false;

        if (voiceSearchBtn) {
            voiceSearchBtn.addEventListener('click', () => {
                if (voiceSearchBtn.classList.contains('listening')) {
                    recognition.stop();
                } else {
                    recognition.start();
                }
            });

            recognition.onstart = () => {
                voiceSearchBtn.classList.add('listening');
                searchInput.placeholder = "Escuchando...";
            };

            recognition.onend = () => {
                voiceSearchBtn.classList.remove('listening');
                searchInput.placeholder = "Buscar por código, motor, modelo o repuesto...";
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                searchInput.value = transcript;
                applyFilters(); // Trigger filter directly
                searchInput.focus();
            };

            recognition.onerror = (event) => {
                console.error('Error de reconocimiento de voz:', event.error);
                voiceSearchBtn.classList.remove('listening');
                searchInput.placeholder = "Error. Intenta de nuevo.";
            };
        }
    } else {
        if (voiceSearchBtn) {
            voiceSearchBtn.style.display = 'none';
        }
    }

    // Initial Setup
    populateFilters();
    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery) {
        searchInput.value = initialQuery;
    }
    applyFilters(); // Initial render
});

