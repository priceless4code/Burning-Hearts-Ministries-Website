// Show or hide scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll to top smoothly
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Handle Give button clicks (optional: show a toast or redirect to payment)
const giveButtons = document.querySelectorAll(".give-btn");

giveButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Example behavior: show alert (replace with actual payment logic)
    alert("Redirecting to secure giving portal...");
    
    // Example redirect (edit this URL to church giving form)
    // window.location.href = "";
  });
});

// Copy to clipboard
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const textToCopy = button.getAttribute("data-copy");
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        button.textContent = "Copied!";
        setTimeout(() => button.textContent = "Copy", 2000);
      })
      .catch(err => {
        console.error("Copy failed:", err);
        alert("Failed to copy. Please try manually.");
      });
  });
});