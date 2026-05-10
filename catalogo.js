document.addEventListener('DOMContentLoaded', () => {
    const catalogGrid = document.getElementById('catalogGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    const productsData = typeof products !== 'undefined' ? products : [];

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

    // Render products function
    function renderProducts(productsToRender) {
        catalogGrid.innerHTML = '';

        if (productsToRender.length === 0) {
            noResults.style.display = 'block';
            return;
        } else {
            noResults.style.display = 'none';
        }

        // Keep the initial catalog light, but show every match when the user searches.
        const shouldLimitInitialView = !searchInput || !searchInput.value.trim();
        const limitedProducts = shouldLimitInitialView ? productsToRender.slice(0, 100) : productsToRender;

        limitedProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card catalog-card'; // Reusing product-card but adding catalog-card for specific tweaks
            card.title = product.name;

            // On click, go to detail page
            card.onclick = () => {
                window.location.href = `producto.html?id=${product.id}`;
            };

            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-info-hover">
                   <span>Ver detalles</span>
                </div>
            `;

            catalogGrid.appendChild(card);
        });
    }

    // search filter
    function filterProducts(query) {
        const filtered = productsData
            .filter(product => matchesSearchQuery(product, query))
            .sort((a, b) => searchScore(a, query) - searchScore(b, query));
        renderProducts(filtered);
    }

    // Event listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterProducts(e.target.value);
        });
    }

    // Initial render
    renderProducts(productsData);
});
