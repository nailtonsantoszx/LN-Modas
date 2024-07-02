document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar eventos ao botão de adicionar imagem
    const addImageButtons = document.querySelectorAll('.add-image-btn');
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

    // Adiciona produtos à seção de Produtos
    document.getElementById('add-product-btn-products').addEventListener('click', () => {
        addNewProduct();
    });

    function addNewProduct() {
        const productList = document.getElementById('products-list');

        const newProduct = document.createElement('div');
        newProduct.classList.add('product-item');
        newProduct.innerHTML = `
            <img src="placeholder.jpg" alt="Novo Produto">
            <h2>Nome do Produto</h2>
            <span>R$ 0,00</span>
            <button class="btn">Comprar</button>
            <button class="btn add-image-btn"></button>
        `;

        productList.appendChild(newProduct);

        // Adiciona o evento ao botão de adicionar imagem do novo produto
        newProduct.querySelector('.add-image-btn').addEventListener('click', () => {
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
    }
});
