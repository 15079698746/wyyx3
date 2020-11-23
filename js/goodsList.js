$(function(){
    $.ajax({
        url:"data/goods.json",
        type:"get",
        dataType:"json",
        success:function(json){
            var goodsStr=""
            $.each(json,function(index,item){
                console.log()
                goodsStr+=`<div class="goods">
                <img src="${item.imgurl}" alt="">
                <p>${item.price}</p>
                <h3>${item.title}</h3>
                <div>${item.say}</div> 
            </div>`
            })

            $(".goodsbox").html(goodsStr) //把点击添加的内容放入在content中
        }
    })
})