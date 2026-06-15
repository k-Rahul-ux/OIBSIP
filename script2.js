// Abhi Portfolio JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome message in console
console.log("Welcome to Abhi's Portfolio");

// Button interaction
const button = document.querySelector('.btn');
if (button) {
    button.addEventListener('click', () => {
        alert("Thanks for visiting Abhi's portfolio!");
    });
}

// Simple typing effect
const title = document.querySelector('.hero h3');
const text = "Frontend Developer & Creative Designer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        title.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 80);
    }
}

if (title) {
    title.textContent = "";
    typeEffect();
}
