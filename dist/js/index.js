"use strict";

//1. banner操作
// var Swiper = require('swiper');    
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
    //自动播放开关
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  grabCursor: true
});
/* var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal', // 水平切换选项
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay:{
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },//自动播放开关
}) */
// 如果你在swiper初始化后才决定使用clickable，可以这样设置

mySwiper.params.pagination.clickable = true; // //此外还需要重新初始化pagination

mySwiper.pagination.destroy();
mySwiper.pagination.init();
mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active'); //2.吸顶效果

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var offsetTop = document.querySelector('.boxLeft').offsetTop; // console.log(offsetTop);  
  // let offsetTop = document.querySelector('.boxRight').offsetTop;  

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
}); //点击登录

$('.login').on('click', function () {
  var longinStr = "\n    <form action=\"index.html\" method=\"post\" onsubmit=\"return SignIn()\" class=\"login-box\">\n    <!--\u4F7F\u7528table\u6765\u8FBE\u6210\u6587\u672C\u6846\u4E4B\u95F4\u7684\u5BF9\u9F50\u6548\u679C-->\n      <table class=\"login-window\">\n        <tr>\n          <td><label for=\"username\">\u8D26\u53F7:</label></td>\n          <td><input id=\"username\" pattern=\"w+\" type=\"text\"\n                     placeholder=\"\u624B\u673A\u53F7\u6216\u8005\u90AE\u7BB1\"\" tabindex=\"1\" autofocus></td>\n        </tr>\n        <tr>\n          <td><label for=\"password\">\u5BC6\u7801:</label></td>\n          <td><input id=\"password\" pattern=\"w+\" type=\"password\"\n                     placeholder=\"\u5BC6\u7801\" tabindex=\"2\"></td>\n        </tr>\n        <tr>\n          <!--\u767B\u5F55\u6309\u94AE-->\n          <td><input id=\"sign-in-btn\" type=\"submit\" value=\"\u767B\u5F55\"\" tabindex=\"3\"></td>\n          <!--\u6CE8\u518C\u6309\u94AE-->\n          <td><input id=\"sign-up-btn\" type=\"button\" value=\"\u6CE8\u518C\" tabindex=\"4\"></td>\n        </tr>\n      </table>\n    </form>\n    ";
  $('body').html(longinStr);
}); //声明一个全局数组变量模拟数据库

var datalist = ["xiaochen", "123456"]; //当网页加载完成时，获取注册按钮的句柄，为其添加函数实现功能

window.onload = function () {
  document.getElementById('sign-up-btn').addEventListener('click', SignUp);
};
/*
  @return {boolean}
 */
//submit指定的函数功能，返回true则代表登录成功


function SignIn() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username, password);

  for (var i = 0; i < datalist.length; i += 2) {
    //逐个检测数组内的用户名和密码是否的输入值匹配，若发现匹配则返回true
    if (username === datalist[i] && password === datalist[i + 1]) alert('登录成功');
    return true;
  } //若没有发现一致的用户名和密码则返回false并弹出登录失败提示信息


  alert("账户或密码错误!");
  return false;
} //实现注册操作


function SignUp() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value; //从文本框取得id后插入到数组中

  datalist.push(username);
  datalist.push(password); //弹出“注册成功”提示信息

  alert("注册成功!");
}