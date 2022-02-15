// SLIDER
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider > img');
const prevBtn = document.querySelector('.slider .prev-btn');
const nextBtn = document.querySelector('.slider .next-btn');

let currentImage = 0;

prevBtn.addEventListener('click', () => {
    currentImage == 0 ? currentImage = sliderImages.length - 1 : currentImage--;
    changeCurrentImage();
})
nextBtn.addEventListener('click', () => {
    currentImage == sliderImages.length - 1 ? currentImage = 0 : currentImage++;
    changeCurrentImage();
})

function changeCurrentImage(){
    sliderImages.forEach(image => image.style.transform = `translateX(${-currentImage * 100}%)`);
}



// HAMBURGER MENU
const hamburger = document.querySelector('.mobile-hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});