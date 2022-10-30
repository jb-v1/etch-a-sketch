const divContainer = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("square-box");
        divContainer.appendChild(box);
    };
};
getBoxes();

// "Draw"
function getBoxes() {
    const boxes = document.querySelectorAll(".square-box");
    boxes.forEach(nodeItem => {
        nodeItem.addEventListener("mousedown", changeColor);
        nodeItem.addEventListener("mouseover", changeColor);
    });
};

let isDrawing = false;
window.addEventListener('mousedown', () => {isDrawing = true;});
window.addEventListener('mouseup', () => {if (isDrawing) {isDrawing = false;}});

function changeColor(event) {
        // Return when mouse hovers. Only run if mouse click is held down.
        if (event.type == "mouseover" && !isDrawing) {return;};
        this.style['background-color'] = "#45403B";
        this.removeEventListener("mousedown", changeColor);
        this.removeEventListener("mouseover", changeColor);
};

// change grid size
const slider = document.querySelector(".slider");
const showValue = document.querySelector(".showValue");

slider.addEventListener("input", () => {
    showValue.textContent = `${slider.value}x${slider.value}`;
    }
);

slider.addEventListener("mouseup", () => {removeBoxes(slider.value);});

function removeBoxes(inputVal) {
    const rmBoxes = document.querySelectorAll(".square-box");
    rmBoxes.forEach(box => divContainer.removeChild(box));
    newGrid(inputVal);
};

function newGrid(newSize) {
    for (let i = 0; i < newSize; i++) {
        for (let j = 0; j < newSize; j++) {
            const box = document.createElement("div");
            box.classList.add("square-box");
            divContainer.appendChild(box);
        };
    };
    divContainer.style['grid-template-columns'] = `repeat(${newSize}, auto)`;
    divContainer.style['grid-template-rows'] = `repeat(${newSize}, auto)`;
    getBoxes();
};
