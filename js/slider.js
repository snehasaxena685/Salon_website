let currentSlide = 0;
const slides = document.querySelectorAll('.imgslider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start the slider
showSlide(currentSlide); // Show the first slide
setInterval(nextSlide, 3000); // Change every 3 seconds
