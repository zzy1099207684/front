'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let index = 0; index < students.length; index++) {
  const element = students[index];
  let op = document.createElement("option")
  op.value = element["id"];
  op.textContent = element["name"];
  document.querySelector("#target").appendChild(op);
  
}