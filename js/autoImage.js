// ------------------- Content Slider Image -------------------
const imageSliderAll = document.querySelector('.ct-image-slider-all');
const imageSliderItems = document.querySelectorAll('.ct-image-div-items');
const checkBoxImageSlider = document.querySelector(
    '.ct-btn-checkbox-slide-image',
);
const checkboxImageSliderItem = document.querySelectorAll(
    '.ct-btn-checkbox-items-slide-image',
);
let sliderImages = 0;

// Button Checkbox Slider Image
checkboxImageSliderItem.forEach((image, index) => {
    image.addEventListener('click', () => {
        sliderImages = index;
        document
            .querySelector('.ct-btn-checkbox-items-slide-image.active')
            .classList.remove('active');
        image.classList.add('active');
        imageSliderAll.style.transform =
            'translateX(' + sliderImages * -14.285 + '%)';
    });
});

// Auto Slider Image
// setInterval(() => {
//     sliderImages++;
//     if (sliderImages > imageSliderItems.length - 1) {
//         sliderImages = 0;
//     }
//     document
//         .querySelector('.ct-btn-checkbox-items-slide-image.active')
//         .classList.remove('active');
//     checkBoxImageSlider.children[sliderImages].classList.add('active');
//     imageSliderAll.style.transform =
//         'translateX(' + sliderImages * -14.285 + '%)';
// }, 3000);
const handleAutoSliderImage = setInterval(() => {
    sliderImages++;
    if (sliderImages > imageSliderItems.length - 1) {
        sliderImages = 0;
    }
    document
        .querySelector('.ct-btn-checkbox-items-slide-image.active')
        .classList.remove('active');
    checkBoxImageSlider.children[sliderImages].classList.add('active');
    if (window.innerWidth < 1024) {
        imageSliderAll.style.transform =
            'translateX(' + sliderImages * -14.285 + '%)';
    } else {
        clearInterval(handleAutoSliderImage);
    }
}, 3000);
