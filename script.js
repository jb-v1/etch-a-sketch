const divContainer = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.classList.add('square-box');
        divContainer.appendChild(box);
    };
};
getBoxes();

// "hover effect"
function getBoxes() {
    const boxes = document.querySelectorAll('.square-box');
    boxes.forEach(nodeItem => {nodeItem.addEventListener("mouseover", changeColor)});
};

function changeColor() {
        this.style['background-color'] = "grey";
        this.removeEventListener("mouseover", changeColor);
};

// change grid size
const slider = document.querySelector(".slider");
const showValue = document.querySelector(".showValue");

slider.addEventListener("input", () => {
    showValue.textContent = `${slider.value}x${slider.value}`;
    removeBoxes(slider.value);
    }
);

function removeBoxes(inputVal) {
    const rmBoxes = document.querySelectorAll('.square-box');
    rmBoxes.forEach(box => divContainer.removeChild(box));
    newGrid(inputVal);
};

function newGrid(newSize) {
    for (let i = 0; i < newSize; i++) {
        for (let j = 0; j < newSize; j++) {
            const box = document.createElement('div');
            box.classList.add('square-box');
            divContainer.appendChild(box);
        };
    };
    divContainer.style['grid-template-columns'] = `repeat(${newSize}, auto)`;
    getBoxes();
};
