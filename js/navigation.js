
(function () {
    var navigation=document.querySelector(".navigation")
   var a= document.querySelectorAll(".navigation .container .main-menu ul li a") 
   var line=document.querySelectorAll(".navigation .container .main-menu ul li a div")
   var placement=document.querySelector(".placement")
   for(let i=0;i<a.length;i++){
       a[i].onmouseenter=function(){
   
     line[i].style.width="100%";
       
       }
   }
   for(let i=0;i<a.length;i++){
       a[i].onmouseleave=function(){
   
     line[i].style.width="0%";
       
       }
   }

   window.onscroll = function () {
  var y= window.scrollY; //获取滚动条距离顶部的距离
  if(y<1){
navigation.style["background-color"]="rgb(245, 245, 245)";
  }else{
      navigation.style["background-color"]="#ebe7e7";
  }
  
//   置顶按钮出现消失控制
 if(y>700){
placement.setAttribute("class","active placement");
}
 else{
    placement.setAttribute("class","placement");
};
   }

// 返回顶部事件
placement.onclick=function(){
document.querySelector("html").scrollTop=0;
}
//   var loop = "一顿该操作";
//   window.xxx = loop;
})();


