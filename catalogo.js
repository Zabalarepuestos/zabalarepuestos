document.addEventListener('DOMContentLoaded', () => {
    const catalogGrid = document.getElementById('catalogGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    // Render products function
    function renderProducts(productsToRender) {
        catalogGrid.innerHTML = '';

        if (productsToRender.length === 0) {
            noResults.style.display = 'block';
            return;
        } else {
            noResults.style.display = 'none';
        }

        productsToRender.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card catalog-card'; // Reusing product-card but adding catalog-card for specific tweaks

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
        const lowerQuery = query.toLowerCase();
        const filtered = window.productsData.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.description.toLowerCase().includes(lowerQuery) ||
            (product.category && product.category.toLowerCase().includes(lowerQuery))
        );
        renderProducts(filtered);
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        filterProducts(e.target.value);
    });

    // Initial render
    renderProducts(window.productsData);
});
