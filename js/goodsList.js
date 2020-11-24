$(function(){
    $.ajax({
        url:"data/goods.json",
        type:"get",
        dataType:"json",
        success:function(json){
            var goodsStr=""
            $.each(json,function(index,item){
                // console.log(item)
                goodsStr+=`<div class="goods">
                <img src="${item.imgurl}" alt="">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <div>${item.say}</div> 
            </div>`
            })
            $(".goodsbox").html(goodsStr) //把点击添加的内容放入在goodsbox中

            // var $img=$('.goods img')
            // console.log($img.get(0));
            // 点击图片跳转到指定页面
            $('.goods img').on('click',()=>{
               window.open('detail.html')
            })
        }
    })
   
  
    
})