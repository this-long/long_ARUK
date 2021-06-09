(function(){
    // 放大镜引用
    var bigimg=document.querySelector(".details .details-main .details-container .container-left")
    bigImg(bigimg,"850px");

    var relatedImg=document.querySelectorAll(".details .details-main .details-container .details-left .related-post .related-child")
    for(let i=0;i<relatedImg.length;i++){
      var reImg=relatedImg[i]
      bigImg(reImg,"110%");
    }

// instagram 部分Img放大
var instagram=document.querySelectorAll(".details-main .details-container .container-right .instagram .instagram-img  .little-img")
for(let i=0;i<instagram.length;i++){
  var littleImg=instagram[i]
  bigImg(littleImg,"110%")
}

    // 轮播图代码
     var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    
  }) 
      // readmore
    var li=document.querySelectorAll(".details-main .details-container .details-left .related-post .all-related .related-child .xiantiaoLi");
    for(let i=0;i<li.length;i++){
        var readLi=li[i]
        xiantiao(readLi);
    }   
})()