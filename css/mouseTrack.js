let image = document.getElementById("chicken");
let coordinates = document.getElementById("listener");
let space = document.getElementById("space")
let margin = document.getElementById("margin")
let beijing = document.getElementById("beijing")
let shanxi = document.getElementById("shanxi")
let chengdu = document.getElementById("chengdu")

image.addEventListener("mousemove", function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    // coordinates.innerHTML = "x=" + x + ", y=" + y;


    if(x < 715 && x>683 && y>300 && y<335){    //北京
        beijing.style.visibility = "visible";
    }else {
        beijing.style.visibility = "hidden";
    }


    if(x > 600 && x<665 && y>310 && y<435){    //山西
        shanxi.style.visibility = "visible";
    }else {
        shanxi.style.visibility = "hidden";
    }

    if(x > 415 && x<525 && y>450 && y<590){    //成都
        chengdu.style.visibility = "visible";
    }else {
        chengdu.style.visibility = "hidden";
    }


    if(x > 770 && x<785 && y>494 && y<510){    //上海
        shanghai.style.visibility = "visible";
    }else {
        shanghai.style.visibility = "hidden";
    }

    if(x > 618 && x<693 && y>623 && y<654){    //广州
        guangzhou.style.visibility = "visible";
    }else {
        guangzhou.style.visibility = "hidden";
    }

    if(x > 655 && x<667 && y>655 && y<665){    //深圳，香港
        shenzhen.style.visibility = "visible";
        xianggang.style.visibility = "visible";
    }else {
        shenzhen.style.visibility = "hidden";
        xianggang.style.visibility = "hidden";
    }

    if(x > 770 && x<785 && y>521 && y<538){    //宁波
        ningbo.style.visibility = "visible";
    }else {
        ningbo.style.visibility = "hidden";
    }

    if(x > 586 && x<684 && y>478 && y<530){    //武汉，湖北
        wuhan.style.visibility = "visible";
        hubei.style.visibility = "visible";
    }else {
        wuhan.style.visibility = "hidden";
        hubei.style.visibility = "hidden";
    }

    if(x > 736 && x<767 && y>515 && y<535){    //杭州
        hangzhou.style.visibility = "visible";
    }else {
        hangzhou.style.visibility = "hidden";
    }

    if(x > 742 && x<841 && y>270 && y<340){    //沈阳
        shenyang.style.visibility = "visible";
    }else {
        shenyang.style.visibility = "hidden";
    }

    if(x > 559 && x<599 && y>368 && y<465){    //西安
        xian.style.visibility = "visible";
    }else {
        xian.style.visibility = "hidden";
    }

    if(x > 692 && x<749 && y>559 && y<635){    //福建
        fujian.style.visibility = "visible";
    }else {
        fujian.style.visibility = "hidden";
    }

});