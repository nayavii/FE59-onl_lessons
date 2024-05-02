export const slider = () => {
    let currentSlideIndex = 0;

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');

    slides[currentSlideIndex].classList.add('slide_visible');

    nextBtn.addEventListener('click', () => {
        slides[currentSlideIndex].classList.remove('slide_visible');
        
        if (currentSlideIndex === slides.length - 1) {
            currentSlideIndex = 0;
        } else {
            ++currentSlideIndex;
        }

        slides[currentSlideIndex].classList.add('slide_visible');
    })

    prevBtn.addEventListener('click', () => {
        slides[currentSlideIndex].classList.remove('slide_visible');
        
        if (!currentSlideIndex) {
            currentSlideIndex = slides.length - 1;
        } else {
            --currentSlideIndex;
        }

        slides[currentSlideIndex].classList.add('slide_visible');
    })
}