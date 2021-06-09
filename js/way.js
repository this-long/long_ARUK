// 鼠标移入下划线插件
//  <li class="xiantiaoLi"><a href="#">thiswwwwwwwwwww <div class="xian"></div></a>
//   var li = document.querySelector(".box ul .xiantiaoLi")
//注：li需要命名为class="xiantiaoLi"，li里的盒子需要命名为class="xian"，结构需要严格遵守以上
//以上为龙宝宝编写的插件1
function xiantiao(li){
var width=li.querySelector("a").offsetWidth+5+'px';
li.style.width=width;
li.querySelector("a").width=width;
li.querySelector("a").onmouseenter=function(){
        var xian=this.querySelector(".xian")
        xian.style.width='100%';
    }
li.querySelector("a").onmouseleave=function(){
        var xian=this.querySelector(".xian")
        xian.style.width='0%';
    }
}

//鼠标移入图片放大插件,移出缩小
//img为包含图片的大盒子
//wid为图片想要放大的宽度
function bigImg(img,wid){
    var oldWid=0;
    img.onmouseenter=function(){
        oldWid=img.querySelector("img").offsetWidth+'px';
        img.querySelector("img").style.width=wid;
    }
img.onmouseleave=function(){
      img.querySelector("img").style.width=oldWid;
}
}

// 单选单checkbox选中样式 
// che为checkboxMain外面嵌套的大盒子
//注意，input的id需要修改。
function check(che){

    che.querySelector(".checkboxMain label").onclick=function(){
            var state=""
        state=che.querySelector(".checkboxMain input").checked
        if(!state){
        this.querySelector(".dian").setAttribute("class","dian")
    }else{
          this.querySelector(".dian").setAttribute("class","dian active")
    }
    }
}

//多选单checkbox选中样式 
// che为checkboxMain外面嵌套的大盒子
//注意，input的id需要修改。
// 将最外层的大盒子传进来
function manyCheck(che){
var allChe= che.querySelectorAll(".che");
for(let i=0;i<allChe.length;i++){
    allChe[i].onclick=function(){
        for(let i=0;i<allChe.length;i++){
            allChe[i].querySelector(".checkboxMain .dian").setAttribute("class","dian active");
        }
        this.querySelector(".checkboxMain .dian").setAttribute("class","dian");
    }
}

}

///* 鼠标移入按钮特效部分 */
//  <div class="trendsBtn">
//         <a href="#">LOAD MORE</a>
//         <div class="trendsBtn-fize">LOAD MORE</div>
//         <div class="trendsBtn-left"></div>
//         <div class="trendsBtn-right"></div>
//     </div>
//使用时需严格遵守以上格式
//补充：经过优化已经可以在一个页面中同时使用多个按钮
(function(){
    var trendsBtn=document.querySelectorAll(".trendsBtn")
     var trendsBtnFize=''
      var trendsBtnLeft=''
       var trendsBtnRight=''
    for(let i=0;i<trendsBtn.length;i++){
      
        trendsBtn[i].onmouseenter=function(){
        trendsBtnFize=trendsBtn[i].querySelector(".trendsBtn-fize")
        trendsBtnLeft=trendsBtn[i].querySelector(".trendsBtn-left")
        trendsBtnRight=trendsBtn[i].querySelector(".trendsBtn-right")
    trendsBtnFize.style["z-index"]="-1";
    trendsBtnLeft.style.left='-90px'
    trendsBtnLeft.style.opacity='0'
        trendsBtnRight.style.right='-90px'
    trendsBtnRight.style.opacity='0'
    }
      trendsBtn[i].onmouseleave=function(){
        trendsBtnFize=trendsBtn[i].querySelector(".trendsBtn-fize")
        trendsBtnLeft=trendsBtn[i].querySelector(".trendsBtn-left")
        trendsBtnRight=trendsBtn[i].querySelector(".trendsBtn-right")
trendsBtnFize.style["z-index"]="3";
    trendsBtnLeft.style.left='0px'
    trendsBtnLeft.style.opacity='1'
        trendsBtnRight.style.right='0px'
    trendsBtnRight.style.opacity='1'
    }
    }
    // var trendsBtnFize=document.querySelector(".trendsBtn-fize")
    // var trendsBtnLeft=document.querySelector(".trendsBtn-left")
    // var trendsBtnRight=document.querySelector(".trendsBtn-right")
    // trendsBtn.onmouseenter=function(){
    // trendsBtnFize.style["z-index"]="-1";
    // trendsBtnLeft.style.left='-90px'
    // trendsBtnLeft.style.opacity='0'
    //     trendsBtnRight.style.right='-90px'
    // trendsBtnRight.style.opacity='0'
    // }
//     trendsBtn.onmouseleave=function(){
// trendsBtnFize.style["z-index"]="3";
//     trendsBtnLeft.style.left='0px'
//     trendsBtnLeft.style.opacity='1'
//         trendsBtnRight.style.right='0px'
//     trendsBtnRight.style.opacity='1'
//     }



})()
