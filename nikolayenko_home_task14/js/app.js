"use strict";
const wrapperImg = document.querySelector(".slider-image");
const imgs = [
  "https://kaifolog.ru/uploads/posts/2012-11/thumbs/1353898815_041_7.jpg",
  "https://i.pinimg.com/originals/43/86/dc/4386dc6bbdebd4ec95381120dd74a8a0.jpg",
  "https://image2.thematicnews.com/uploads/images/00/00/39/2016/10/03/4a8c5e862b.jpg",
  "https://uznayvse.ru/images/content/2019/10/uzn_15712143590.jpg",
];
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const dots = document.querySelector(".dots");
let currentSlide = 0;

let timerID2 = setInterval(function () {
  if (currentSlide === imgs.length - 1) {
    clearInterval(timerID2);
  }
  if (currentSlide !== imgs.length - 1) {
    ++currentSlide;
  }
  isLastSlide();
  isFirstSlide();
  activeDot();

  slider(currentSlide);
}, 5000);

function addImagesToSlider() {
  imgs.forEach((img, i) => {
    let tagImg = document.createElement("img");
    tagImg.setAttribute("alt", "slide " + i + 1);
    tagImg.setAttribute("src", img);

    wrapperImg.appendChild(tagImg);
  });
}

function slider(index) {
  const allImg = document.querySelectorAll(".slider-image img");
  allImg.forEach((img) => {
    img.style.display = "none";
  });
  allImg[index].style.display = "block";
}

function addDots() {
  let newUl = document.createElement("ul");
  imgs.forEach((img, i) => {
    let dot = document.createElement("li");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    newUl.appendChild(dot);
  });
  dots.appendChild(newUl);
}
function isLastSlide() {
  if (currentSlide === imgs.length - 1) {
    btnNext.setAttribute("disabled", "disabled");
    clearInterval(timerId);
  } else {
    btnNext.removeAttribute("disabled");
  }
}
function isFirstSlide() {
  if (currentSlide === 0) {
    btnPrev.setAttribute("disabled", "disabled");
  } else {
    btnPrev.removeAttribute("disabled");
  }
}
function activeDot() {
  const dotsSlider = document.querySelectorAll(".dots .dot");
  dotsSlider.forEach((dot) => {
    dot.classList.remove("active");
  });
  dotsSlider[currentSlide].classList.add("active");
}
addImagesToSlider();
addDots();
isFirstSlide();
slider(currentSlide);
activeDot();
btnNext.addEventListener("click", function () {
  slider(++currentSlide);
  isLastSlide();
  isFirstSlide();
  activeDot();
  timerID2;
});
btnPrev.addEventListener("click", function () {
  slider(--currentSlide);
  isLastSlide();
  isFirstSlide();
  activeDot();
  timerID2;
});

let timerId = setInterval(function () {
  if (currentSlide === imgs.length - 1) {
    clearInterval(timerId);
    isLastSlide();
    isFirstSlide();
    activeDot();
  }
  isLastSlide();
  isFirstSlide();
  activeDot();
  slider(currentSlide);

  ++currentSlide;
}, 5000);

window.onload = timerId;

dots.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("dot")) {
    let index = +target.dataset.index;
    slider(index);
    currentSlide = index;
    isLastSlide();
    isFirstSlide();
    activeDot();
    timerID2;
  }
});
