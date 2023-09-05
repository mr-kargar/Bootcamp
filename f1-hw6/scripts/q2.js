const color = ["white","red", "green", "orange", "blue", "pink"];

let body = document.getElementById("body");
let selectColor = document.getElementById("color");

selectColor.onchange = () => {
  color.forEach((element) => {
    if (element === selectColor.value) body.style.backgroundColor = element;
  });
};
