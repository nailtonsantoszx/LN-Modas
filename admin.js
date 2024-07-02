document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let index = 0;

    const showItem = (index) => {
        const offset = -index * 25;  // Ajustado para mostrar 4 itens no carrossel
        carouselContainer.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : carouselItems.length - 1;
        showItem(index);
    });

    nextButton.addEventListener('click', () => {
        index = (index < carouselItems.length - 1) ? index + 1 : 0;
        showItem(index);
    });

    showItem(index);
});
