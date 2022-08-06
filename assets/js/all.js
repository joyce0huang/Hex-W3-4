"use strict";

// 漢堡條點擊
var burger = document.querySelector('.burger');
var burgerLine = document.querySelectorAll('.burger-line');
var headerNav = document.querySelector('.header-nav');
var headerH1 = document.querySelector('.header-h1');

burger.onclick = function () {
  headerNav.classList.toggle('max-h-0');
  headerNav.classList.toggle('max-h-24');
  headerH1.classList.toggle('left-0');
  headerH1.classList.toggle('left-1/2');
  headerH1.classList.toggle('-translate-x-1/2');
  burgerLine[0].classList.toggle('translate-y-2');
  burgerLine[0].classList.toggle('rotate-45');
  burgerLine[1].classList.toggle('rotate-45');
  burgerLine[2].classList.toggle('-translate-y-2');
  burgerLine[2].classList.toggle('-rotate-45');
};
//# sourceMappingURL=all.js.map
