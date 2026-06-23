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
    const searchSuggestions = document.getElementById('searchSuggestions');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn'); // Ensure this is selected if used
    const vehicleFilterTree = document.getElementById('vehicleFilterTree');
    const typeFilterGrid = document.getElementById('typeFilterGrid');
    const quoteTray = document.getElementById('quoteTray');
    const quoteTrayCount = document.getElementById('quoteTrayCount');
    const quoteTrayList = document.getElementById('quoteTrayList');
    const quoteTraySend = document.getElementById('quoteTraySend');
    const quoteTrayClear = document.getElementById('quoteTrayClear');
    const quoteTrayToggle = document.getElementById('quoteTrayToggle');
    const productsData = typeof products !== 'undefined' && Array.isArray(products) ? products : [];
    const INITIAL_RENDER_LIMIT = 48;
    const RESULT_RENDER_LIMIT = 120;
    const LOAD_MORE_INCREMENT = 120;
    const SEARCH_DEBOUNCE_MS = 180;
    const FILTER_AVAILABILITY_DELAY_MS = 80;
    const INDEX_CHUNK_SIZE = 40;
    const INDEX_CHUNK_BUDGET_MS = 5;
    const SUGGESTION_LIMIT = 8;
    const FALLBACK_IMAGE = 'img/products/imagen-proximamente.png';
    const QUOTE_STORAGE_KEY = 'zabalaQuoteItems';
    const WHATSAPP_NUMBER = '5492645859764';
    let brandFilterOptions = [];
    let searchTimer = null;
    let availabilityTimer = null;
    let availabilityRequestId = 0;
    let currentProducts = [];
    let currentRenderLimit = INITIAL_RENDER_LIMIT;
    let indexedProducts = [];
    let indexReady = false;
    let pendingFilterRequest = false;
    let searchHasFocus = false;
    let activeSuggestionIndex = -1;
    let currentSuggestionProducts = [];
    let productsStatus = document.getElementById('productsStatus');
    let vehicleFilterItems = [];
    let quoteItems = [];
    let quoteTrayListOpen = false;

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
        "MOTOR": ["MOTOR", "BLOCK", "CIGUEÑAL", "CIGUENAL", "DISTRIBUCION", "TAPA CILINDRO", "VALVULA MOTOR", "SOPORTE MOTOR", "PISTON", "BIELA", "CAMISA", "CARTER", "MULTIPLE", "ESCAPE"],
        "JUNTAS Y RETENES": ["JUNTA", "JUNTAS", "JGO JUNTA", "JTA", "RETEN", "RETENES", "ORING", "ORINGS", "EMPAQUETADURA"],
        "INYECCION Y TURBO": ["INYECCION", "INYECTOR", "TOBERA", "BOMBA INYECTORA", "TURBO", "TURBINA", "COMBUSTIBLE", "GAS OIL", "GASOIL", "DIESEL", "ACELERADOR", "ACELERACION"],
        "REFRIGERACION": ["REFRIGERACION", "RADIADOR", "BOMBA AGUA", "CALEFACCION", "VENTILADOR", "TERMOSTATO", "VISCOSO", "MANGUERA AGUA", "DEPOSITO AGUA", "REFRIGERANTE"],
        "TRANSMISION Y EMBRAGUE": ["EMBRAGUE", "CAJA", "VELOCIDAD", "EJE", "CARDAN", "DIFERENCIAL", "TRANSMISION", "RUEDA", "CRAPODINA", "HORQUILLA", "SINCRONIZADO", "DIRECTA", "PALIER"],
        "FRENOS Y AIRE": ["FRENO", "COMPRESOR", "VALVULA", "VALVULAS", "CAMARA", "AIRE", "PEDALERA", "TRISTOP", "SECADOR", "PULMON", "REGISTRO"],
        "SUSPENSION Y DIRECCION": ["DIRECCION", "SUSPENSION", "ELASTICO", "AMORTIGUADOR", "AMORTIGUADORES", "TREN DELANTERO", "BARRA", "BUJE", "ROTULA", "EXTREMO"],
        "ELECTRICIDAD": ["ELECTRICIDAD", "ALTERNADOR", "ARRANQUE", "INSTRUMENTAL", "FAROS", "LUCES", "BATERIA", "INSTALACION", "ELECTRICA", "SENSOR", "SENSORES", "INTERRUPTOR"],
        "FILTROS Y LUBRICACION": ["FILTRO", "LUBRICACION", "ACEITE", "GRASA"],
        "ACOPLES Y CONEXIONES": ["ACOPLE", "RACORD", "CONECTOR", "CONEXION", "TEE", "MANGUERA", "TUBO", "FLEXIBLE", "FLEXIBLES", "CAÑO", "CANO"],
        "CARROCERIA Y OTROS": ["CABINA", "PUERTA", "VIDRIO", "ESPEJO", "PARAGOLPE", "GUARDABARRO", "HERRAMIENTAS", "REVESTIMIENTO", "BEPO", "DESPIECE", "TANQUE", "DEPOSITO", "DEPOSITOS"]
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

    const vehicleFilterGroups = [
        {
            label: "MERCEDES BENZ",
            search: "Mercedes Benz",
            icon: "mercedes_logo.png",
            open: true,
            children: [
                { label: "MB 1112/1114", search: "Mercedes Benz 1114", icon: "img/camion_animado.png" },
                { label: "MB 608", search: "Mercedes Benz 608", icon: "img/camion_animado.png" },
                { label: "MB 1215/1218/1620", search: "Mercedes Benz 1620", icon: "img/camion_animado.png" },
                { label: "MB 1624/1633/1634", search: "Mercedes Benz 1634", icon: "img/camion_animado.png" },
                { label: "MB ATRON 1634", search: "Mercedes Benz Atron 1634", icon: "img/camion_animado.png" },
                { label: "MB 1938", search: "Mercedes Benz 1938", icon: "img/camion_animado.png" },
                { label: "MB ATEGO", search: "Mercedes Benz Atego", icon: "img/camion_animado.png" },
                { label: "MB AXOR", search: "Mercedes Benz Axor", icon: "img/camion_animado.png" },
                { label: "MB 712/1720", search: "Mercedes Benz 1720", icon: "img/camion_animado.png" },
                { label: "MB 710", search: "Mercedes Benz 710", icon: "img/camion_animado.png" },
                { label: "MB ACCELO", search: "Mercedes Benz Accelo", icon: "img/camion_animado.png" },
                { label: "MB ACTROS", search: "Mercedes Benz Actros", icon: "img/camion_animado.png" },
                { label: "MB 1938 FRONTAL", search: "Mercedes Benz 1938 Frontal", icon: "img/camion_animado.png" },
                { label: "MB NEW ACTROS", search: "Mercedes Benz New Actros", icon: "img/camion_animado.png" }
            ]
        },
        {
            label: "FORD",
            search: "Ford",
            icon: "ford_logo.png",
            children: [
                { label: "FORD CARGO 915", search: "Ford Cargo 915", icon: "img/camion_animado.png" },
                { label: "FORD CARGO 1722", search: "Ford Cargo 1722", icon: "img/camion_animado.png" },
                { label: "FORD CARGO 1729", search: "Ford Cargo 1729", icon: "img/camion_animado.png" },
                { label: "FORD CARGO 916", search: "Ford Cargo 916", icon: "img/camion_animado.png" }
            ]
        },
        {
            label: "IVECO",
            search: "Iveco",
            icon: "iveco_logo.png",
            children: [
                { label: "IVECO DAILY", search: "Iveco Daily", icon: "img/camion_animado.png" },
                { label: "IVECO EUROCARGO", search: "Iveco Eurocargo", icon: "img/camion_animado.png" },
                { label: "IVECO TECTOR", search: "Iveco Tector", icon: "img/camion_animado.png" },
                { label: "IVECO STRALIS", search: "Iveco Stralis", icon: "img/camion_animado.png" }
            ]
        },
        {
            label: "VOLKSWAGEN",
            search: "Volkswagen",
            icon: "volkswagen_logo.png",
            children: [
                { label: "VW WORKER", search: "Volkswagen Worker", icon: "img/camion_animado.png" },
                { label: "VW CONSTELLATION", search: "Volkswagen Constellation", icon: "img/camion_animado.png" },
                { label: "VW 17-220", search: "Volkswagen 17-220", icon: "img/camion_animado.png" },
                { label: "VW 17-310", search: "Volkswagen 17-310", icon: "img/camion_animado.png" }
            ]
        },
        {
            label: "SCANIA",
            search: "Scania",
            icon: "scania_logo.png",
            children: [
                { label: "SCANIA 111", search: "Scania 111", icon: "img/camion_animado.png" },
                { label: "SCANIA 113", search: "Scania 113", icon: "img/camion_animado.png" },
                { label: "SCANIA 114", search: "Scania 114", icon: "img/camion_animado.png" },
                { label: "SCANIA 124", search: "Scania 124", icon: "img/camion_animado.png" },
                { label: "SCANIA PGR", search: "Scania PGR", icon: "img/camion_animado.png" }
            ]
        },
        {
            label: "ACCESORIOS",
            search: "Accesorios",
            icon: FALLBACK_IMAGE,
            children: [
                { label: "CARROCERIA", search: "Carroceria", category: "CARROCERIA Y OTROS", icon: "parts_image.png" },
                { label: "ELECTRICIDAD", search: "Electricidad", category: "ELECTRICIDAD", icon: "parts_image.png" },
                { label: "FRENOS", search: "Frenos", category: "FRENOS Y AIRE", icon: "parts_image.png" }
            ]
        }
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

    const gearboxContextTerms = ["zf", "eaton"];
    const SEARCH_STOP_WORDS = new Set([
        "de", "del", "la", "las", "el", "los", "para", "por", "con", "sin", "y", "o", "a", "al", "en"
    ]);

    function termAlternatives(term) {
        const alternatives = [term];
        const synonyms = querySynonyms.get(term);

        if (synonyms) {
            alternatives.push(...synonyms.map(normalizeText));
        }

        if (term.length > 3 && term.endsWith('s')) {
            alternatives.push(term.slice(0, -1));
        } else if (term.length > 3) {
            alternatives.push(`${term}s`);
        }

        return [...new Set(alternatives)].map(text => ({
            text,
            compact: text.replace(/\s+/g, '')
        }));
    }

    const normalizedAliasGroups = engineAliasGroups.map(group => group.map(normalizeText));
    const normalizedAliasCompactGroups = normalizedAliasGroups.map(group => group.map(alias => alias.replace(/\s+/g, '')));
    const engineQueries = engines.map(engine => ({
        label: engine,
        query: createQueryIndex(engine)
    }));
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

    function productStrongText(product) {
        return normalizeText([
            product.id,
            product.name,
            product.code,
            product.originalCode,
            product.brand,
            product.rubro
        ].join(' '));
    }

    function createProductIndex(product) {
        const baseText = productBaseText(product);
        const strongText = productStrongText(product);
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
        const strongSearchText = `${strongText} ${aliasesToAdd.join(' ')}`.trim();
        const nameText = normalizeText(product.name);
        const codeText = normalizeText(`${product.code || ''} ${product.originalCode || ''}`);
        const rubroText = normalizeText(product.rubro);
        const descriptionText = normalizeText(product.description);

        const indexedProduct = {
            product,
            baseText,
            baseCompact: compactBase,
            searchText,
            searchCompact: searchText.replace(/\s+/g, ''),
            strongText,
            strongCompact: strongText.replace(/\s+/g, ''),
            strongSearchText,
            strongSearchCompact: strongSearchText.replace(/\s+/g, ''),
            nameText,
            nameCompact: nameText.replace(/\s+/g, ''),
            codeText,
            codeCompact: codeText.replace(/\s+/g, ''),
            rubroText,
            rubroCompact: rubroText.replace(/\s+/g, ''),
            descriptionText,
            descriptionCompact: descriptionText.replace(/\s+/g, ''),
            brandText: normalizeText(product.brand),
            brandLower: String(product.brand || '').toLowerCase(),
            categoryText,
            rubroUpper: String(product.rubro || '').toUpperCase(),
            engineLabels: [],
            truckLabels: [],
            categoryLabels: [],
            brandLabels: []
        };

        indexedProduct.engineLabels = engineQueries
            .filter(engine => matchesSearchQuery(indexedProduct, engine.query))
            .map(engine => engine.label);
        indexedProduct.truckLabels = normalizedTruckModelGroups
            .filter(group => group.aliases.some(aliasQuery => truckAliasMatches(indexedProduct, aliasQuery)))
            .map(group => group.label);
        indexedProduct.categoryLabels = Object.keys(normalizedCategoryMapping)
            .filter(category => {
                const keywords = normalizedCategoryMapping[category] || [];
                return keywords.some(keyword => indexedProduct.categoryText.includes(keyword));
            });
        indexedProduct.brandLabels = [String(product.brand || '').trim()].filter(Boolean);

        return indexedProduct;
    }

    function createQueryIndex(query) {
        const text = normalizeText(query);
        const compact = text.replace(/\s+/g, '');
        const rawTerms = text ? text.split(' ') : [];
        const usefulTerms = rawTerms.filter(term => !SEARCH_STOP_WORDS.has(term));
        const terms = usefulTerms.length > 0 ? usefulTerms : rawTerms;

        return {
            text,
            compact,
            terms: terms.map(term => ({
                text: term,
                compact: term.replace(/\s+/g, ''),
                alternatives: termAlternatives(term)
            }))
        };
    }

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

    function matchesStrongSearchQuery(indexedProduct, queryIndex) {
        if (!queryIndex.text) return true;

        if (includesTerm(indexedProduct.strongSearchText, indexedProduct.strongSearchCompact, queryIndex.text, queryIndex.compact)) {
            return true;
        }

        return queryIndex.terms.every(term =>
            term.alternatives.some(alternative =>
                includesTerm(indexedProduct.strongSearchText, indexedProduct.strongSearchCompact, alternative.text, alternative.compact)
            )
        );
    }

    function exactCodeMatches(indexedProduct, queryIndex) {
        return Boolean(queryIndex.text && includesTerm(indexedProduct.codeText, indexedProduct.codeCompact, queryIndex.text, queryIndex.compact));
    }

    function exactNameMatches(indexedProduct, queryIndex) {
        return Boolean(queryIndex.text && includesTerm(indexedProduct.nameText, indexedProduct.nameCompact, queryIndex.text, queryIndex.compact));
    }

    function queryTermMatchesField(fieldText, fieldCompact, term) {
        return term.alternatives.some(alternative =>
            includesTerm(fieldText, fieldCompact, alternative.text, alternative.compact)
        );
    }

    function queryTermsEveryField(fieldText, fieldCompact, queryIndex) {
        if (!queryIndex.text) return true;

        return queryIndex.terms.every(term => queryTermMatchesField(fieldText, fieldCompact, term));
    }

    function queryTermsSomeField(fieldText, fieldCompact, queryIndex) {
        if (!queryIndex.text) return false;

        return queryIndex.terms.some(term => queryTermMatchesField(fieldText, fieldCompact, term));
    }

    function termPositionInField(fieldText, fieldCompact, term) {
        let bestPosition = Number.POSITIVE_INFINITY;

        term.alternatives.forEach(alternative => {
            const textPosition = fieldText.indexOf(alternative.text);
            if (textPosition >= 0) bestPosition = Math.min(bestPosition, textPosition);

            const compactPosition = fieldCompact.indexOf(alternative.compact);
            if (compactPosition >= 0) bestPosition = Math.min(bestPosition, compactPosition);
        });

        return bestPosition;
    }

    function orderedTermPenalty(fieldText, fieldCompact, queryIndex) {
        if (!queryIndex.text) return 0;

        const positions = queryIndex.terms.map(term => termPositionInField(fieldText, fieldCompact, term));
        if (positions.some(position => !Number.isFinite(position))) return 60;

        const isOrdered = positions.every((position, index) => index === 0 || position >= positions[index - 1]);
        const firstPosition = Math.min(...positions);

        return (isOrdered ? 0 : 24) + Math.min(firstPosition, 40);
    }

    function matchedTermCount(indexedProduct, queryIndex) {
        if (!queryIndex.text) return 0;

        return queryIndex.terms.filter(term =>
            queryTermMatchesField(indexedProduct.searchText, indexedProduct.searchCompact, term)
        ).length;
    }

    function searchScore(indexedProduct, queryIndex) {
        if (!queryIndex.text) return 0;

        if (exactCodeMatches(indexedProduct, queryIndex)) return 0;
        if (exactNameMatches(indexedProduct, queryIndex)) return 8 + orderedTermPenalty(indexedProduct.nameText, indexedProduct.nameCompact, queryIndex);
        if (queryTermsEveryField(indexedProduct.nameText, indexedProduct.nameCompact, queryIndex)) return 20 + orderedTermPenalty(indexedProduct.nameText, indexedProduct.nameCompact, queryIndex);
        if (queryTermsEveryField(indexedProduct.codeText, indexedProduct.codeCompact, queryIndex)) return 30;
        if (matchesStrongSearchQuery(indexedProduct, queryIndex)) return 45 + orderedTermPenalty(indexedProduct.strongSearchText, indexedProduct.strongSearchCompact, queryIndex);
        if (queryTermsEveryField(indexedProduct.baseText, indexedProduct.baseCompact, queryIndex)) return 85 + orderedTermPenalty(indexedProduct.baseText, indexedProduct.baseCompact, queryIndex);
        if (includesTerm(indexedProduct.baseText, indexedProduct.baseCompact, queryIndex.text, queryIndex.compact)) return 105;
        if (matchesSearchQuery(indexedProduct, queryIndex)) return 125;
        return 220 - matchedTermCount(indexedProduct, queryIndex);
    }

    function optionLabel(label, count) {
        return Number.isFinite(count) ? `${label} (${count})` : label;
    }

    function categoryMatches(indexedProduct, category) {
        if (!category) return true;
        return indexedProduct.categoryLabels.includes(category);
    }

    function brandMatches(indexedProduct, brand) {
        if (!brand) return true;
        const filterBrand = normalizeText(brand);
        const productBrand = indexedProduct.brandText;

        return productBrand === filterBrand || productBrand.includes(filterBrand);
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

        return indexedProduct.truckLabels.includes(truckLabel);
    }

    function queryContainsAlias(queryIndex, aliasQuery) {
        if (!queryIndex.text || !aliasQuery.text) return false;

        if (/^[0-9]+$/.test(aliasQuery.text)) {
            return includesWholeToken(queryIndex.text, aliasQuery.text);
        }

        if (aliasQuery.compact.length >= 4 && queryIndex.compact.includes(aliasQuery.compact)) {
            return true;
        }

        return aliasQuery.terms.every(term => includesWholeToken(queryIndex.text, term.text));
    }

    function removeAliasFromQuery(queryText, aliasQuery) {
        if (!queryText || !aliasQuery.text) return queryText;
        let result = ` ${queryText} `;

        aliasQuery.terms.forEach(term => {
            if (!term.text) return;
            const escaped = term.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            result = result.replace(new RegExp(`\\s${escaped}\\s`, 'g'), ' ');
        });

        return result.trim().replace(/\s+/g, ' ');
    }

    function detectSearchContext(searchTerm) {
        const queryIndex = createQueryIndex(searchTerm);
        let productText = queryIndex.text;
        const engineLabels = [];
        const truckLabels = [];
        const vehicleQueries = [];
        const gearboxQueries = [];

        engineQueries.forEach(engine => {
            if (queryContainsAlias(queryIndex, engine.query)) {
                engineLabels.push(engine.label);
                vehicleQueries.push(engine.query);
                productText = removeAliasFromQuery(productText, engine.query);
            }
        });

        normalizedTruckModelGroups.forEach(group => {
            const matchedAlias = group.aliases.find(aliasQuery => queryContainsAlias(queryIndex, aliasQuery));
            if (matchedAlias) {
                truckLabels.push(group.label);
                vehicleQueries.push(matchedAlias);
                productText = removeAliasFromQuery(productText, matchedAlias);
            }
        });

        gearboxContextTerms.forEach(term => {
            const termQuery = createQueryIndex(term);
            if (queryContainsAlias(queryIndex, termQuery)) {
                gearboxQueries.push(termQuery);
                productText = removeAliasFromQuery(productText, termQuery);
            }
        });

        return {
            originalQuery: queryIndex,
            productQuery: createQueryIndex(productText),
            engineLabels: [...new Set(engineLabels)],
            truckLabels: [...new Set(truckLabels)],
            vehicleQueries,
            gearboxQueries
        };
    }

    function implicitVehicleMatches(indexedProduct, searchContext) {
        const engineMatch = searchContext.engineLabels.length === 0 ||
            searchContext.engineLabels.some(label => indexedProduct.engineLabels.includes(label));
        const truckMatch = searchContext.truckLabels.length === 0 ||
            searchContext.truckLabels.some(label => indexedProduct.truckLabels.includes(label));
        const gearboxMatch = !searchContext.gearboxQueries || searchContext.gearboxQueries.length === 0 ||
            searchContext.gearboxQueries.some(query => matchesSearchQuery(indexedProduct, query));

        return engineMatch && truckMatch && gearboxMatch;
    }

    function vehicleSearchScore(indexedProduct, searchContext) {
        const contextQueries = [
            ...searchContext.vehicleQueries,
            ...(searchContext.gearboxQueries || [])
        ];

        if (!contextQueries.length) return 0;

        const scores = contextQueries.map(vehicleQuery => {
            if (includesTerm(indexedProduct.strongText, indexedProduct.strongCompact, vehicleQuery.text, vehicleQuery.compact)) return 0;
            if (includesTerm(indexedProduct.baseText, indexedProduct.baseCompact, vehicleQuery.text, vehicleQuery.compact)) return 1;
            return 2;
        });

        return Math.min(...scores);
    }

    function compareRankedProducts(a, b) {
        if (a.score !== b.score) return a.score - b.score;
        if (a.vehicleScore !== b.vehicleScore) return a.vehicleScore - b.vehicleScore;
        return String(a.product.name || '').localeCompare(String(b.product.name || ''), 'es');
    }

    function appendFilterOption(select, value, label, count) {
        const option = document.createElement('option');
        option.value = value;
        option.dataset.label = label;
        option.textContent = optionLabel(label, count);
        select.appendChild(option);
    }

    function clearSelectOptions(select, defaultLabel) {
        select.textContent = '';
        appendFilterOption(select, '', defaultLabel);
    }

    function setFiltersDisabled(disabled) {
        [filterEngine, filterTruck, filterCategory, filterBrand]
            .filter(Boolean)
            .forEach(control => {
                control.disabled = disabled;
                control.setAttribute('aria-disabled', disabled ? 'true' : 'false');
            });

        [vehicleFilterTree, typeFilterGrid]
            .filter(Boolean)
            .forEach(control => {
                control.classList.toggle('is-loading', disabled);
                control.setAttribute('aria-disabled', disabled ? 'true' : 'false');
            });
    }

    function getVehicleFilterMatcher(item) {
        if (!item._matcher) {
            const context = detectSearchContext(item.search);
            const query = context.productQuery.text ? context.productQuery : context.originalQuery;
            item._matcher = { context, query };
        }

        return item._matcher;
    }

    function vehicleFilterMatches(indexedProduct, item) {
        if (item.category && !categoryMatches(indexedProduct, item.category)) return false;
        if (!item.search) return true;

        const matcher = getVehicleFilterMatcher(item);
        return matchesSearchQuery(indexedProduct, matcher.query) && implicitVehicleMatches(indexedProduct, matcher.context);
    }

    function countVehicleFilter(item, filters = null) {
        if (!indexReady) return '...';

        return indexedProducts.reduce((total, indexedProduct) => {
            if (filters && !matchesFilterSet(indexedProduct, filters, item.category ? 'category' : '')) return total;
            return vehicleFilterMatches(indexedProduct, item) ? total + 1 : total;
        }, 0);
    }

    function countCategoryFilter(category, filters = null) {
        if (!indexReady) return '...';

        return indexedProducts.reduce((total, indexedProduct) => {
            if (filters && !matchesFilterSet(indexedProduct, filters, 'category')) return total;
            return categoryMatches(indexedProduct, category) ? total + 1 : total;
        }, 0);
    }

    function isVehicleFilterActive(item) {
        const activeSearch = normalizeText(searchInput.value);
        const itemSearch = normalizeText(item.search);
        return Boolean(itemSearch && activeSearch === itemSearch) ||
            Boolean(item.category && filterCategory.value === item.category);
    }

    function renderVehicleFilters(filters = null) {
        if (!vehicleFilterTree) return;

        vehicleFilterItems = [];
        vehicleFilterTree.textContent = '';

        vehicleFilterGroups.forEach((group, groupIndex) => {
            const groupElement = document.createElement('div');
            groupElement.className = `filter-tree-group${group.open ? ' is-open' : ''}`;
            groupElement.dataset.groupIndex = String(groupIndex);

            const groupButton = createVehicleFilterButton(group, countVehicleFilter(group, filters), true);
            groupElement.appendChild(groupButton);

            if (Array.isArray(group.children) && group.children.length > 0) {
                const childrenElement = document.createElement('div');
                childrenElement.className = 'filter-tree-children';

                group.children.forEach(child => {
                    childrenElement.appendChild(createVehicleFilterButton(child, countVehicleFilter(child, filters), false));
                });

                groupElement.appendChild(childrenElement);
            }

            vehicleFilterTree.appendChild(groupElement);
        });
    }

    function createVehicleFilterButton(item, count, isGroup) {
        const itemIndex = vehicleFilterItems.push(item) - 1;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `filter-tree-row${isGroup ? '' : ' filter-tree-child'}${isVehicleFilterActive(item) ? ' is-active' : ''}`;
        button.dataset.filterIndex = String(itemIndex);

        const icon = document.createElement('img');
        icon.className = 'filter-tree-icon';
        icon.src = item.icon || 'img/camion_animado.png';
        icon.alt = '';
        icon.loading = 'lazy';

        const label = document.createElement('span');
        label.className = 'filter-tree-label';
        label.textContent = item.label;

        const badge = document.createElement('span');
        badge.className = 'filter-tree-count';
        badge.textContent = String(count);

        button.append(icon, label, badge);

        if (isGroup) {
            const toggle = document.createElement('span');
            toggle.className = 'filter-tree-toggle';
            toggle.textContent = item.open ? '−' : '+';
            button.appendChild(toggle);
        }

        return button;
    }

    function renderTypeFilters(filters = null) {
        if (!typeFilterGrid) return;

        typeFilterGrid.textContent = '';

        Object.keys(categoryMapping).forEach(category => {
            const count = countCategoryFilter(category, filters);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `type-filter-btn${filterCategory.value === category ? ' is-active' : ''}`;
            button.dataset.category = category;
            button.textContent = category;

            const badge = document.createElement('span');
            badge.className = 'filter-chip-count';
            badge.textContent = String(count);
            button.appendChild(badge);

            typeFilterGrid.appendChild(button);
        });
    }

    function renderSidebarFilters(filters = null) {
        renderVehicleFilters(filters);
        renderTypeFilters(filters);
    }

    function applyVehicleFilter(item) {
        searchInput.value = item.search || '';
        if (item.category) {
            filterCategory.value = item.category;
        }
        hideSuggestions();
        applyFilters();
    }

    function scheduleIndexWork(callback) {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout: 120 });
            return;
        }

        window.setTimeout(() => {
            callback({
                timeRemaining: () => INDEX_CHUNK_BUDGET_MS
            });
        }, 16);
    }

    function buildIndexAsync(onComplete) {
        let productIndex = 0;

        function buildChunk(deadline) {
            const start = (window.performance && window.performance.now) ? window.performance.now() : Date.now();

            while (productIndex < productsData.length) {
                indexedProducts.push(createProductIndex(productsData[productIndex]));
                productIndex += 1;

                const now = (window.performance && window.performance.now) ? window.performance.now() : Date.now();
                const idleTimeRemaining = deadline && typeof deadline.timeRemaining === 'function'
                    ? deadline.timeRemaining()
                    : INDEX_CHUNK_BUDGET_MS;

                if (productIndex % INDEX_CHUNK_SIZE === 0 && (now - start >= INDEX_CHUNK_BUDGET_MS || idleTimeRemaining <= 1)) {
                    break;
                }
            }

            if (productIndex < productsData.length) {
                scheduleIndexWork(buildChunk);
                return;
            }

            indexReady = true;
            onComplete();
        }

        scheduleIndexWork(buildChunk);
    }

    // Function to populate filters
    function populateFilters() {
        const engineCounts = new Map(engines.map(engine => [engine, 0]));
        const truckCounts = new Map(truckModelGroups.map(group => [group.label, 0]));
        const categoryCounts = new Map(Object.keys(categoryMapping).map(category => [category, 0]));
        const brandCounts = new Map();

        indexedProducts.forEach(indexedProduct => {
            indexedProduct.engineLabels.forEach(label => engineCounts.set(label, (engineCounts.get(label) || 0) + 1));
            indexedProduct.truckLabels.forEach(label => truckCounts.set(label, (truckCounts.get(label) || 0) + 1));
            indexedProduct.categoryLabels.forEach(label => categoryCounts.set(label, (categoryCounts.get(label) || 0) + 1));
            indexedProduct.brandLabels.forEach(label => brandCounts.set(label, (brandCounts.get(label) || 0) + 1));
        });

        brandFilterOptions = [...brandCounts.entries()]
            .filter(([, count]) => count > 0)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'es'))
            .map(([brand]) => brand);

        clearSelectOptions(filterEngine, 'Todos los Motores');
        clearSelectOptions(filterTruck, 'Todos los Camiones');
        clearSelectOptions(filterCategory, 'Todos los Rubros');
        clearSelectOptions(filterBrand, 'Todas las Marcas');

        engines.forEach(engine => {
            const count = engineCounts.get(engine) || 0;
            appendFilterOption(filterEngine, engine, engine, count);
        });

        truckModelGroups.forEach(group => {
            const count = truckCounts.get(group.label) || 0;
            if (count === 0) return;
            appendFilterOption(filterTruck, group.label, group.label, count);
        });

        Object.keys(categoryMapping).forEach(category => {
            const count = categoryCounts.get(category) || 0;
            appendFilterOption(filterCategory, category, category, count);
        });

        brandFilterOptions.forEach(brand => {
            const count = brandCounts.get(brand) || 0;
            appendFilterOption(filterBrand, brand, brand, count);
        });

        renderSidebarFilters();
    }

    function updateSelectOptionCounts(select, counts, keepSelectedEnabled = true) {
        [...select.options].forEach(option => {
            if (!option.value) return;

            const label = option.dataset.label || option.value;
            const count = counts.get(option.value) || 0;
            option.textContent = optionLabel(label, count);
            option.disabled = count === 0 && !(keepSelectedEnabled && option.selected);
        });
    }

    function searchMatchesProduct(indexedProduct, searchIndex) {
        if (!searchIndex.text) return true;
        return matchesSearchQuery(indexedProduct, searchIndex);
    }

    function matchesFilterSet(indexedProduct, filters, skipFilter = '') {
        if (!searchMatchesProduct(indexedProduct, filters.searchIndex)) return false;

        if (skipFilter !== 'engine' && !matchesSearchQuery(indexedProduct, filters.engineIndex)) return false;
        if (skipFilter !== 'truck' && !truckMatches(indexedProduct, filters.selectedTruck)) return false;
        if (skipFilter !== 'category' && !categoryMatches(indexedProduct, filters.selectedCategory)) return false;
        if (skipFilter !== 'brand' && !brandMatches(indexedProduct, filters.selectedBrand)) return false;
        if (!implicitVehicleMatches(indexedProduct, filters.searchContext)) return false;

        return true;
    }

    function updateFilterAvailability(filters) {
        if (!indexReady) return;

        const engineCounts = new Map(engines.map(engine => [engine, 0]));
        const truckCounts = new Map(truckModelGroups.map(group => [group.label, 0]));
        const categoryCounts = new Map(Object.keys(categoryMapping).map(category => [category, 0]));
        const brandCounts = new Map(brandFilterOptions.map(brand => [brand, 0]));

        indexedProducts.forEach(indexedProduct => {
            const matchesSearch = searchMatchesProduct(indexedProduct, filters.searchIndex);
            const matchesImplicitVehicle = matchesSearch && implicitVehicleMatches(indexedProduct, filters.searchContext);
            if (!matchesImplicitVehicle) return;

            const matchesEngine = matchesSearchQuery(indexedProduct, filters.engineIndex);
            const matchesTruck = truckMatches(indexedProduct, filters.selectedTruck);
            const matchesCategory = categoryMatches(indexedProduct, filters.selectedCategory);
            const matchesBrand = brandMatches(indexedProduct, filters.selectedBrand);

            if (matchesTruck && matchesCategory && matchesBrand) {
                indexedProduct.engineLabels.forEach(label => engineCounts.set(label, (engineCounts.get(label) || 0) + 1));
            }

            if (matchesEngine && matchesCategory && matchesBrand) {
                indexedProduct.truckLabels.forEach(label => truckCounts.set(label, (truckCounts.get(label) || 0) + 1));
            }

            if (matchesEngine && matchesTruck && matchesBrand) {
                indexedProduct.categoryLabels.forEach(label => categoryCounts.set(label, (categoryCounts.get(label) || 0) + 1));
            }

            if (matchesEngine && matchesTruck && matchesCategory) {
                indexedProduct.brandLabels.forEach(label => brandCounts.set(label, (brandCounts.get(label) || 0) + 1));
            }
        });

        updateSelectOptionCounts(filterEngine, engineCounts);
        updateSelectOptionCounts(filterTruck, truckCounts);
        updateSelectOptionCounts(filterCategory, categoryCounts);
        updateSelectOptionCounts(filterBrand, brandCounts);
        renderSidebarFilters();
    }

    function scheduleFilterAvailability(filters) {
        const requestId = availabilityRequestId + 1;
        availabilityRequestId = requestId;
        window.clearTimeout(availabilityTimer);

        availabilityTimer = window.setTimeout(() => {
            if (requestId !== availabilityRequestId) return;
            updateFilterAvailability(filters);
        }, FILTER_AVAILABILITY_DELAY_MS);
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

    function shouldShowSuggestions() {
        return Boolean(searchSuggestions && searchHasFocus && searchInput.value.trim().length >= 2 && currentSuggestionProducts.length > 0);
    }

    function setSuggestionsOpen(isOpen) {
        if (!searchSuggestions) return;

        searchSuggestions.classList.toggle('is-open', isOpen);
        searchInput.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    function highlightSuggestionName(name, queryIndex) {
        const safeName = escapeHtml(name);
        const relevantTerms = queryIndex.terms
            .map(term => term.text)
            .filter(term => term.length >= 2)
            .sort((a, b) => b.length - a.length);

        if (relevantTerms.length === 0) return safeName;

        const pattern = relevantTerms
            .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('|');

        return safeName.replace(new RegExp(`(${pattern})`, 'ig'), '<mark>$1</mark>');
    }

    function suggestionMeta(product) {
        return [
            product.brand,
            product.rubro,
            product.code ? `Cod. ${product.code}` : ''
        ].filter(Boolean).join(' - ');
    }

    function renderSearchSuggestions(productsToSuggest, queryIndex) {
        if (!searchSuggestions) return;

        currentSuggestionProducts = productsToSuggest.slice(0, SUGGESTION_LIMIT);
        activeSuggestionIndex = -1;

        if (!shouldShowSuggestions()) {
            searchSuggestions.textContent = '';
            setSuggestionsOpen(false);
            return;
        }

        const queryText = escapeHtml(searchInput.value.trim());
        const itemsHtml = currentSuggestionProducts.map((product, index) => {
            const image = product.image || FALLBACK_IMAGE;
            const safeName = escapeHtml(product.name);
            const highlightedName = highlightSuggestionName(product.name, queryIndex);
            const safeMeta = escapeHtml(suggestionMeta(product));

            return `
                <button class="suggestion-item" type="button" role="option" data-index="${index}" aria-label="Ver ${safeName}">
                    <img src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
                    <span>
                        <span class="suggestion-name">${highlightedName}</span>
                        <span class="suggestion-meta">${safeMeta}</span>
                    </span>
                </button>
            `;
        }).join('');

        searchSuggestions.innerHTML = `
            <div class="suggestion-list">${itemsHtml}</div>
            <div class="suggestion-actions">
                <button type="button" data-action="exact">Buscar "${queryText}" exacto</button>
                <button type="button" data-action="all">Ver todos los resultados</button>
            </div>
        `;

        setSuggestionsOpen(true);
    }

    function updateSuggestionActiveState() {
        if (!searchSuggestions) return;

        searchSuggestions.querySelectorAll('.suggestion-item').forEach((item, index) => {
            item.classList.toggle('is-active', index === activeSuggestionIndex);
            item.setAttribute('aria-selected', index === activeSuggestionIndex ? 'true' : 'false');
        });
    }

    function openSuggestion(index) {
        const product = currentSuggestionProducts[index];
        if (!product) return;

        window.location.href = `producto.html?id=${product.id}`;
    }

    function hideSuggestions() {
        activeSuggestionIndex = -1;
        setSuggestionsOpen(false);
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

    function getProductById(productId) {
        return productsData.find(product => String(product.id) === String(productId));
    }

    function loadQuoteItems() {
        try {
            const savedIds = JSON.parse(localStorage.getItem(QUOTE_STORAGE_KEY) || '[]');
            if (!Array.isArray(savedIds)) return [];

            return savedIds
                .map(getProductById)
                .filter(Boolean)
                .slice(0, 24);
        } catch (error) {
            return [];
        }
    }

    function saveQuoteItems() {
        try {
            localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(quoteItems.map(product => product.id)));
        } catch (error) {
            // The quote still works during the session if storage is unavailable.
        }
    }

    function isProductInQuote(productId) {
        return quoteItems.some(product => String(product.id) === String(productId));
    }

    function updateQuoteButtons() {
        productGrid.querySelectorAll('[data-action="quote"]').forEach(button => {
            const isAdded = isProductInQuote(button.dataset.productId);
            button.classList.toggle('is-added', isAdded);
            button.setAttribute('aria-pressed', String(isAdded));
            button.textContent = isAdded ? 'Agregado' : 'Agregar a cotización';
        });
    }

    function buildQuoteMessage() {
        const lines = quoteItems.map((product, index) => {
            const code = product.code ? `Código: ${product.code}` : 'Código: consultar';
            const brand = product.brand ? `Marca: ${product.brand}` : 'Marca: consultar';
            return `${index + 1}. ${product.name} | ${code} | ${brand}`;
        });

        return [
            'Hola, quiero consultar disponibilidad y precio de estos repuestos:',
            '',
            ...lines
        ].join('\n');
    }

    function renderQuoteTray() {
        if (!quoteTray || !quoteTrayCount || !quoteTrayList || !quoteTraySend) return;

        const count = quoteItems.length;
        if (count === 0) {
            quoteTrayListOpen = false;
        }

        quoteTray.classList.toggle('is-open', count > 0);
        quoteTray.classList.toggle('has-list-open', quoteTrayListOpen && count > 0);
        quoteTray.setAttribute('aria-hidden', String(count === 0));
        quoteTrayCount.textContent = `${count} ${count === 1 ? 'repuesto' : 'repuestos'}`;
        quoteTraySend.disabled = count === 0;

        if (quoteTrayToggle) {
            quoteTrayToggle.disabled = count === 0;
            quoteTrayToggle.textContent = quoteTrayListOpen ? 'Ocultar lista' : 'Ver lista';
            quoteTrayToggle.setAttribute('aria-expanded', String(quoteTrayListOpen && count > 0));
        }

        if (count === 0) {
            quoteTrayList.textContent = '';
            return;
        }

        quoteTrayList.innerHTML = quoteItems.map(product => `
            <li class="quote-tray-item">
                <div>
                    <strong>${escapeHtml(product.name)}</strong>
                    <span>${escapeHtml(product.code || 'Código a consultar')}</span>
                </div>
                <button class="quote-tray-remove" type="button" data-remove-quote="${escapeHtml(product.id)}" aria-label="Quitar ${escapeHtml(product.name)}">Quitar</button>
            </li>
        `).join('');
    }

    function addQuoteProduct(product) {
        if (!product || isProductInQuote(product.id)) return;

        quoteItems = [...quoteItems, product].slice(0, 24);
        saveQuoteItems();
        renderQuoteTray();
        updateQuoteButtons();
    }

    function removeQuoteProduct(productId) {
        quoteItems = quoteItems.filter(product => String(product.id) !== String(productId));
        saveQuoteItems();
        renderQuoteTray();
        updateQuoteButtons();
    }

    function toggleQuoteProduct(productId) {
        if (isProductInQuote(productId)) {
            removeQuoteProduct(productId);
            return;
        }

        addQuoteProduct(getProductById(productId));
    }

    function sendQuoteByWhatsApp() {
        if (quoteItems.length === 0) return;

        const message = encodeURIComponent(buildQuoteMessage());
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener');
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

        productsToRender.forEach((product, index) => {
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
            const safeProductId = escapeHtml(product.id);
            const quoteIsAdded = isProductInQuote(product.id);
            const shouldPrioritizeImage = index < 8;
            const imageLoading = shouldPrioritizeImage ? 'eager' : 'lazy';
            const imagePriority = shouldPrioritizeImage ? 'fetchpriority="high"' : '';

            productCard.innerHTML = `
                <img src="${escapeHtml(imgPath)}" alt="${safeName}" class="product-item-img" loading="${imageLoading}" decoding="async" ${imagePriority} onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}'">
                <div class="product-item-info">
                    <span class="product-item-brand">${safeBrand}</span>
                    <h3 class="product-item-name">${safeName}</h3>
                    <p class="product-item-code">Código: ${safeCode}</p>
                    ${product.rubro ? `<p class="product-item-category">${safeRubro}</p>` : ''}
                    <div class="product-card-actions">
                        <button class="quick-quote-btn${quoteIsAdded ? ' is-added' : ''}" type="button" data-action="quote" data-product-id="${safeProductId}" aria-pressed="${quoteIsAdded}">${quoteIsAdded ? 'Agregado' : 'Agregar a cotización'}</button>
                        <div class="btn-detail">Ver detalles</div>
                    </div>
                </div>
            `;
            fragment.appendChild(productCard);
        });

        productGrid.appendChild(fragment);
        updateLoadMoreButton(productsToRender.length, filteredProducts.length);
        updateQuoteButtons();
    }

    productGrid.addEventListener('click', (event) => {
        const quoteButton = event.target.closest('[data-action="quote"]');
        if (quoteButton) {
            event.preventDefault();
            event.stopPropagation();
            toggleQuoteProduct(quoteButton.dataset.productId);
            return;
        }

        const productCard = event.target.closest('.product-item');
        if (!productCard || !productCard.dataset.productId) return;

        window.location.href = `producto.html?id=${productCard.dataset.productId}`;
    });

    productGrid.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        if (event.target.closest('button')) return;

        const productCard = event.target.closest('.product-item');
        if (!productCard || !productCard.dataset.productId) return;

        event.preventDefault();
        window.location.href = `producto.html?id=${productCard.dataset.productId}`;
    });

    // Main Filter Function
    function applyFilters() {
        if (!indexReady) {
            pendingFilterRequest = true;
            currentProducts = productsData;
            currentRenderLimit = INITIAL_RENDER_LIMIT;
            renderProducts(currentProducts, currentRenderLimit);
            if (productsStatus) {
                const hasActiveCriteria = Boolean(
                    searchInput.value.trim() ||
                    filterEngine.value ||
                    filterTruck.value ||
                    filterCategory.value ||
                    filterBrand.value
                );
                productsStatus.textContent = hasActiveCriteria
                    ? `Mostrando ${Math.min(INITIAL_RENDER_LIMIT, productsData.length)} de ${productsData.length} productos. Preparando búsqueda...`
                    : `Mostrando ${Math.min(INITIAL_RENDER_LIMIT, productsData.length)} de ${productsData.length} productos.`;
            }
            return;
        }

        pendingFilterRequest = false;
        const searchTerm = searchInput.value;
        const selectedEngine = filterEngine.value;
        const selectedTruck = filterTruck.value;
        const selectedCategory = filterCategory.value; // Simplified Category Key
        const selectedBrand = filterBrand.value;
        const searchContext = detectSearchContext(searchTerm);
        const searchIndex = searchContext.productQuery;
        const engineIndex = createQueryIndex(selectedEngine);
        const scoreIndex = searchIndex.text ? searchIndex : engineIndex;
        const hasImplicitVehicle = searchContext.engineLabels.length > 0 ||
            searchContext.truckLabels.length > 0 ||
            searchContext.gearboxQueries.length > 0;
        const shouldLimitInitialView = !searchIndex.text && !engineIndex.text && !selectedTruck && !selectedCategory && !selectedBrand && !hasImplicitVehicle;
        const activeFilterState = {
            searchContext,
            searchIndex,
            engineIndex,
            selectedTruck,
            selectedCategory,
            selectedBrand
        };

        const baseMatches = indexedProducts.filter(indexedProduct => {
            // Engine Filter with aliases, e.g. OM352 also finds 1114/1517/1518 parts.
            const matchesEngine = matchesSearchQuery(indexedProduct, engineIndex);

            // Truck/model filter, e.g. 1114, 1620, Ford 1722, Iveco Eurocargo.
            const matchesTruck = truckMatches(indexedProduct, selectedTruck);

            // Category filter checks rubro, name, code, description and image path.
            const matchesCategory = categoryMatches(indexedProduct, selectedCategory);

            // Brand Filter (Custom Logic)
            const matchesBrand = brandMatches(indexedProduct, selectedBrand);

            return matchesEngine && matchesTruck && matchesCategory && matchesBrand && implicitVehicleMatches(indexedProduct, searchContext);
        });

        let searchMatches = baseMatches;
        if (searchIndex.text) {
            const strongMatches = [];
            const looseMatches = [];

            baseMatches.forEach(indexedProduct => {
                if (matchesStrongSearchQuery(indexedProduct, searchIndex)) {
                    strongMatches.push(indexedProduct);
                    return;
                }

                if (matchesSearchQuery(indexedProduct, searchIndex)) {
                    looseMatches.push(indexedProduct);
                }
            });

            searchMatches = strongMatches.length > 0 ? [...strongMatches, ...looseMatches] : looseMatches;
        }

        const shouldSort = Boolean(searchIndex.text || engineIndex.text || hasImplicitVehicle);
        const rankedProducts = shouldSort
            ? searchMatches
                .map(indexedProduct => ({
                    product: indexedProduct.product,
                    score: searchIndex.text ? searchScore(indexedProduct, searchIndex) : searchScore(indexedProduct, scoreIndex),
                    vehicleScore: vehicleSearchScore(indexedProduct, searchContext)
                }))
                .sort(compareRankedProducts)
                .map(item => item.product)
            : searchMatches.map(indexedProduct => indexedProduct.product);

        currentProducts = rankedProducts;
        currentRenderLimit = shouldLimitInitialView ? INITIAL_RENDER_LIMIT : RESULT_RENDER_LIMIT;

        updateActiveFilters();
        renderSearchSuggestions(rankedProducts, searchContext.originalQuery);
        renderProducts(currentProducts, currentRenderLimit);
        scheduleFilterAvailability(activeFilterState);
    }

    function scheduleFilters() {
        window.clearTimeout(searchTimer);
        searchTimer = window.setTimeout(applyFilters, SEARCH_DEBOUNCE_MS);
    }

    // Event Listeners
    searchInput.addEventListener('input', scheduleFilters);
    searchInput.addEventListener('focus', () => {
        searchHasFocus = true;
        if (currentProducts.length > 0) {
            renderSearchSuggestions(currentProducts, createQueryIndex(searchInput.value));
        }
    });
    searchInput.addEventListener('keydown', (event) => {
        if (!searchSuggestions || !searchSuggestions.classList.contains('is-open')) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            activeSuggestionIndex = Math.min(activeSuggestionIndex + 1, currentSuggestionProducts.length - 1);
            updateSuggestionActiveState();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, 0);
            updateSuggestionActiveState();
        } else if (event.key === 'Enter' && activeSuggestionIndex >= 0) {
            event.preventDefault();
            openSuggestion(activeSuggestionIndex);
        } else if (event.key === 'Escape') {
            hideSuggestions();
        }
    });
    filterEngine.addEventListener('change', applyFilters);
    filterTruck.addEventListener('change', applyFilters);
    filterCategory.addEventListener('change', applyFilters);
    filterBrand.addEventListener('change', applyFilters);

    if (vehicleFilterTree) {
        vehicleFilterTree.addEventListener('click', (event) => {
            const button = event.target.closest('.filter-tree-row');
            if (!button) return;

            const groupElement = button.closest('.filter-tree-group');
            const item = vehicleFilterItems[Number(button.dataset.filterIndex)];
            if (!item) return;

            if (button.parentElement === groupElement && groupElement) {
                const groupIndex = Number(groupElement.dataset.groupIndex);
                const group = vehicleFilterGroups[groupIndex];
                if (group) {
                    group.open = !group.open;
                }
            }

            applyVehicleFilter(item);
        });
    }

    if (typeFilterGrid) {
        typeFilterGrid.addEventListener('click', (event) => {
            const button = event.target.closest('.type-filter-btn');
            if (!button) return;

            const selectedCategory = button.dataset.category || '';
            filterCategory.value = filterCategory.value === selectedCategory ? '' : selectedCategory;
            hideSuggestions();
            applyFilters();
        });
    }

    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterEngine.value = '';
        filterTruck.value = '';
        filterCategory.value = '';
        filterBrand.value = '';
        hideSuggestions();
        applyFilters();
    });

    if (searchSuggestions) {
        searchSuggestions.addEventListener('mousedown', (event) => {
            event.preventDefault();
        });

        searchSuggestions.addEventListener('click', (event) => {
            const item = event.target.closest('.suggestion-item');
            if (item) {
                openSuggestion(Number(item.dataset.index));
                return;
            }

            const action = event.target.closest('[data-action]');
            if (!action) return;

            hideSuggestions();
            if (action.dataset.action === 'exact') {
                searchInput.focus();
            }
        });
    }

    document.addEventListener('click', (event) => {
        if (!searchSuggestions || event.target.closest('.search-input-wrapper')) return;
        searchHasFocus = false;
        hideSuggestions();
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentRenderLimit += LOAD_MORE_INCREMENT;
            renderProducts(currentProducts, currentRenderLimit);
        });
    }

    if (quoteTrayList) {
        quoteTrayList.addEventListener('click', (event) => {
            const removeButton = event.target.closest('[data-remove-quote]');
            if (!removeButton) return;

            removeQuoteProduct(removeButton.dataset.removeQuote);
        });
    }

    if (quoteTraySend) {
        quoteTraySend.addEventListener('click', sendQuoteByWhatsApp);
    }

    if (quoteTrayClear) {
        quoteTrayClear.addEventListener('click', () => {
            quoteItems = [];
            saveQuoteItems();
            renderQuoteTray();
            updateQuoteButtons();
        });
    }

    if (quoteTrayToggle) {
        quoteTrayToggle.addEventListener('click', () => {
            quoteTrayListOpen = !quoteTrayListOpen;
            renderQuoteTray();
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
    setFiltersDisabled(true);
    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery) {
        searchInput.value = initialQuery;
    }
    quoteItems = loadQuoteItems();
    renderQuoteTray();
    currentProducts = productsData;
    currentRenderLimit = INITIAL_RENDER_LIMIT;
    renderProducts(currentProducts, currentRenderLimit);
    if (productsStatus) {
        productsStatus.textContent = `Mostrando ${Math.min(INITIAL_RENDER_LIMIT, productsData.length)} de ${productsData.length} productos.`;
    }
    renderSidebarFilters();

    window.setTimeout(() => {
        buildIndexAsync(() => {
            populateFilters();
            setFiltersDisabled(false);
            if (pendingFilterRequest || initialQuery) {
                applyFilters();
            } else {
                updateProductsStatus(Math.min(currentRenderLimit, currentProducts.length), currentProducts.length, currentProducts.length > currentRenderLimit);
            }
        });
    }, 120);
});

