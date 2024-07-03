document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a classe 'admin' ao body se for um administrador
    if (document.body.classList.contains('admin')) {
        document.querySelectorAll('.admin-only').forEach(el => {
            el.style.display = 'block';
        });
    }
});
