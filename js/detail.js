function init(){
    //1.获取需要操作元素
    var minBox=document.querySelector('.minbox')
    var minImg=document.querySelector('.minbox img')
    var showImg=document.querySelectorAll(".show img")
    var mask=document.querySelector('.mask')
    var maxBox=document.querySelector('.maxbox')
    var maxImg=document.querySelector('.maxbox img')
    var detailcon=document.querySelector('.detailcon')
    
    // console.log(minBox,mask,maxBox,maxImg,show,minImg);
    //2.给mask添加移动事件
    minBox.onmousemove=function(ev){
        var e=ev||window.event//兼容IE低版本
         //2.1计算maskd定位坐标 ,offset(minBox).left是封装得方法
         var maskLeft=e.clientX-offset(minBox).left-mask.clientWidth/2
         var maskTop=e.clientY-offset(minBox).top-mask.clientHeight/2
        //  console.log(offset(minBox).left);
          //2.2限制mask的移动范围
          if(maskLeft<0){
            maskLeft=0
        }
        if(maskLeft>=(minBox.clientWidth-mask.clientWidth)){
            maskLeft= minBox.clientWidth-mask.clientWidth
        }
        if(maskTop<0){
            maskTop=0
        }
        if(maskTop>=(minBox.clientHeight-mask.clientHeight)){
            maskTop=minBox.clientHeight-mask.clientHeight
        }
        //2.3 让遮罩层跟随鼠标移动
        mask.style.left=maskLeft+"px"
        mask.style.top=maskTop+"px"
        //2.4 获取比例 遮罩层在父盒子之间移动的比例
        var scaleX=maskLeft/(minBox.clientWidth-mask.clientWidth)
        var scaleY=maskTop/(minBox.clientHeight-mask.clientHeight)
        //2.5 大图也跟随移动
        // console.log(scaleX)
        maxImg.style.left = -scaleX*(maxImg.clientWidth-maxBox.clientWidth) + 'px'
        maxImg.style.top = -scaleY*(maxImg.clientHeight-maxBox.clientHeight) + 'px'
    }
        //3. 鼠标移入该元素时显示该元素
        minBox.onmouseenter=function(){
            mask.style.display="block"
            maxBox.style.display="block"
        }
        //4.鼠标移出该元素时隐藏该元素
        minBox.onmouseleave=function(){
            mask.style.display="none"
            maxBox.style.display="none"
        }
        //5.给需要展示的图片添加事件委托
            // console.log(minImg);
        for (let i = 0; i < showImg.length; i++) {
            showImg[i].onmouseover=function(ev){
                var e=ev||window.event
             console.log(e.target);
             console.log(minImg.src);
            if(e.target.Classname=='show1'){
                minImg.setAttribute("src","./img/detail-min")
                 console.log(minImg.src);
            }
            else if(e.target.Classname=='show2'){
                minImg.setAttribute("src","./img/detai2-1")
            }
            else if(e.target.Classname=='show3'){
                minImg.style.src='./img/detail3-1.webp'
            }
            else if(e.target.Classname=='show4'){
                minImg.style.src='./img/detail4-1.webp'
            }
            else if(e.target.Classname=='show4'){
                minImg.style.src='./img/detail5-1.webp'
            }
        }
            
    }
   /*  detailcon.onmouseover=function(ev){
        var e=ev||window.event
        console.log(e.target.className);
        if(e.target.Classname=='show1'){
            minImg.setAttribute("src","./img/detail-min")
             console.log(minImg.src);
        } 
        else if(e.target.Classname=='show2'){
            minImg.setAttribute("src","./img/detai2-1")
        }
        else if(e.target.Classname=='show3'){
            minImg.style.src='./img/detail3-1.webp'
        }
        else if(e.target.Classname=='show4'){
            minImg.style.src='./img/detail4-1.webp'
        }
        else if(e.target.Classname=='show4'){
            minImg.style.src='./img/detail5-1.webp'
        }
    } */
}
init()