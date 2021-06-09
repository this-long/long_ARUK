(function(){
    var footWidgetA=document.querySelectorAll(".foot-widget ul li a")
    var footWidgetLi=document.querySelectorAll(".allUl li")
    // for(let i=0;i<footWidgetA.length;i++){
    //     var width=footWidgetA[i].offsetWidth;
    //     width=width+'px';   console.log(width);
    // //    this.parent.style.width=width;
     

    // }
    for(let i=0;i<footWidgetLi.length;i++){
      var width=  footWidgetLi[i].querySelector("a").offsetWidth+5+'px';
  
    footWidgetLi[i].style.width=width;
    footWidgetLi[i].querySelector("a").width=width;
    footWidgetLi[i].querySelector("a").onmouseenter=function(){
        var xiantiao=this.querySelector(".xiantiao")
        xiantiao.style.width='100%';
    }
      footWidgetLi[i].querySelector("a").onmouseleave=function(){
        var xiantiao=this.querySelector(".xiantiao")
        xiantiao.style.width='0%';
    }
    }
})()
// var width=document.querySelector(".foot-widget ul li a").offsetWidth;
// console.log(width);