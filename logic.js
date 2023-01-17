/**
 * Change .grid-item background color only when its hovered over while left-clicked
 * @param {*} event 
 */
function onPressedHover(event) {
  if (event.buttons === 1) {
    event.target.style.backgroundColor = "black";
  }
}

function initializeGridSize(number = 16) {
  const gridContainer = document.getElementById("grid");

  gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  for (let i = 0; i < (number ** 2); i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.setAttribute("data-cy", "grid-item");
    gridItem.addEventListener("mouseenter", onPressedHover);
    gridContainer.appendChild(gridItem);
  }
}

initializeGridSize();