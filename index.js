/* hamburger menu function */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });




    

/* section2 function */
  // Show section2 when it enters the viewport
  window.addEventListener("scroll", () => {
    const section2 = document.querySelector(".section2");
    const rect = section2.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section2.classList.add("show");
    }
  });



/* section3 function */
  const images = document.querySelectorAll('.image-gal img');
  let current = 0;

  function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }

  // Initialize the first image
  images[current].classList.add('active');

  // Change image every 3 seconds
  setInterval(showNextImage, 3000);



/* section5 function */
document.addEventListener("DOMContentLoaded", function () {
  const section5 = document.querySelector(".section5");
  const img = section5.querySelector("img");
  const h1 = section5.querySelector("h1");
  const p = section5.querySelector("p");
  const button = section5.querySelector(".gold-button");
  img.classList.add("left-slide");
  h1.classList.add("left-slide");
  p.classList.add("right-slide");
  button.classList.add("fade-in");
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  }
  function onScroll() {
    if (isInViewport(section5)) {
      section5.classList.add("active");
      // Remove listener once activated to improve performance
      window.removeEventListener("scroll", onScroll);
    }
  }
  window.addEventListener("scroll", onScroll);
  // Also check immediately in case section is already visible
  onScroll();
});




/* top button function */
  window.onscroll = function () {
    const toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };

  // Scroll to top on click
  document.getElementById("toTopBtn").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });