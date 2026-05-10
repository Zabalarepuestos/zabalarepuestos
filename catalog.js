document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const filterEngine = document.getElementById('filterEngine');
    const filterCategory = document.getElementById('filterCategory');
    const filterBrand = document.getElementById('filterBrand');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn'); // Ensure this is selected if used

    // Defined lists for filters
    const engines = [
        "OM352", "OM366", "OM904", "OM906", "OM924", "OM926",
        "OM355", "OM447", "OM457", "OM611", "OM651",
        "ISB", "ISF", "6B", "6C", "O500", "SPRINTER", "IVECO", "SCANIA"
    ].sort();

    // Simplified Consolidate Categories Mapping
    const categoryMapping = {
        "MOTOR": ["MOTOR", "BLOCK", "CIGUEÑAL", "DISTRIBUCION", "JUNTAS", "RETENES", "TAPA CILINDRO", "VALVULA", "SOPORTE", "CORREAS", "PIEZAS MOTRICES", "MOTRICES", "ESCAPE", "MULTIPLE"],
        "INYECCIÓN Y TURBO": ["INYECCION", "TURBO", "TOBERA", "BOMBA INYECTORA", "COMBUSTIBLE", "ACELERACION"],
        "REFRIGERACIÓN": ["REFRIGERACION", "RADIADOR", "BOMBA AGUA", "CALEFACCION", "VENTILADOR", "AGUA"],
        "TRANSMISIÓN Y EMBRAGUE": ["EMBRAGUE", "CAJA", "VELOCIDAD", "EJE", "CARDAN", "DIFERENCIAL", "TRANSMISION", "RUEDA"],
        "FRENOS Y AIRE": ["FRENO", "COMPRESOR", "VALVULA", "CAMARA", "AIRE"],
        "SUSPENSIÓN Y DIRECCIÓN": ["DIRECCION", "SUSPENSION", "ELASTICO", "AMORTIGUADOR", "TREN DELANTERO"],
        "ELECTRICIDAD": ["ELECTRICIDAD", "ALTERNADOR", "ARRANQUE", "INSTRUMENTAL", "FAROS", "LUCES", "BATERIA", "INSTALACION", "ELECTRICA"],
        "FILTROS Y LUBRICACIÓN": ["FILTRO", "LUBRICACION", "ACEITE", "GRASA"],
        "CARROCERÍA Y OTROS": ["CABINA", "PUERTA", "VIDRIO", "ESPEJO", "PARAGOLPE", "HERRAMIENTAS", "REVESTIMIENTOS", "PEDALERA", "BEPO", "DESPIECE"]
    };

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

    const normalizedAliasGroups = engineAliasGroups.map(group => group.map(normalizeText));

    function normalizeText(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .trim()
            .replace(/\s+/g, ' ');
    }

    function compactText(value) {
        return normalizeText(value).replace(/\s+/g, '');
    }

    function includesTerm(text, term) {
        if (!term) return true;
        return text.includes(term) || compactText(text).includes(compactText(term));
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

    function productSearchText(product) {
        const baseText = productBaseText(product);
        const compactBase = compactText(baseText);
        const aliasesToAdd = [];

        normalizedAliasGroups.forEach(group => {
            const belongsToGroup = group.some(alias =>
                baseText.includes(alias) || compactBase.includes(compactText(alias))
            );

            if (belongsToGroup) {
                aliasesToAdd.push(...group);
            }
        });

        return `${baseText} ${aliasesToAdd.join(' ')}`;
    }

    function matchesSearchQuery(product, query) {
        const queryText = normalizeText(query);
        if (!queryText) return true;

        const searchableText = productSearchText(product);
        return queryText.split(' ').every(term => includesTerm(searchableText, term));
    }

    function searchScore(product, query) {
        const queryText = normalizeText(query);
        if (!queryText) return 0;

        const name = normalizeText(product.name);
        const code = normalizeText(`${product.code || ''} ${product.originalCode || ''}`);
        const baseText = productBaseText(product);
        const searchableText = productSearchText(product);

        if (includesTerm(code, queryText)) return 0;
        if (includesTerm(name, queryText)) return 1;
        if (includesTerm(baseText, queryText)) return 2;
        if (matchesSearchQuery(product, queryText)) return 3;
        if (includesTerm(searchableText, queryText)) return 4;
        return 5;
    }

    // Function to populate filters
    function populateFilters() {
        // Populate Engines
        engines.forEach(engine => {
            const option = document.createElement('option');
            option.value = engine;
            option.textContent = engine;
            filterEngine.appendChild(option);
        });

        // Populate Categories (Simplified List)
        Object.keys(categoryMapping).forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterCategory.appendChild(option);
        });

        // Populate Brands (Fixed List)
        const brands = ["Mercedes Benz", "Cummins", "Iveco", "Scania"];
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand; // The value will be used for filtering logic
            option.textContent = brand;
            filterBrand.appendChild(option);
        });
    }

    // Function to render products
    function renderProducts(filteredProducts) {
        productGrid.innerHTML = '';

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<div class="no-results"><h3>No se encontraron productos</h3><p>Intenta con otros términos de búsqueda o filtros.</p></div>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-item';
            productCard.title = product.name;

            // Handle missing image
            const imgPath = product.image || 'img/no-image.jpg';

            productCard.innerHTML = `
                <img src="${imgPath}" alt="${product.name}" class="product-item-img" onerror="this.src='img/no-image.jpg'"> <!-- Fallback for broken image -->
                <div class="product-item-info">
                    <span class="product-item-brand">${product.brand || ''}</span>
                    <h3 class="product-item-name">${product.name}</h3>
                    <p class="product-item-code">Código: ${product.code}</p>
                    ${product.rubro ? `<p class="product-item-category" style="font-size: 0.8rem; color: #94a3b8; margin-top: auto; margin-bottom: 10px;">${product.rubro}</p>` : ''}
                    <div class="btn-detail">Ver detalles</div>
                </div>
            `;
            // Redirect to detail page on click
            productCard.addEventListener('click', () => {
                window.location.href = `producto.html?id=${product.id}`;
            });
            productGrid.appendChild(productCard);
        });
    }

    // Main Filter Function
    function applyFilters() {
        const searchTerm = searchInput.value;
        const selectedEngine = filterEngine.value;
        const selectedCategory = filterCategory.value; // Simplified Category Key
        const selectedBrand = filterBrand.value;

        const filteredProducts = products.filter(product => {
            // Search Text Filter
            const matchesSearch = matchesSearchQuery(product, searchTerm);

            // Engine Filter with aliases, e.g. OM352 also finds 1114/1517/1518 parts.
            const matchesEngine = matchesSearchQuery(product, selectedEngine);

            // Category Filter (Mapped Logic)
            let matchesCategory = true;
            if (selectedCategory) {
                // Get keywords for the selected category
                const keywords = categoryMapping[selectedCategory];
                const productRubro = (product.rubro || "").toUpperCase(); // Current product rubro

                // Check if the product's rubro contains ANY of the keywords
                // Also assign "Uncategorized" items to Motor if mostly empty? No, strict matching first.
                if (!productRubro) {
                    matchesCategory = false; // No rubro, doesn't match a specific category filter
                } else {
                    matchesCategory = keywords.some(keyword => productRubro.includes(keyword));
                }
            }

            // Brand Filter (Custom Logic)
            let matchesBrand = !selectedBrand;
            if (selectedBrand) {
                const productBrand = (product.brand || "").toLowerCase();
                const filterBrandLower = selectedBrand.toLowerCase();

                if (filterBrandLower === "cummins") {
                    // Special case for Cummins (includes Ford/VW)
                    matchesBrand = productBrand.includes("cummins") ||
                        productBrand.includes("ford") ||
                        productBrand.includes("vw") ||
                        productBrand.includes("volkswagen");
                } else {
                    matchesBrand = productBrand.includes(filterBrandLower);
                }
            }

            return matchesSearch && matchesEngine && matchesCategory && matchesBrand;
        }).sort((a, b) => {
            const queryForScore = searchTerm || selectedEngine;
            return searchScore(a, queryForScore) - searchScore(b, queryForScore);
        });

        renderProducts(filteredProducts);
    }

    // Event Listeners
    searchInput.addEventListener('input', applyFilters);
    filterEngine.addEventListener('change', applyFilters);
    filterCategory.addEventListener('change', applyFilters);
    filterBrand.addEventListener('change', applyFilters);

    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterEngine.value = '';
        filterCategory.value = '';
        filterBrand.value = '';
        applyFilters();
    });

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
                searchInput.placeholder = "Buscar por nombre o código...";
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
    renderProducts(products); // Initial render
});
