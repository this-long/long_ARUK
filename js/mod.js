(function(){


        // quty +-
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
document.querySelector(".look .btn").onclick=function(){
document.querySelector(".look .modal").setAttribute("class","modal active");
}
document.querySelector(".close").onclick=function(){
    document.querySelector(".look .modal").setAttribute("class","modal ");
}