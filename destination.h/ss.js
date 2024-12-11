// JavaScript for Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle active class on hamburger and nav-links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function moveToNextItem() {
    // Hide the current carousel item
    carouselItems[currentItem].style.display = 'none';
    
    // Move to the next item in the carousel
    currentItem = (currentItem + 1) % carouselItems.length;  // Loop back to the first item after the last
    
    // Show the next item
    carouselItems[currentItem].style.display = 'block';
}

// Start the carousel by displaying the first item
carouselItems.forEach(item => item.style.display = 'none');
carouselItems[0].style.display = 'block';

// Rotate every 5 seconds
setInterval(moveToNextItem, 5000);
