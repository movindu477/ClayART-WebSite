/* gallery2 function */
  window.addEventListener("scroll", function () {
    const title = document.querySelector(".gallery2-title");
    const para = document.querySelector(".gallery2-description");
    const titlePosition = title.getBoundingClientRect().top;
    const paraPosition = para.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (titlePosition < screenPosition) {
      title.classList.add("visible");
    }
    if (paraPosition < screenPosition) {
      para.classList.add("visible");
    }
  });
