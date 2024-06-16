// ------------------- Auto Content Slider Happy -------------------
const contentHappySlider = document.querySelector('.ct-contents-happy');
const contentItemsHappy = document.querySelectorAll('.ct-happy-section');
let activeSliderHappy = 0;

const handleAutoSlider = setInterval(() => {
    activeSliderHappy++;
    if (activeSliderHappy > contentItemsHappy.length - 1) {
        activeSliderHappy = 0;
    }
    if (window.innerWidth >= 640) {
        clearInterval(handleAutoSlider);
    } else {
        contentHappySlider.style.transform =
            'translateX(' + activeSliderHappy * -50 + '%)';
    }
}, 3000);
