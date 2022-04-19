let gridContainer = document.querySelector(".grid-container");
let clearButton = document.querySelector(".clearButton");
let clearMode = false;
let eraserButton = document.querySelector("#eraser-button");
let eraserMode = false;
let gridSizeSlider = document.querySelector("#gridSizeSlider");
let gridSize = gridSizeSlider.value;
let labelForSlider = document.querySelector(".grid-size-label");
let colorPicker = document.querySelector("#colorpicker");
let labelForColorPicker = document.querySelector(".color-picker-label")
let selectedColor = colorPicker.value;

const setColor = () => {
    selectedColor = colorPicker.value;
    console.log(selectedColor);
}



const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("mouseover", function (event) {
            if (event.buttons === 1 && !eraserMode) {

                this.style.setProperty('background-color', selectedColor);
            } else if (event.buttons === 1) {
                this.style.removeProperty("background-color");
            }
        })
        gridItem.addEventListener("click", function (event) {
            if (!eraserMode) {
                this.style.setProperty('background-color', selectedColor);
            }
            else {
                element.style.removeProperty("background-color");
            }
        })
        gridItem.addEventListener("dragover", function (event) {
            if (!eraserMode) {
                this.style.setProperty('background-color', selectedColor);
            }
            else {
                this.style.removeProperty("background-color");
            }
        })
    }
}

const clearGrid = () => {
    for (let i = 0; i < gridContainer.children.length; i++) {
        gridContainer.children[i].style.removeProperty("background-color");
    }

}

const toggleEraseMode = () => {
    if (!eraserMode) {
        eraserButton.classList.add("active");
        eraserMode = true;
        colorPicker.setAttribute("disabled", true);
        labelForColorPicker.setAttribute("disabled", true);
        labelForColorPicker.classList.add("disabled");
    }
    else {
        eraserMode = false;
        eraserButton.classList.remove("active");
        labelForColorPicker.removeAttribute("disabled");
        labelForColorPicker.classList.remove("disabled");
        colorPicker.removeAttribute("disabled");

    }
}

function updateGridSize() {
    gridSize = this.value;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


    createGrid(gridSize);
    labelForSlider.innerText = `${gridSize} x ${gridSize}`;
}

colorPicker.addEventListener("change", setColor);
clearButton.addEventListener("click", clearGrid);
eraserButton.addEventListener("click", toggleEraseMode);
gridSizeSlider.addEventListener("input", updateGridSize);



createGrid(gridSize);


