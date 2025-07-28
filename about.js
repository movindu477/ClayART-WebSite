// Single IntersectionObserver to handle both about2 and about3 animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

// Select all elements to animate from both sections
const elementsToAnimate = document.querySelectorAll(
  '.about2-image, .about-text1, .about3-box'
);

// Observe each element
elementsToAnimate.forEach(el => observer.observe(el));