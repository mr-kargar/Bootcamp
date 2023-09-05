let table = document.getElementById("table");

const xHttp = new XMLHttpRequest();

xHttp.open(
  "GET",
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags"
);
xHttp.send();
xHttp.onload = () => {
  let data = JSON.parse(xHttp.response);
  for (let index = 0; index < data.length; index++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td><img src="${data[index].flags.png}"></td>
        <td>${data[index].capital[0]}</td>
        <td>${data[index].name.official}</td>
        <td>${data[index].name.common}</td>`;
    table.appendChild(tr);
  }
};
