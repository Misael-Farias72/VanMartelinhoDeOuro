





/*let currentSlide = 0
const slides = document.querySelector(".slide");

function showSlide(index){
    slides[currentSlide].classList.remove("active");
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

function changeSlide(direction){
    showSlide(currentSlide + direction);
}

setInterval(() =>{
    changeSlide(1);
}, 10000)

