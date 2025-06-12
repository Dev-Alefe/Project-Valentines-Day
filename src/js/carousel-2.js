const slides2 = document.querySelectorAll('.slide2');
const btnPrev2 = document.getElementById('btn-prev2');
const btnNext2 = document.getElementById('btn-next2');

let currentSlide2 = 0;

function hideSlider2() {
    slides2.forEach(item => item.classList.remove('on'));
}

function showSlider2() {
    if (currentSlide2 >= 0 && currentSlide2 < slides2.length) {
        slides2[currentSlide2].classList.add('on');
    }
}

function nextSlider2() {
    hideSlider2();
    currentSlide2++;
    if (currentSlide2 >= slides2.length) {
        currentSlide2 = 0; // Volta para o primeiro slide
    }
    showSlider2();
}

function prevSlider2() {
    hideSlider2();
    currentSlide2--;
    if (currentSlide2 < 0) {
        currentSlide2 = slides2.length - 1; // Vai para o último slide
    }
    showSlider2();
}

// Inicializa o segundo carrossel mostrando a primeira imagem
showSlider2();

// Adiciona event listeners para os botões do segundo carrossel
btnNext2.addEventListener('click', nextSlider2);
btnPrev2.addEventListener('click', prevSlider2);