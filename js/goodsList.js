// 用ajax请求数据
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
                <span code="${item.code}">加入购物车</span> 
            </div>`
            })
            $(".goodsbox").html(goodsStr) //把点击添加的内容放入在goodsbox中

            // var $img=$('.goods img')
            // console.log($img.get(0));
            // 点击图片跳转到详情页面
            $('.goods img').on('click',()=>{
               window.open('detail.html')
            })
            console.log($('.goodsbox span')[0]);
            $('.goodsbox').on('click','goods span',function(){
                console.log(1111);
            })
        }
    })
    // console.log($('.goodsbox .goods')[0]);
   //点击加入购物车
   $('.goodsbox').on('click','.goodsbox span',function(){
    
      //获取当前商品的编号
       var code=$(this).attr('code')
      //判断本地储存是否有数据
      if(localStorage.getItem('goods')){
          //如果有就用变量保存,并且转换成JSON对象 储存在数组中
          var goodsArr=JSON.parse(localStorage.getItem('goods'))
      }else{
          var goodsArr=[]
      }
      var hasGoods = false//?????

      //判断当前选中商品是否在购物车中,遍历goodsArr数组
      if(goodsArr.length>0){
          $.each(goodsArr,function(index,ietm){
            console.log(ietm)
            if(ietm.code===code){// 商品存在购物车中，数量+1
                ietm.num++
                hasGoods = true  //????
                return false    //?????
            }
          })
      }
      if (!hasGoods) {
        // var objStr = JSON.stringify({code:code,num:1})
        goodsArr.push({code:code,num:1})
    }
     // 更新本地存储的数据
     localStorage.setItem('goods',JSON.stringify(goodsArr))

     alert('添加购物车成功')
     console.log(localStorage.getItem("goods"))
   })
  
    
})