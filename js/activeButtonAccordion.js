const btnActive = document.querySelectorAll('.ct-button-service');

btnActive.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
