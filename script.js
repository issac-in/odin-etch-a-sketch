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

function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");
    for (const pixel of pixels) {
        pixel.style.backgroundColor = "white";
    }
}

function deleteGrid() {
    const pixels = document.querySelectorAll(".pixel");
    for (const pixel of pixels) {
        pixel.remove();
    } 
}

function getCurrentBrightness(target) {
    let filterString = target.style.filter; // e.g. brightness(###)
    let brightnessValue = +(filterString.slice(11).replace(")","")); // e.g. ###
    return brightnessValue;
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

function mouseEffectDefault(event) {
    let target = event.target;
    target.style.backgroundColor = "black"

    currentMouseEffectFn = mouseEffectDefault;
}

function mouseEffectRGB(event) {
    const MAX_HEXADECIMAL_COLOR = 16777215; // #FFFFFF
    let target = event.target;
    target.style.backgroundColor = `#${
        Math.floor(Math.random()*MAX_HEXADECIMAL_COLOR).toString(16)
    }`;

    currentMouseEffectFn = mouseEffectRGB;
}

function mouseEffectShade(event) {
    let target = event.target;

    let currentBrightness = getCurrentBrightness(target);  
    if (currentBrightness >= 0) {
        target.style.filter = `brightness(${currentBrightness - 0.1})`;
    }

    currentMouseEffectFn = mouseEffectShade;
}

function removePixelListeners(callbackFn) {
    const sketchPad = document.querySelector(".sketch-pad");

    sketchPad.removeEventListener("mouseover", callbackFn);
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
            filter: brightness(1);
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

function setPixelListeners(callbackFn) {
    const sketchPad = document.querySelector(".sketch-pad");
    
    sketchPad.addEventListener("mouseover", callbackFn);
}

function setSettingsListeners() {
    let containerSettings = document.querySelector(".container-settings");

    containerSettings.addEventListener("click", (event) => {
        let target = event.target;

        switch (target.id) {
            case "clear":
                clearGrid();
                break;
            case "adjust":
                let userInput = prompt(
                    "Set the number of squares per side (between 16 & 100):", 16
                );
                setGridDensity(userInput);
                break;
            case "reset-density":
                setGridDensity();
                break;
            case "rgb":
                removePixelListeners(currentMouseEffectFn);
                setPixelListeners(mouseEffectRGB);
                break;
            case "shade":
                removePixelListeners(currentMouseEffectFn);
                setPixelListeners(mouseEffectShade);
                break;
            case "reset-effect":
                removePixelListeners(currentMouseEffectFn);
                setPixelListeners(mouseEffectDefault);
                break;
        }
    });
}

let currentMouseEffectFn;
setSettingsListeners();
setGridDensity();
setPixelListeners(mouseEffectDefault);