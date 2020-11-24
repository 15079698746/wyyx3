"use strict";

$(function () {
  $.ajax({
    url: "data/goods.json",
    type: "get",
    dataType: "json",
    success: function success(json) {
      var goodsStr = "";
      $.each(json, function (index, item) {
        // console.log(item)
        goodsStr += "<div class=\"goods\">\n                <img src=\"".concat(item.imgurl, "\" alt=\"\">\n                <h3>").concat(item.title, "</h3>\n                <p>").concat(item.price, "</p>\n                <div>").concat(item.say, "</div> \n            </div>");
      });
      $(".goodsbox").html(goodsStr); //把点击添加的内容放入在goodsbox中
      // var $img=$('.goods img')
      // console.log($img.get(0));
      // 点击图片跳转到指定页面

      $('.goods img').on('click', function () {
        window.open('detail.html');
      });
    }
  });
});