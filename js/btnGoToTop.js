const btnGoToTop = document.querySelector('.ct-go-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 995) {
        btnGoToTop.classList.add('active');
    } else {
        btnGoToTop.classList.remove('active');
    }
});

btnGoToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, left: 0 });
});
