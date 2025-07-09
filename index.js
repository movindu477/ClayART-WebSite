/* hamburger menu function */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });


/* section 1 function */
const logo = document.getElementById("logo");

logo.addEventListener("mouseenter", () => {
  logo.style.transform = "scale(1.05)";
});

logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
});
