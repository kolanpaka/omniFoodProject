"use strict";
let menubar = document.getElementById("menubar");
let navUl = document.querySelector("nav ul");
let headerContainer = document.getElementById("headerContainer");


menubar.addEventListener("click", function () {
  let isEvenClick = menubar.classList.toggle("fa-xmark");
  menubar.classList.toggle("fa-bars");
  navUl.classList.toggle("animateSlideToLeft", isEvenClick);
  navUl.classList.toggle("animateSlideToRight", !isEvenClick);
});


function removeSlide(){
  menubar.classList.remove("fa-xmark");
  menubar.classList.add("fa-bars");
  navUl.classList.remove("animateSlideToLeft")
  navUl.classList.add("animateSlideToRight");
}
window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let windowWidth = window.innerWidth;
  let isScrollUp = scrolled >= 730;
  console.log(windowWidth);
  if(windowWidth<=980){
    isScrollUp=true;
    if(scrolled===0){
      isScrollUp=false;
    }
  }
  headerContainer.classList.toggle("sticky", isScrollUp);
});
