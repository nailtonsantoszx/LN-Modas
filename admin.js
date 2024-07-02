document.addEventListener('DOMContentLoaded', () => {
    const adminPanel = document.getElementById('admin-panel');
    const imageUpload = document.getElementById('image-upload');
    const removeImageBtn = document.getElementById('remove-image');
    const saveChangesBtn = document.getElementById('save-changes');
    const closeAdminPanelBtn = document.getElementById('close-admin-panel');
    let imageToRemove = null;

    // Exibir painel de administração
    if (window.location.search.includes('admin=true')) {
        adminPanel.style.display = 'flex';
    }

    // Fechar o painel de administração
    closeAdminPanelBtn.addEventListener('click', () => {
        adminPanel.style.display = 'none';
        window.history.pushState({}, '', window.location.pathname); // Remove query param
    });

    // Adicionar nova imagem
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            removeImageBtn.classList.remove('hidden');
            const reader = new FileReader();
            reader.onload = function (e) {
                addImageToCarousel(e.target.result);
                imageToRemove = file;
            };
            reader.readAsDataURL(file);
        } else {
            removeImageBtn.classList.add('hidden');
        }
    });

    // Remover imagem
    removeImageBtn.addEventListener('click', () => {
        if (imageToRemove) {
            const slides = document.querySelectorAll('.carousel-slide img');
            slides.forEach(slide => {
                if (slide.src === URL.createObjectURL(imageToRemove)) {
                    slide.parentElement.remove();
                }
            });
            imageToRemove = null;
            removeImageBtn.classList.add('hidden');
        }
    });

    // Salvar alterações
    saveChangesBtn.addEventListener('click', () => {
        const slides = document.querySelectorAll('.carousel-slide');
        const products = [];
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            const name = slide.querySelector('h3').innerText;
            const price = slide.querySelector('p').innerText;
            products.push({ image: img.src, name: name, price: price });
        });

        fetch('/produtos.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(response => {
            if (response.ok) {
                alert('Alterações salvas com sucesso!');
            } else {
                alert('Erro ao salvar alterações.');
            }
        })
        .catch(error => console.error('Erro:', error));
    });

    // Adicionar imagem ao carrossel
    function addImageToCarousel(imageSrc) {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        slide.innerHTML = `
            <img src="${imageSrc}" alt="Nova Imagem">
            <div class="product-info">
                <h3>Nome do Produto</h3>
                <p>Preço</p>
            </div>
        `;
        document.querySelector('.carousel-slides').appendChild(slide);
    }
});
