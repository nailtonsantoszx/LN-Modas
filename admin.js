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

    // Filtra as categorias com base no botão clicado
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            document.querySelectorAll('.product-category').forEach(category => {
                if (filter === 'all' || category.id === `category-${filter}`) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });

    // Mostra todos os produtos por padrão
    document.querySelector('.filter-btn[data-filter="all"]').click();
});
