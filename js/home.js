(function(){
    // 轮播图部分
     var mySwiper = new Swiper ('.swiper-container', {
  autoplay:true,//等同于以下设置
  autoplay: {
    delay: 15000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
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

    //轮播图动画
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
     
  })  
  
// <!-- POPULAR CATEGORIES 部分鼠标移入图片放大旋转-->
var popularLeft=document.querySelector(".homeMain .popularCategories .inner .popularCategories-main .popular-left")
var popularRight=document.querySelectorAll(".homeMain .popularCategories .inner .popularCategories-main .img")

popularLeft.onmouseenter=function(){
 this.querySelector("img").style.width="710px"
  // this.querySelector("img").style.transform='rotate(-0.5deg)'
}
popularLeft.onmouseleave=function(){
 this.querySelector("img").style.width="670px"
  //  this.querySelector("img").style.transform='rotate(0deg)'
}
for(let i=0;i<popularRight.length;i++){
  popularRight[i].onmouseenter=function(){
    this.querySelector("img").style.width="500px"
  }
  popularRight[i].onmouseleave=function(){
     this.querySelector("img").style.width="470px"
  }
}
 var lineLi = document.querySelectorAll(".newArrival-things .newArrival-child .arrival-img .arrival-operate .xiantiaoLi")
for (let i = 0; i < lineLi.length; i++) {
            var li = lineLi[i]
            xiantiao(li);

        }

//鼠标移入移动淡出
var newArrivalChild=document.querySelectorAll(".newArrival .inner .newArrival-main .newArrival-things .newArrival-child")
for(let i=0;i<newArrivalChild.length;i++){
  newArrivalChild[i].onmouseenter=function(){
    this.querySelector(".arrival-operate").style.right='50px';
     this.querySelector(".arrival-operate").style.opacity=1
  }
   newArrivalChild[i].onmouseleave=function(){
    this.querySelector(".arrival-operate").style.right='150px';
       this.querySelector(".arrival-operate").style.opacity=0
  }
}

//使用way插件 bigImg方法对图片进行放大
var imgChild=document.querySelectorAll(".newArrival .inner .newArrival-main .newArrival-things .newArrival-child .arrival-img")
for(let i=0;i<imgChild.length;i++){
  var imgChildren=imgChild[i];
  bigImg(imgChildren,'290px')
}

//对latest-img图片就行放大
var latestImg=document.querySelectorAll(".latest-news .latest-inner .latest-child .latest-img")
for(let i=0;i<latestImg.length;i++){
  var latestImgChild=latestImg[i];
  bigImg(latestImgChild,'320px')
}

// LATEST NEWS 部分a标签特效
var latestLi=document.querySelectorAll(".latest-news .latest-inner .latest-child .latest-look .xiantiaoLi")
for(let i=0;i<latestLi.length;i++){
  var li=latestLi[i];
  xiantiao(li);
}

// INSTAGRAM SHOP部分鼠标移入特效
var instagamImg=document.querySelectorAll(".instagam-shop .instagam-inner .instagam-image .instagam-imgchi ")
for(let i=0;i<instagamImg.length;i++){
  instagamImg[i].onmouseenter=function(){
    this.querySelector("div").style.opacity="0.6";
    this.querySelector("span").style.opacity="1";
  }
   instagamImg[i].onmouseleave=function(){
    this.querySelector("div").style.opacity="0";
    this.querySelector("span").style.opacity="0";
  }
}

// 模态框点击事件
        var inputNum = 1;
        document.querySelector(".look .product-count .quty .jian").onclick = function () {
            inputNum = document.querySelector(".look .product-count .quty input").value;
            if (inputNum > 0) {
                document.querySelector(".look .product-count .quty input").value = inputNum - 1;
            }
        }
        document.querySelector(".look .product-count .quty .jia").onclick = function () {
            inputNum = document.querySelector(".look .product-count .quty input").value;

            document.querySelector(".look .product-count .quty input").value = inputNum * 1 + 1;

        }



})()

// 搜索弹框点击事件
var modBtn=document.querySelectorAll(".newArrival-child .icon-sousuo")
for(let i=0;i<modBtn.length;i++){
  modBtn[i].onclick=function(){
document.querySelector(".look ").setAttribute("class","look active");
console.log(1);
}
}
document.querySelector(".look .close").onclick=function(){
    document.querySelector(".look ").setAttribute("class","look ");
}