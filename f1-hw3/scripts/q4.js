let road = ["🚗", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
console.log(road);
let id = setInterval(() => {
  let carIndex;
  for (let index = 0; index < road.length; index++) {
    if (road[index] === "🚗") {
      carIndex = index;
      break;
    }
  }
  if (carIndex === road.length - 1) {
    clearInterval(id);
     alert("car is in end of road");
    
  } else {
    road[carIndex] = "*";
    road[carIndex + 1] = "🚗";
    console.log(road);
  }
}, 500);
