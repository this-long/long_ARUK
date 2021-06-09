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