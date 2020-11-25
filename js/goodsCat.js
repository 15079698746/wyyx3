$(function(){
    // alert(username);var username="leson";
      //判断本地存储是否有数据
      if(localStorage.getItem("goods")){//有数据
          var goodsArr=JSON.parse(localStorage.getItem("goods"))
              console.log(goodsArr)
              // 获取数据
      $.ajax({
          url: './data/goods.json',
          type: 'get',
          dataType: 'json',
          success: function (json){    
            var domStr = ''
            $.each(goodsArr,function (index,item){
              $.each(json,function (ind,obj){
                if ( item.code === obj.code ) {
                  // console.log(obj)
                  /* domStr += `
                  <li>
                    <img src="${obj.imgurl}" alt="">
                    <h3>${obj.title}</h3>
                    <p>${obj.price}</p>
                    <span>${item.num}</span>
                    <em code="${obj.code}">删除</em>
                  </li>
                  ` */
                domStr += `
                    <li>
                        <div>
                        <input type="checkbox" checked>
                        </div>
                        <img src="${obj.imgurl}" alt="">
                        <div class="box">
                            <h3>${obj.title}</h3>
                            <p>${obj.price}</p>
                            <span>${item.num}</span>
                            <i>￥188</i>
                            <em code="${obj.code}">删除</em>
                        </div>
                    </li>
                    `
                }
              })
            })
            $('.catC').html(domStr)
          }
        })
    
        // 商品移出购物车
        $('.catC').on('click','li em',function (){
          // 删除该商品对应的li
          $(this).parent().parent().remove()
    
          // 更新本地存储中的数据
          var code = $(this).attr('code') // 要删除商品的编号
          // 删除数组元素：pop()  unshift()  splice(index,1)
          $.each(goodsArr,function (index,item){
            if (item.code === code) {
              goodsArr.splice(index,1)
              return false
            }
          })
    
          // 判断购物车是否还有数据
          if (goodsArr.length > 0) {
            // 更新本地数据
            localStorage.setItem('goods',JSON.stringify(goodsArr))
          } else {
            // 清除本地数据
            localStorage.removeItem('goods')
            var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>'
            $('.list').html(nodata)
          }
    
          alert('商品移出购物车成功！')
    
        })
        
      }
      else {// 没数据
          var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>'
          $('.list').html(nodata)
        }
  })