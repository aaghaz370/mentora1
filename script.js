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



// Toggle Mobile Navbar
function toggleMenu() {
  const nav = document.getElementById("navbar");
  const ham = document.querySelector(".hamburger");

  nav.classList.toggle("show");
  ham.classList.toggle("open");
}
