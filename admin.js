document.addEventListener('DOMContentLoaded', () => {
    const addImageButtons = document.querySelectorAll('.add-image-btn');
    const addProductBtn = document.querySelectorAll('#add-product-btn, #add-product-btn-products');

    addImageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';

            fileInput.addEventListener('change', () => {
                const file = fileInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const productImg = button.parentElement.querySelector('img');
                        productImg.src = reader.result;
                    };
                    reader.readAsDataURL(file);
                }
            });

            document.body.appendChild(fileInput);
            fileInput.click();
            document.body.removeChild(fileInput);
        });
    });

    addProductBtn.forEach(button => {
        button.addEventListener('click', () => {
            const productType = button.id === 'add-product-btn' ? 'destaques' : 'products';
            const productList = document.getElementById(`${productType}-list`);

            const newProduct = document.createElement('div');
            newProduct.classList.add('product-item');
            newProduct.innerHTML = `
                <img src="placeholder.jpg" alt="Novo Produto">
                <h2>Nome do Produto</h2>
                <span>R$ 0,00</span>
                <button class="btn">Comprar</button>
                <button class="btn add-image-btn">+</button>
            `;
            
            productList.appendChild(newProduct);

            // Adiciona evento para o botão de adicionar imagem no novo produto
            const newAddImageButton = newProduct.querySelector('.add-image-btn');
            newAddImageButton.addEventListener('click', () => {
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                fileInput.style.display = 'none';

                fileInput.addEventListener('change', () => {
                    const file = fileInput.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const productImg = newProduct.querySelector('img');
                            productImg.src = reader.result;
                        };
                        reader.readAsDataURL(file);
                    }
                });

                document.body.appendChild(fileInput);
                fileInput.click();
                document.body.removeChild(fileInput);
            });
        });
    });
});
