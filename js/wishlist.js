(function(){
    var btn=document.querySelectorAll(".wishlist .wishlist-main .table-main .table-th .remove")
    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function(){
            this.parentNode.parentNode.parentNode.remove();
        }
    }
})()