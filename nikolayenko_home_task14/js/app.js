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
  isLastSlide();
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
    clearInterval(autoSlider);
    console.log('finish slider');
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
    isLastSlide();
    dot.classList.remove("active");
  });
  isLastSlide();
  dotsSlider[currentSlide].classList.add("active");
}
isLastSlide();
addImagesToSlider();
isLastSlide();
addDots();
isFirstSlide();
slider(currentSlide);
// autoslider();
activeDot();
btnNext.addEventListener("click", function () {
  isLastSlide();
  slider(++currentSlide);
  
  isFirstSlide();
  activeDot();
});
btnPrev.addEventListener("click", function () {
  isLastSlide();
  slider(--currentSlide);
  isLastSlide();
  isFirstSlide();
  activeDot();
});
dots.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("dot")) {
    let index = +target.dataset.index;
    isLastSlide();
    slider(index);
    currentSlide = index;
    isLastSlide();
    isFirstSlide();
    activeDot();
  }
});

function autoSlider(){
 if(currentSlide === imgs.length - 1){ 
  
    isLastSlide();
    clearInterval(autoSlider);
 }
  else{

    isLastSlide();
    addImagesToSlider();
    const autoslide = setInterval(() => {  
slider(++currentSlide);
isFirstSlide();
activeDot();
isLastSlide();
console.log(currentSlide);
  }, 5000);
}
  
  }


document.addEventListener("DOMContentLoaded",()=> autoSlider())


// function autoslider (){
//   setInterval(slider, 5000 );
//   }
  


// const interval = setInterval(()=>{
//   console.log('tic');
// }, 5000);
