function showPicture(){
}

let image = document.getElementById("chicken");
let coordinates = document.getElementById("listener");
let space = document.getElementById("space")
let margin = document.getElementById("margin")
let beijing = document.getElementById("beijing")
let shanxi = document.getElementById("shanxi")
image.addEventListener("mousemove", function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    coordinates.innerHTML = "x=" + x + ", y=" + y;
    if(x < 1360&& x>1325 && y>525 && y<555){
        beijing.style.visibility = "visible";
    }else {
        beijing.style.visibility = "hidden";
    }


    if(x > 1239&& x<1300 && y>535 && y<660){
        shanxi.style.visibility = "visible";
    }else {
        shanxi.style.visibility = "hidden";
    }
});