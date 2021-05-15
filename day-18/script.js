const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

rightButton.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }

  setActiveSlide();
  setBackgroundToBody();
});

leftButton.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setBackgroundToBody();
});

var activeSlide = 0;
setBackgroundToBody();

function setBackgroundToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
