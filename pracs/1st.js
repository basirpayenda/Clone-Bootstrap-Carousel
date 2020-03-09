let carousel_container = document.querySelector(".carousel");
let carousel_slide = document.querySelector(".carousel-inner");
let slides = document.querySelectorAll(".carousel-inner img");
let dots = document.querySelector(".dots");
let dot = document.querySelectorAll(".dot");

let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

let counter = 0;
let carousel_size = carousel_slide.clientWidth;
carousel_slide.style.transform = `translateX(${-carousel_size}px)`;

let cloneLastSlide = carousel_slide.insertAdjacentHTML(
  "afterbegin",
  slides[slides.length - 1].outerHTML
);

let cloneFirstSlide = carousel_slide.insertAdjacentHTML(
  "beforeend",
  slides[0].outerHTML
);

nextBtn.addEventListener("click", () => {
  carousel_slide.style.transition = "all 0.4s ease-in-out";
  dot.forEach(e => e.classList.remove("active"));
  counter++;
  carousel_slide.style.transform = `translateX(${-carousel_size *
    (counter + 1)}px)`;
  if (counter >= slides.length) {
    setTimeout(() => {
      counter = 0;
      dot[counter].classList.add("active");
      carousel_slide.style.transition = "none";
      carousel_slide.style.transform = `translateX(${-carousel_size}px)`;
    }, 400);
  } else {
    dot[counter].classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  carousel_slide.style.transition = "all 0.4s ease-in-out";
  counter--;
  dot.forEach(e => e.classList.remove("active"));
  carousel_slide.style.transform = `translateX(${-carousel_size *
    (counter + 1)}px)`;
  if (counter < 0) {
    setTimeout(() => {
      counter = slides.length - 1;
      dot[counter].classList.add("active");
      carousel_slide.style.transition = "none";
      carousel_slide.style.transform = `translateX(${-carousel_size *
        (counter + 1)}px)`;
    }, 400);
  } else {
    dot[counter].classList.add("active");
  }
});

dot.forEach((e, i) => {
  e.addEventListener("click", () => {
    counter = i;
    dot.forEach(e => e.classList.remove("active"));
    dot[counter].classList.add("active");
    carousel_slide.style.transform = `translateX(${-carousel_size *
      (counter + 1)}px)`;
  });
});
