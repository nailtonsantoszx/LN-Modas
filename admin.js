let adminMode = false;

function toggleAdmin() {
    adminMode = !adminMode;
    const removeButtons = document.querySelectorAll('.remove-image');
    const addButton = document.getElementById('add-image');
    
    removeButtons.forEach(button => {
        button.style.display = adminMode ? 'block' : 'none';
    });
    
    addButton.style.display = adminMode ? 'block' : 'none';
}

function addImage() {
    // Função para adicionar nova imagem ao carrossel
    const carousel = document.getElementById('carousel');
    const newProduct = document.createElement('div');
    newProduct.className = 'product';
    newProduct.innerHTML = `
        <img src="img_placeholder.jpg" alt="Novo Produto">
        <button class="remove-image" onclick="removeImage(this)">Remover Imagem</button>
    `;
    carousel.appendChild(newProduct);
}

function removeImage(button) {
    const product = button.parentElement;
    product.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-image');
    removeButtons.forEach(button => {
        button.style.display = 'none';
    });

    const addButton = document.getElementById('add-image');
    addButton.style.display = 'none';
});
