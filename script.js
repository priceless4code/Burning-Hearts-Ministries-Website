document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather Icons
  feather.replace();
  
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Typewriter effect
  initTypewriter();
  
  // Setup prayer modal
  setupPrayerModal();
  
  // Setup scroll to top
  setupScrollToTop();
  
  // Setup header scroll effect
  setupHeaderScroll();
  
  // Setup smooth scrolling and nav highlighting
  setupNavigation();
});

// Typewriter effect for hero section
function initTypewriter() {
  const text = "All Men, All Nations burning for Jesus.";
  const element = document.getElementById("typewriter-text");
  
  if (!element) return;
  
  let index = 0;
  
  // Create cursor element
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  element.parentNode.insertBefore(cursor, element.nextSibling);
  
  function typewriter() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(typewriter, 50);
    }
  }
  
  typewriter();
}

// Prayer Request Modal functionality
function setupPrayerModal() {
  const openBtn = document.getElementById("openPrayerModal");
  const modal = document.getElementById("prayerModal");
  const closeBtn = document.getElementById("closePrayerModal");
  const prayerForm = document.getElementById("prayerForm");
  
  if (!openBtn || !modal || !closeBtn || !prayerForm) return;

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
    prayerForm.reset(); // Reset form
  });

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
      prayerForm.reset();
    }
  });

  // Handle form submission
  prayerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Basic form validation
    const name = prayerForm.querySelector('input[type="text"]').value;
    const email = prayerForm.querySelector('input[type="email"]').value;
    const prayerRequest = prayerForm.querySelector('textarea').value;

    if (name && email && prayerRequest) {
      // Here you would typically send the form data to a server
      // For demo purposes, we'll just log it and show a success message
      console.log("Prayer Request Submitted:", { name, email, prayerRequest });
      
      alert("Thank you for your prayer request! Our team will pray for you.");
      
      // Close modal and reset form
      modal.style.display = "none";
      document.body.style.overflow = "";
      prayerForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}

// Scroll to top functionality
function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  
  if (!scrollToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Header scroll effect
function setupHeaderScroll() {
  const header = document.querySelector("header");
  
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
}

// Smooth scrolling and nav highlighting
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  
  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      } else {
        // For external links like give.html
        window.location.href = targetId;
      }
    });
  });

  // Highlight active nav link
  const sections = document.querySelectorAll("section");
  
  window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

// Toggle mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");
  
  if (mobileMenu && hamburger) {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
}
