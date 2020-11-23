"use strict";

$(function () {
  $.ajax({
    url: "data/goods.json",
    type: "get",
    dataType: "json",
    success: function success(json) {
      var goodsStr = "";
      $.each(json, function (index, item) {
        console.log();
        goodsStr += "<div class=\"goods\">\n                <img src=\"".concat(item.imgurl, "\" alt=\"\">\n                <p>").concat(item.price, "</p>\n                <h3>").concat(item.title, "</h3>\n                <div>").concat(item.say, "</div> \n            </div>");
      });
      $(".goodsbox").html(goodsStr); //把点击添加的内容放入在content中
    }
  });
});