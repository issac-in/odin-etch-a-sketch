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

let lastHoveredTool;
function onHoverTool(event) {
  if (event.currentTarget.style.backgroundColor !== "#D69817") {
    event.currentTarget.style.backgroundColor = "#B80D0D";
    lastHoveredTool = event.currentTarget;
    console.log(lastHoveredTool);
  }
}

function onLeaveTool(event) {
  if (lastHoveredTool && lastHoveredTool.style.backgroundColor !== "#D69817"){
    event.currentTarget.style.backgroundColor = "#E61010";
    lastHoveredTool = null;
  }
}

let lastClickedTool;
function onClickTool(event) {
  if (lastClickedTool) { 
    lastClickedTool.style.backgroundColor = "#E61010"; 
    lastClickedTool.style.backgroundImage = "none";
  }
  event.currentTarget.style.backgroundColor = "#D69817";
  event.currentTarget.style.backgroundImage = "linear-gradient(#FDE309, #FFF689, #FDE309)";
  lastClickedTool = event.currentTarget;
  lastHoveredTool = null;
}

function initializeToolChoices() {
  const toolChoices = document.getElementsByClassName("tool-bar-choice");

  for (let choice of toolChoices) {
    choice.addEventListener("mouseenter", onHoverTool);
    choice.addEventListener("mouseleave", onLeaveTool);
    choice.addEventListener("click", onClickTool);
  }
}

initializeGridSize();
initializeToolChoices();

// Next todo - chevrons