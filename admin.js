document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o evento de clique para os botões de adicionar imagem
    const addImageButtons = document.querySelectorAll('.add-image-btn');

    addImageButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cria um input do tipo file para selecionar uma nova imagem
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.style.display = 'none';
            
            input.addEventListener('change', (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        const productImg = button.parentElement.querySelector('img');
                        productImg.src = reader.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            document.body.appendChild(input);
            input.click();
            document.body.removeChild(input);
        });
    });

    // Adiciona um novo produto
    const addProductButton = document.getElementById('add-product-btn');
    addProductButton.addEventListener('click', () => {
        const name = prompt('Nome do novo produto:');
        const price = prompt('Preço do novo produto (ex.: R$ 99,90):');
        const imgSrc = prompt('URL da imagem do novo produto:');
        const category = prompt('Categoria do novo produto (Camisas, Calças, Shorts, Tênis):');
        
        if (name && price && imgSrc && category) {
            // Formata a categoria para minúsculas e remove espaços
            const formattedCategory = category.toLowerCase().replace(/\s+/g, '-');
            const productList = document.getElementById(`category-${formattedCategory}`);
            if (productList) {
                const newProduct = document.createElement('div');
                newProduct.classList.add('product-item');
                newProduct.innerHTML = `
                    <img src="${imgSrc}" alt="${name}">
                    <h2>${name}</h2>
                    <span>${price}</span>
                    <button class="btn">Comprar</button>
                    <button class="btn add-image-btn">+</button>
                `;
                productList.appendChild(newProduct);

                // Adiciona o evento para o novo botão de adicionar imagem
                const newAddImageBtn = newProduct.querySelector('.add-image-btn');
                newAddImageBtn.addEventListener('click', () => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.style.display = 'none';
                    
                    input.addEventListener('change', (event) => {
                        const file = event.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                                const productImg = newProduct.querySelector('img');
                                productImg.src = reader.result;
                            };
                            reader.readAsDataURL(file);
                        }
                    });
                    
                    document.body.appendChild(input);
                    input.click();
                    document.body.removeChild(input);
                });
            } else {
                alert('Categoria inválida!');
            }
        } else {
            alert('Todos os campos devem ser preenchidos!');
        }
    });

    // Filtros de Categoria
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const filter = event.target.getAttribute('data-filter');
            const productCategories = document.querySelectorAll('.product-category');

            productCategories.forEach(category => {
                if (filter === 'all' || category.id === `category-${filter}`) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
});
