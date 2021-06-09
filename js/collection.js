 (function(){//简约下拉菜单部分
     var xia=document.querySelectorAll(".comboBox .comboBox-inner .icon-xiajiantou")
    var shang=document.querySelectorAll(".comboBox .comboBox-inner .icon-shangjiantou")
    var allUl=document.querySelectorAll(".comboBox ul")
    //上下箭头点击事件
    for(let i=0;i<xia.length;i++){
      xia[i].index=i;
      xia[i].onclick=function(){
            this.className="iconfont icon-xiajiantou";
            shang[this.index].className="iconfont icon-shangjiantou active"
            allUl[this.index].className="active"
      }
    }
    for(let i=0;i<xia.length;i++){
      shang[i].index=i;
      shang[i].onclick=function(){
            this.className="iconfont icon-shangjiantou";
            xia[this.index].className="iconfont icon-xiajiantou active"
            allUl[this.index].className=""
      }
    }

    //简约分页器部分
    var nowInd = 0;
var pagerLi = document.querySelectorAll(".pager ul .ye")
for (let i = 0; i < pagerLi.length; i++) {
    pagerLi[i].index = i
    pagerLi[i].onclick = function () {
        for (let i = 0; i < pagerLi.length; i++) {
            pagerLi[i].className = 'ye'
        }
        this.className = 'ye active'
        nowInd = this.index
        console.log(nowInd);
    }
}

document.querySelector(".pager ul .first").onclick = function () {
    if (nowInd > 0) {
        for (let i = 0; i < pagerLi.length; i++) {
            pagerLi[i].className = 'ye'
        }
        nowInd--;
        pagerLi[nowInd].className = 'ye active'
    }
}
document.querySelector(".pager ul .last").onclick = function () {
    if (nowInd < 2) {
        // nowInd数量比li数量少1
        for (let i = 0; i < pagerLi.length; i++) {
            pagerLi[i].className = 'ye'
        }
        nowInd++;
        pagerLi[nowInd].className = 'ye active'
    }
}

// 图片放大缩小部分
var collectionImg=document.querySelectorAll(".collection .arrival-product .arrival-thing .arrival-img")

for(let i=0;i<collectionImg.length;i++){
    var img=collectionImg[i]
    bigImg(img,"290px")
}



var collectionOp=document.querySelectorAll(".collection .arrival-product .arrival-thing ")
// var collectionOpInn=document.querySelectorAll(".collection .arrival-product .arrival-thing .arrival-operate")
for(let i=0;i<collectionOp.length;i++){
    collectionOp[i].onmouseenter=function(){
        this.querySelector(".arrival-operate").style.opacity=1;
    }
     collectionOp[i].onmouseleave=function(){
        this.querySelector(".arrival-operate").style.opacity=0;
    }
}

var addLi=document.querySelectorAll(".collection .arrival-product .arrival-thing .imgOut .arrival-operate .xiantiaoLi")
for(let i=0;i<addLi.length;i++){
    xiantiao(addLi[i]);
}
    })()

// 搜索弹框点击事件
var modCollection=document.querySelectorAll(".collection .arrival-product .arrival-thing .imgOut .arrival-img .arrival-operate .icon-sousuo")
// console.log(modCollection.length);

 for(let i=0;i<modCollection.length;i++){
  modCollection[i].onclick=function(){
document.querySelector(".look ").setAttribute("class","look active");

}
}
document.querySelector(".look .close").onclick=function(){
    document.querySelector(".look ").setAttribute("class","look ");
}