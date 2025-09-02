// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
});

// Simple form submit alert (replace with real backend later)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (You can connect backend later)");
});
