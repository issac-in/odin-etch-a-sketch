"use strict"

function checkGridAlreadyExists(parentNode) {
    return parentNode.children.length;
}

function checkInvalidGridDensity(num) {
    const MINIMUM_DENSITY = 16;
    const MAXIMUM_DENSITY = 100;
    let invalidGridDensity = true;
    
    if (num < MINIMUM_DENSITY || num > MAXIMUM_DENSITY) {
        console.error(`Expected a density between 16 & 100, got ${num}.`);
    } else {
        invalidGridDensity = false;
    }
    return invalidGridDensity;
}

function deleteGrid() {
    const pixels = document.querySelectorAll(".pixel");
    for (const pixel of pixels) {
        pixel.remove();
    } 
}

function isCornerSquare(sqrtDensity, squareIndex) {
    const TOP_LEFT_INDEX = 0;
    const TOP_RIGHT_INDEX = sqrtDensity - 1;
    const BOTTOM_LEFT_INDEX = sqrtDensity**2 - sqrtDensity;
    const BOTTOM_RIGHT_INDEX = sqrtDensity**2 - 1;

    let output;
    switch (squareIndex) {
        case TOP_LEFT_INDEX:
            output = "topLeft";
            break;
        case TOP_RIGHT_INDEX:
            output = "topRight";
            break;
        case BOTTOM_LEFT_INDEX:
            output = "bottomLeft";
            break;
        case BOTTOM_RIGHT_INDEX:
            output = "bottomRight";
            break;
        default:
            output = "not a corner square";
            break;
    }
    return output;
}

function setGridDensity(num = 16) {
    if (checkInvalidGridDensity(num)) { return; }

    const sketchPad = document.querySelector(".sketch-pad");
    const sketchPadWidth = sketchPad.clientWidth;
    const pixelValue = +(sketchPadWidth / num).toFixed(2);
    const CORNER_RADIUS = "14px";

    if (checkGridAlreadyExists(sketchPad)) { deleteGrid(); }

    for (let i = 0; i < num**2; i++) {
        let sketchPadPixel = document.createElement("div");
        sketchPadPixel.setAttribute("class", "pixel");
        sketchPadPixel.setAttribute("id", i);
        sketchPadPixel.setAttribute("style",`
            width: ${pixelValue}px;
            height: ${pixelValue}px;
            background-color: white;
            border: 1px solid black;
        `);

        switch (isCornerSquare(num, i)) {
            case "topLeft":
                sketchPadPixel.style.borderRadius = `${CORNER_RADIUS} 0 0 0`;
                break;
            case "topRight":
                sketchPadPixel.style.borderRadius = `0 ${CORNER_RADIUS} 0 0`;
                break;
            case "bottomLeft":
                sketchPadPixel.style.borderRadius = `0 0 0 ${CORNER_RADIUS}`;
                break;
            case "bottomRight":
                sketchPadPixel.style.borderRadius = `0 0 ${CORNER_RADIUS} 0`;
                break;
        }

        sketchPad.appendChild(sketchPadPixel);
    }
}

function setPixelListeners() {
    const sketchPad = document.querySelector(".sketch-pad");

    sketchPad.addEventListener("mouseover", (event) => {
        let target = event.target;

        target.style.backgroundColor = "black";
    });
}

setGridDensity();
setPixelListeners();