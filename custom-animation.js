window.addEventListener("scroll", function () {
  const header = document.querySelector(".menu-container");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  if (window.scrollY > 300) {
    goTopBtn.style.visibility = "visible";
  } else {
    goTopBtn.style.visibility = "hidden";
  }
});

const goTopBtn = document.getElementById("goTopBtn");

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});