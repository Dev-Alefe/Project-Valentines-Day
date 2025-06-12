const slides = document.querySelectorAll('.slide'); // Apenas .slide agora
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let currentSlide = 0;

function hideSlider() {
    slides.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    // Certifique-se de que currentSlide está dentro dos limites do array 'slides'
    if (currentSlide >= 0 && currentSlide < slides.length) {
        slides[currentSlide].classList.add('on');
    }
}

function nextSlider() {
    hideSlider();
    if (currentSlide === slides.length - 1) { // Usar 'slides.length'
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() {
    hideSlider();
    if (currentSlide === 0) {
        currentSlide = slides.length - 1; // Usar 'slides.length'
    } else {
        currentSlide--;
    }
    showSlider();
}

// Inicializa o carrossel mostrando a primeira imagem
// Isso é importante para que uma imagem apareça quando a página carrega
showSlider();

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);