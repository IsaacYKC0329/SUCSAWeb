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
    coordinates.innerHTML = "x=" + x + ", y=" + y;


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

    if(x > 415 && x<525 && y>450 && y<590){    //山西
        chengdu.style.visibility = "visible";
    }else {
        chengdu.style.visibility = "hidden";
    }

});
