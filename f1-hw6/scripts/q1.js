let circle = document.getElementById("circle");



document.onmousemove = (eve) =>{
    // console.log(eve.pageY);
    circle.style.marginTop = `${eve.pageY}px`;
    circle.style.marginLeft = `${eve.pageX}px`;
}