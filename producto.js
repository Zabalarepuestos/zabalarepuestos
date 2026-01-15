
document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('productDetailContainer');

    // Get product ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        showError('No se especificó ningún producto.');
        return;
    }

    // Find product in the global products array (from products.js)
    const product = products.find(p => p.id === productId);

    if (!product) {
        showError('Producto no encontrado.');
        return;
    }

    renderProductDetail(product);
});

function renderProductDetail(product) {
    const whatsappMessage = encodeURIComponent(`Hola Zabala Repuestos! Me gustaría cotizar el siguiente producto: ${product.name} (Código: ${product.code})`);
    const whatsappLink = `https://wa.me/5492645859764?text=${whatsappMessage}`;

    const html = `
        <a href="catalogo.html" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Volver al catálogo
        </a>
        
        <div class="product-detail-container">
            <div class="product-detail-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-detail-img">
            </div>
            
            <div class="product-detail-info">
                <span class="product-detail-brand">${product.brand}</span>
                <h1 class="product-detail-name">${product.name}</h1>
                
                <div>
                    <span class="product-detail-code">Código: ${product.code}</span>
                    ${product.originalCode ? `<span class="product-detail-code" style="margin-left: 10px;">Orig: ${product.originalCode}</span>` : ''}
                </div>
                
                <p class="product-detail-description">
                    ${product.description || 'Sin descripción disponible para este producto.'}
                </p>
                
                <a href="${whatsappLink}" class="btn-whatsapp-large" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="24" height="24" fill="currentColor">
                        <path d="M248 8C111 8 0 119 0 256c0 58.8 22.1 114.5 62.1 158.4L8.7 512.6c-1.3 5.4 2.8 9.6 8.3 8.3l108.8-57.9c43.6 28.1 94.9 43 147.2 43 137 0 248-111 248-248S385 8 248 8zm120.3 365.1c-6.8 19.1-39.7 34.9-54.3 37.1-12.7 1.9-28.5 3.3-80.9-17-48.4-18.7-79.6-66.3-81.8-69.3-2.2-3-19.4-25.8-19.4-49.2 0-23.4 12.1-35 16.4-39.7 3.5-3.8 7.7-4.4 10.3-4.4 2.6 0 5.2 0 7.4.1 2.4.1 5.7.5 8.7 7.7 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9-2.2 4-4.4 6.6c-2.4 2.8-5.1 6.3-7.2 8.5-2.6 2.6-5.3 5.5-2.2 10.8 3.1 5.3 13.9 22.8 29.8 37 20.3 18.1 37.4 24.2 42.7 26.9 5.3 2.7 8.5 2.2 11.6-1.4 3.1-3.6 13.5-15.7 17.1-21 3.6-5.3 7.3-4.4 12.3-2.6 5.1 1.8 32.2 15.2 37.7 17.9 5.5 2.7 9.2 4 10.5 6.3 1.3 2.3 1.3 13.2-5.5 32.3z" />
                    </svg>
                    Consultar Precio por WhatsApp
                </a>
            </div>
        </div>
    `;

    document.getElementById('productDetailContainer').innerHTML = html;
}

function showError(message) {
    document.getElementById('productDetailContainer').innerHTML = `
        <div class="error-message">
            <h2>¡Ups!</h2>
            <p>${message}</p>
            <a href="catalogo.html" class="back-link" style="margin-top: 20px;">
                Volver al catálogo
            </a>
        </div>
    `;
}
