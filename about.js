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




/* about4 function */
const about4Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

const about4Element = document.querySelector('.about4-content');
about4Observer.observe(about4Element);