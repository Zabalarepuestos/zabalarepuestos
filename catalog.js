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
            // Redirect to detail page on click
            productCard.addEventListener('click', () => {
                window.location.href = `producto.html?id=${product.id}`;
            });
            productGrid.appendChild(productCard);
        });
    }


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

    // Modal logic removed

    // Voice Search Functionality




    // Check browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'es-ES';
        recognition.interimResults = false;

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

            // Trigger input event to filter products
            const inputEvent = new Event('input');
            searchInput.dispatchEvent(inputEvent);
            searchInput.focus();
        };

        recognition.onerror = (event) => {
            console.error('Error de reconocimiento de voz:', event.error);
            voiceSearchBtn.classList.remove('listening');
            searchInput.placeholder = "Error. Intenta de nuevo.";
        };
    } else {
        // Hide button if speech recognition is not supported
        if (voiceSearchBtn) {
            voiceSearchBtn.style.display = 'none';
        }
    }

    // Initial render
    renderProducts(products);
});
