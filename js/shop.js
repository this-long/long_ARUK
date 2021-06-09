(function(){
// commodity-information
// 商品详情点击查看部分
var informationImg=document.querySelectorAll(".shop .commodity-information .information-img .information-left .little-img img")
var informationBigImg=document.querySelectorAll(".shop .commodity-information .information-img .information-right img")
for(let i=0;i<informationImg.length;i++){
    informationImg[i].index=i;
    informationImg[i].onclick=function(){
        for(let i=0;i<informationBigImg.length;i++){
            informationBigImg[i].className="";
        }
        var index=this.index;
        informationBigImg[index].className="active";
    }
}
// product-size部分点击特效
var productSizeLi=document.querySelectorAll(".shop .commodity-information .information-all .product-size ul li")
for(let i=0;i<productSizeLi.length;i++){
    productSizeLi[i].onclick=function(){
        for(let i=0;i<productSizeLi.length;i++){
            productSizeLi[i].className="";
        }
        this.className="active";
    }
}

//description-area 部分分页器特效
var navLi=document.querySelectorAll(".shop .shop-tab ul li")
var mainOut=document.querySelectorAll(".shop .shop-tab .main-out")
for(let i=0;i<navLi.length;i++){
    navLi[i].index=i;
    navLi[i].onclick=function(){
        for(let i=0;i<navLi.length;i++){
            navLi[i].className=""
        
        }
        for(let i=0;i<mainOut.length;i++){
               mainOut[i].className="main-out"; 
        }
        this.className="active"
        mainOut[this.index].className="main-out active"
    }
}
// quty +-
var inputNum=1;
document.querySelector(".shop .commodity-information .information-all .product-count .quty .jian").onclick=function(){
    inputNum=document.querySelector(".shop .commodity-information .information-all .product-count .quty input").value;
    if(inputNum>0){
        document.querySelector(".shop .commodity-information .information-all .product-count .quty input").value=inputNum-1;
    }
}
document.querySelector(".shop .commodity-information .information-all .product-count .quty .jia").onclick=function(){
    inputNum=document.querySelector(".shop .commodity-information .information-all .product-count .quty input").value;

        document.querySelector(".shop .commodity-information .information-all .product-count .quty input").value=inputNum*1+1;
    
}
})()