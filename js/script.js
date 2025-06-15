console.log("script loaded");

// Select menu toggle and related elements
const menuToggle = document.querySelector('.menuToggle');
const header = document.querySelector('header');
const section = document.querySelector('section');

// Toggle menu on click
menuToggle.onclick = () => {
    console.log("Toggle clicked!");
    header.classList.toggle('active');
    section.classList.toggle('active');
};

// Image slider functionality
const slides = document.querySelectorAll('.slide');
let counter = 0;

// Position all slides side by side
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Update slide position
const slideImg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

// Optional: Previous/Next button handlers (if buttons exist)
const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImg();
    }
};

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImg();
    }
};

// Auto-slide back-and-forth
let direction = 1; // 1 = forward, -1 = backward
setInterval(() => {
    if (counter >= slides.length - 1) direction = -1;
    else if (counter <= 0) direction = 1;

    counter += direction;
    slideImg();
}, 2000);
