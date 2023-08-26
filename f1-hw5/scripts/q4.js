function weatherCondition(city) {
  const xHttp = new XMLHttpRequest();
  xHttp.open(
    "GET",
    `http://api.weatherapi.com/v1/current.json?key=73350dd18b7b4433a0c213423232701&q=${city}`
  );
  xHttp.send();
  xHttp.onload = () => {
    weatherCity = JSON.parse(xHttp.response);
    alert(
      `city name : ${weatherCity.location.name} --- condition : ${weatherCity.current.condition.text}`
    );
  };
}

let city = prompt("please enter the name of a city : ");
weatherCondition(city);

