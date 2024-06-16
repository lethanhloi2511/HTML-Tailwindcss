// ------------------- Content Slider Text -------------------
const btnArrowLeft = document.getElementById('arrow-left');
const btnArrowRight = document.getElementById('arrow-right');
const contentSlideAll = document.querySelector('.ct-contents-slider-all');
const contentSlideItems = document.querySelectorAll('.ct-content-items-slide');
const checkboxSlide = document.querySelector('.ct-btn-checkbox-slide');
const btnCheckboxSlideItems = document.querySelectorAll(
    '.ct-btn-checkbox-items-slide',
);

let activeSlide = 0;

// Button Checkbox Slide
btnCheckboxSlideItems.forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
        activeSlide = index;
        document
            .querySelector('.ct-btn-checkbox-items-slide.active')
            .classList.remove('active');
        checkbox.classList.add('active');
        contentSlideAll.style.transform =
            'translateX(' + activeSlide * -25 + '%)';
    });
});

// Button Next
btnArrowRight.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide > contentSlideItems.length - 1) {
        activeSlide = 0;
    }
    document
        .querySelector('.ct-btn-checkbox-items-slide.active')
        .classList.remove('active');
    checkboxSlide.children[activeSlide].classList.add('active');
    contentSlideAll.style.transform = 'translateX(' + activeSlide * -25 + '%)';
});

// Button Previous
btnArrowLeft.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = contentSlideItems.length - 1;
    }
    document
        .querySelector('.ct-btn-checkbox-items-slide.active')
        .classList.remove('active');
    checkboxSlide.children[activeSlide].classList.add('active');
    contentSlideAll.style.transform = 'translateX(' + activeSlide * -25 + '%)';
});

// Auto Slide Text
setInterval(() => {
    activeSlide++;
    if (activeSlide > contentSlideItems.length - 1) {
        activeSlide = 0;
    }
    document
        .querySelector('.ct-btn-checkbox-items-slide.active')
        .classList.remove('active');
    checkboxSlide.children[activeSlide].classList.add('active');
    contentSlideAll.style.transform = 'translateX(' + activeSlide * -25 + '%)';
}, 3000);
