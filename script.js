// script.js

// Create scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollBtn);

// Show/hide scroll button based on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Smooth scroll to top
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}