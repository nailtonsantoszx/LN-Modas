document.addEventListener('DOMContentLoaded', () => {
    const addImageButtons = document.querySelectorAll('.add-image-btn');
    
    addImageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newImage = prompt('Insira o URL da nova imagem:');
            if (newImage) {
                const productImg = button.parentElement.querySelector('img');
                productImg.src = newImage;
            }
        });
    });
});
