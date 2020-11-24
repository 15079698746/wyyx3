"use strict";

//1. banner操作
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // 水平切换选项
  loop: true,
  // 循环模式选项
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination'
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  } //自动播放开关

}); // 如果你在swiper初始化后才决定使用clickable，可以这样设置

mySwiper.params.pagination.clickable = true; // //此外还需要重新初始化pagination

mySwiper.pagination.destroy();
mySwiper.pagination.init();
mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active'); //2.吸顶效果

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var offsetTop = document.querySelector('.boxLeft').offsetTop; // let offsetTop = document.querySelector('.boxRight').offsetTop;  

  if (scrollTop > 630) {
    document.querySelector('.boxLeft').style.position = "fixed";
    document.querySelector('.boxLeft').style.top = "20px";
    document.querySelector('.boxRight').style.position = "fixed";
    document.querySelector('.boxRight').style.top = "20px";
  } else {
    document.querySelector('.boxLeft').style.position = "absolute";
    document.querySelector('.boxLeft').style.top = "0";
    document.querySelector('.boxRight').style.position = "absolute";
    document.querySelector('.boxRight').style.top = "0";
  }
});