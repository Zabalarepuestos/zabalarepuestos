document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');

    // Function to render products
    function renderProducts(filteredProducts) {
        productGrid.innerHTML = '';

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<div class="no-results"><h3>No se encontraron productos</h3><p>Intenta con otros términos de búsqueda</p></div>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-item';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-item-img">
                <div class="product-item-info">
                    <span class="product-item-brand">${product.brand}</span>
                    <h3 class="product-item-name">${product.name}</h3>
                    <p class="product-item-code">Código: ${product.code}</p>
                    <div class="btn-detail">Ver detalles</div>
                </div>
            `;
            productCard.addEventListener('click', () => openProductModal(product));
            productGrid.appendChild(productCard);
        });
    }

    // Function to open modal
    function openProductModal(product) {
        const whatsappMessage = encodeURIComponent(`Hola Zabala Repuestos! Me gustaría cotizar el siguiente producto: ${product.name} (Código: ${product.code})`);
        const whatsappLink = `https://wa.me/5492645859764?text=${whatsappMessage}`;

        modalBody.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="modal-img">
            <div class="modal-info">
                <p class="modal-brand">${product.brand}</p>
                <h2 class="modal-name">${product.name}</h2>
                <p class="modal-code">Código Original: ${product.code}</p>
                <p class="modal-desc">${product.description || 'Sin descripción disponible.'}</p>
                <a href="${whatsappLink}" class="btn-whatsapp" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24" fill="currentColor">
                        <path d="M248 8C111 8 0 119 0 256c0 58.8 22.1 114.5 62.1 158.4L8.7 512.6c-1.3 5.4 2.8 9.6 8.3 8.3l108.8-57.9c43.6 28.1 94.9 43 147.2 43 137 0 248-111 248-248S385 8 248 8zm120.3 365.1c-6.8 19.1-39.7 34.9-54.3 37.1-12.7 1.9-28.5 3.3-80.9-17-48.4-18.7-79.6-66.3-81.8-69.3-2.2-3-19.4-25.8-19.4-49.2 0-23.4 12.1-35 16.4-39.7 3.5-3.8 7.7-4.4 10.3-4.4 2.6 0 5.2 0 7.4.1 2.4.1 5.7.5 8.7 7.7 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9-2.2 4-4.4 6.6c-2.4 2.8-5.1 6.3-7.2 8.5-2.6 2.6-5.3 5.5-2.2 10.8 3.1 5.3 13.9 22.8 29.8 37 20.3 18.1 37.4 24.2 42.7 26.9 5.3 2.7 8.5 2.2 11.6-1.4 3.1-3.6 13.5-15.7 17.1-21 3.6-5.3 7.3-4.4 12.3-2.6 5.1 1.8 32.2 15.2 37.7 17.9 5.5 2.7 9.2 4 10.5 6.3 1.3 2.3 1.3 13.2-5.5 32.3z" />
                    </svg>
                    Cotizar por WhatsApp
                </a>
            </div>
        `;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    // Close modal events
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.code.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });

    // Initial render
    renderProducts(products);
});
