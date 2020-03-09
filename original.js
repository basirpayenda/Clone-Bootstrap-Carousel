const carousel_slide = document.querySelector(".carousel-inner");
const carousel_images = document.querySelectorAll(".carousel-inner img");

const dots = document.querySelector(".dots");
const dot = document.querySelectorAll(".dot");

const prev_btn = document.querySelector("#prevBtn");
const next_btn = document.querySelector("#nextBtn");

// counter
let counter = 0;
let size = carousel_images[0].clientWidth;

carousel_slide.insertAdjacentHTML(
  "afterbegin",
  carousel_images[carousel_images.length - 1].outerHTML
);
carousel_slide.insertAdjacentHTML("beforeend", carousel_images[0].outerHTML);
carousel_slide.style.transform = `translateX(${-size * 1}px)`;

next_btn.addEventListener("click", () => {
  carousel_slide.style.transition = "all 0.3s ease-in-out";
  dot.forEach(e => e.classList.remove("active"));
  counter++;
  carousel_slide.style.transform = `translateX(${-size * (counter + 1)}px)`;
  if (counter >= carousel_images.length) {
    setTimeout(() => {
      counter = 0;
      dot[counter].classList.add("active");
      carousel_slide.style.transition = "none";
      carousel_slide.style.transform = `translateX(${-size}px)`;
    }, 300);
  } else {
    dot[counter].classList.add("active");
  }
});

prev_btn.addEventListener("click", () => {
  carousel_slide.style.transition = "all 0.3s ease-in-out";
  dot.forEach(e => e.classList.remove("active"));
  counter--;
  carousel_slide.style.transform = `translateX(${-size * (counter + 1)}px)`;
  if (counter < 0) {
    setTimeout(() => {
      counter = carousel_images.length - 1;
      dot[counter].classList.add("active");
      carousel_slide.style.transition = "none";
      carousel_slide.style.transform = `translateX(${-size * (counter + 1)}px)`;
    }, 300);
  } else {
    dot[counter].classList.add("active");
  }
});

dot.forEach(function(e, i) {
  e.addEventListener("click", elem => {
    dot.forEach(e => e.classList.remove("active"));
    counter = i;
    dot[counter].classList.add("active");
    carousel_slide.style.transform = `translateX(${-size * (counter + 1)}px)`;
  });
});
