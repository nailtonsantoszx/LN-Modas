// admin.js

let currentProduct = null;

function toggleAdmin() {
    const adminPanel = document.getElementById('admin-panel');
    adminPanel.classList.toggle('hidden');
    const adminButton = document.getElementById('admin-button');
    adminButton.textContent = adminPanel.classList.contains('hidden') ? 'Administração' : 'Fechar Admin';
}

function addImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const carousel = document.getElementById('carousel');
            const newProduct = document.createElement('div');
            newProduct.className = 'product';
            newProduct.innerHTML = `
                <img src="${e.target.result}" alt="Produto">
                <button class="remove-image hidden" onclick="removeImage(this)">Remover Imagem</button>
            `;
            carousel.appendChild(newProduct);
            event.target.value = '';  // Clear the input
            updateRemoveButtonVisibility();
        }
        reader.readAsDataURL(file);
    }
}

function removeImage(button) {
    const product = button.parentElement;
    product.remove();
    updateRemoveButtonVisibility();
}

function updateRemoveButtonVisibility() {
    const removeButtons = document.querySelectorAll('.remove-image');
    removeButtons.forEach(button => {
        button.classList.toggle('hidden', !button.parentElement.querySelector('img'));
    });
}
