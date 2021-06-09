(function(){
    // 下划线
    var xianLi=document.querySelectorAll(".blog .newsAll .new-more  .xiantiaoLi")
    for(let i=0;i<xianLi.length;i++){
        // var li=xianLi[i]
        xiantiao(xianLi[i]);
    }
    
    // 图片放大
    var bigimage=document.querySelectorAll(".blog .newsAll .new-thing .new-item ")
    for(let i=0;i<bigimage.length;i++){
        bigImg(bigimage[i],"390px");
    }
})()