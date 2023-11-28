first = document.createElement("li");
second = document.createElement("li");
third = document.createElement("li");
first.textContent = "First item";
second.textContent = "Second item";
second.setAttribute('class','my-item');
third.textContent = "Third item";

document.querySelector("#target").appendChild(first);
document.querySelector("#target").appendChild(second);
document.querySelector("#target").appendChild(third);