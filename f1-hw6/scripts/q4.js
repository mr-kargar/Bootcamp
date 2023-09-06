let container = document.getElementById("container");
let table = document.createElement("table");
table.style.border = `1px solid #000`;
table.style.borderCollapse ='collapse';

for (let i = 1; i <= 5; i++) {
  let tableRow = document.createElement("tr");
  let tr = "";
  for (let j = 1; j <= 5; j++) {
    tr += `<td style='border :1px solid #000 ; padding:5px ; ${i===j ? "background-color:red" : ""}'>${j}:${i}</td>`;
  }
  tableRow.innerHTML = tr;
  table.appendChild(tableRow);
  
}
container.appendChild(table);

