// (function(){
//    var btn= document.querySelectorAll(".shoppingcar .shoppingCar-main .table .btn");
//    var inputnum=1;
//    for(let i=0;i<btn.length;i++){
//        btn[i].querySelector(".jian").onclick=function(){
//            if(btn[i].querySelector("input").value>1){
//                inputnum= btn[i].querySelector("input").value;
//                inputnum--;
//                 btn[i].querySelector("input").value=inputnum;
//            }
//        }

//           btn[i].querySelector(".add").onclick=function(){

//                inputnum= btn[i].querySelector("input").value;
//                inputnum++;
//                 btn[i].querySelector("input").value=inputnum;

//        }
//    }

// })()
var productList = [
    {
        number: 1,
        name: "Leather shoes for men",
        img: "../../img/products/31.png",
        danjia: "42",
        jiage: "$42.00",
    },
    {
        number: 2,
        name: "Leather shoes",
        img: "../../img/products/28.png",
        danjia: "29",
        jiage: "$29.00",
    },
    {
        number: 3,
        name: "Bronze Vase",
        img: "../../img/products/30.png",
        danjia: "189",
        jiage: "$189.00",
    },
    {
        number: 4,
        name: "Kitty Head Set",
        img: "../../img/products/29.png",
        danjia: "35",
        jiage: "$35.00",
    }
]
var sumprice = 0;
for (let i = 0; i < productList.length; i++) {
    sumprice = sumprice + productList[i].danjia * 1
    // console.log(sumprice);
}
document.querySelector(".shoppingCar-main .shopping-sum .sum-right li span").innerText = '$' + sumprice + '.00'
// console.log(1);
var cl1 = function (ele) {
    var sum = ele.parentNode.parentNode.parentNode
    var inputnum = ele.parentNode.querySelector("input").value;
    if (inputnum > 1) {
        inputnum--;
        ele.parentNode.querySelector("input").value = inputnum
    }

    var sunNum = sum.querySelector("#danjia").className * inputnum
    sumprice = sumprice - sum.querySelector("#danjia").className * 1;
    document.querySelector(".shoppingCar-main .shopping-sum .sum-right li span").innerText = '$' + sumprice + '.00'
    sum.querySelector(".sum").innerText = "$" + sunNum + ".00"
}
var cl2 = function (ele) {
    var sum = ele.parentNode.parentNode.parentNode
    var inputnum = ele.parentNode.querySelector("input").value;

    inputnum++;
    ele.parentNode.querySelector("input").value = inputnum

    var sunNum = sum.querySelector("#danjia").className * inputnum
    sumprice = sumprice + sum.querySelector("#danjia").className * 1;
    document.querySelector(".shoppingCar-main .shopping-sum .sum-right li span").innerText = '$' + sumprice + '.00'
    sum.querySelector(".sum").innerText = "$" + sunNum + ".00"
}
var del = function (ele) {
    var inputnum = ele.parentNode.parentNode.querySelector("input").value;

    sumprice = sumprice - ele.parentNode.parentNode.querySelector("#danjia").className * inputnum;
    document.querySelector(".shoppingCar-main .shopping-sum .sum-right li span").innerText = '$' + sumprice + '.00';
    ele.parentNode.parentNode.remove();
}
var nownum = 0;
var inpClick = function (ele) {
    nownum = ele.parentNode.querySelector("input").value;
}
var inp = function (ele) {
    var sum = ele.parentNode.parentNode.parentNode
    var inputnum = ele.parentNode.querySelector("input").value;

    var sunNum = sum.querySelector("#danjia").className * inputnum
    sumprice = sumprice + sum.querySelector("#danjia").className * (inputnum - nownum);

    document.querySelector(".shoppingCar-main .shopping-sum .sum-right li span").innerText = '$' + sumprice + '.00'
    sum.querySelector(".sum").innerText = "$" + sunNum + ".00"
    nownum = inputnum;
}

// Product list
for (let i = 0; i < productList.length; i++) {
    var wareName = productList[i].name;
    // console.log(wareName);
    var wareImg = productList[i].img
    var wareClass = productList[i].danjia
    var wareJiage = productList[i].jiage;
    var ware = '<div class="table-th df"> <div class="first"> <img src=' + wareImg + '> <div><a href="./shop.html">' + wareName + '</a></div> </div>   <div><span class=' + wareClass + ' id="danjia">' + wareJiage + '</span></div>    <div><div class="btn df"><span class="jian" onclick="cl1(this)">-</span><input type="text"value="1" oninput="inp(this)" onclick="inpClick(this)"><span class="add" onclick="cl2(this)">+</span></div></div>    <div><span class="sum">' + wareJiage + '</span><div class="remove" onclick="del(this)">x</div></div> </div>'

    var thing = document.createElement("div")
    thing.innerHTML = ware
    document.querySelector(".shoppingcar .shoppingCar-main .cart-table .table-body").append(thing)
}

