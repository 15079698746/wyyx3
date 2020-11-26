//1. banner操作
// var Swiper = require('swiper');    
var mySwiper = new Swiper('.swiper-container',{
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
      autoplay:{//自动播放开关
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      grabCursor : true,
})
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
  mySwiper.params.pagination.clickable = true ;
  // //此外还需要重新初始化pagination
  mySwiper.pagination.destroy()
  mySwiper.pagination.init()
  mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');  

  
  //2.吸顶效果
  window.addEventListener("scroll",()=>{  
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    
    let offsetTop = document.querySelector('.boxLeft').offsetTop;
    // console.log(offsetTop);  
    // let offsetTop = document.querySelector('.boxRight').offsetTop;  
    if (scrollTop > 630) {  
         document.querySelector('.boxLeft').style.position="fixed";  
         document.querySelector('.boxLeft').style.top="20px";  
         document.querySelector('.boxRight').style.position="fixed";  
         document.querySelector('.boxRight').style.top="20px";  
    } else {  
         document.querySelector('.boxLeft').style.position="absolute";  
         document.querySelector('.boxLeft').style.top="0";  
         document.querySelector('.boxRight').style.position="absolute";  
         document.querySelector('.boxRight').style.top="0";  
    }}) 
    
//点击登录
  $('.login').on('click',function(){
    var longinStr=`
    <form action="index.html" method="post" onsubmit="return SignIn()" class="login-box">
    <!--使用table来达成文本框之间的对齐效果-->
      <table class="login-window">
        <tr>
          <td><label for="username">账号:</label></td>
          <td><input id="username" pattern="\w+" type="text"
                     placeholder="手机号或者邮箱"" tabindex="1" autofocus></td>
        </tr>
        <tr>
          <td><label for="password">密码:</label></td>
          <td><input id="password" pattern="\w+" type="password"
                     placeholder="密码" tabindex="2"></td>
        </tr>
        <tr>
          <!--登录按钮-->
          <td><input id="sign-in-btn" type="submit" value="登录"" tabindex="3"></td>
          <!--注册按钮-->
          <td><input id="sign-up-btn" type="button" value="注册" tabindex="4"></td>
        </tr>
      </table>
    </form>
    `
    $('body').html(longinStr)
  }) 
  //声明一个全局数组变量模拟数据库
var datalist = ["xiaochen", "123456"];

//当网页加载完成时，获取注册按钮的句柄，为其添加函数实现功能
  window.onload=function() {
    document.getElementById('sign-up-btn').addEventListener('click', SignUp);
  };

/*
  @return {boolean}
 */
//submit指定的函数功能，返回true则代表登录成功
function SignIn() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(username,password);
  for (let i = 0; i < datalist.length; i +=2) {
  //逐个检测数组内的用户名和密码是否的输入值匹配，若发现匹配则返回true
    if (username === datalist[i] && password === datalist[i + 1])
    alert('登录成功')
      return true;
  }
  //若没有发现一致的用户名和密码则返回false并弹出登录失败提示信息
  alert("账户或密码错误!");
  return false;
}

//实现注册操作
function SignUp() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  //从文本框取得id后插入到数组中
  datalist.push(username);
  datalist.push(password);
  //弹出“注册成功”提示信息
  alert("注册成功!");
}
   

