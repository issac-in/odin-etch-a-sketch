const gridContainer = document.getElementById("grid");

for (let i = 0; i < (16**2); i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.setAttribute("onmouseout","changeColor(this)");
  gridItem.setAttribute("data-cy", "grid-item");
  gridContainer.appendChild(gridItem);
}

function changeColor(x) {
  x.style.backgroundColor = "yellow";
}