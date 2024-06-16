// ------------------- Content Slider Text Two -------------------
const btnArrowTwoLeft = document.getElementById('arrow-two-left');
const btnArrowTwoRight = document.getElementById('arrow-two-right');
const contentSlideTwoAll = document.querySelector(
    '.ct-contents-slider-two-all',
);
const contentSlideTwoItems = document.querySelectorAll(
    '.ct-content-items-slide-two',
);
const checkboxSlideTwo = document.querySelector('.ct-btn-checkbox-slide-two');
const btnCheckboxSlideTwoItems = document.querySelectorAll(
    '.ct-btn-checkbox-items-slide-two',
);

let activeSlideTwo = 0;

// Button Checkbox Slide
btnCheckboxSlideTwoItems.forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
        activeSlideTwo = index;
        document
            .querySelector('.ct-btn-checkbox-items-slide-two.active')
            .classList.remove('active');
        checkbox.classList.add('active');
        contentSlideTwoAll.style.transform =
            'translateX(' + activeSlideTwo * -25 + '%)';
    });
});

// Button Next
btnArrowTwoRight.addEventListener('click', () => {
    activeSlideTwo++;
    if (activeSlideTwo > contentSlideTwoItems.length - 1) {
        activeSlideTwo = 0;
    }
    document
        .querySelector('.ct-btn-checkbox-items-slide-two.active')
        .classList.remove('active');
    checkboxSlideTwo.children[activeSlideTwo].classList.add('active');
    contentSlideTwoAll.style.transform =
        'translateX(' + activeSlideTwo * -25 + '%)';
});

// Button Previous
btnArrowTwoLeft.addEventListener('click', () => {
    activeSlideTwo--;
    if (activeSlideTwo < 0) {
        activeSlideTwo = contentSlideTwoItems.length - 1;
    }
    document
        .querySelector('.ct-btn-checkbox-items-slide-two.active')
        .classList.remove('active');
    checkboxSlideTwo.children[activeSlideTwo].classList.add('active');
    contentSlideTwoAll.style.transform =
        'translateX(' + activeSlideTwo * -25 + '%)';
});
