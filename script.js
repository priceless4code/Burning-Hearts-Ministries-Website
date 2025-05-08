
//Typewriting paragraph on hero section
document.addEventListener("DOMContentLoaded", () =>{

const text = "All Men, All Nations burning for Jesus.";
const element = document.getElementById("typewriter-text");
let index = 0;

function typewriter(){
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typewriter, 50);
  } else {
    element.classList.add('blink');
  }
}
typewriter();
});


// Initialize Feather Icons
window.addEventListener('load', () => {
  feather.replace();
});

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// Smooth scroll + active nav
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Set active nav on page load
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  if (sections.length > 0 && navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }
});

//AOS animation
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

// Scroll to Top on Click
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTop");
    
    // Scroll to top action
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Show/hide on scroll
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  });
  

// Scroll to Top on Click
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});