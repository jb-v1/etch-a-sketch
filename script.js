const divContainer = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.classList.add('square-box');
        divContainer.appendChild(box);
    };
};

// "hover effect"
const boxes = document.querySelectorAll('.square-box');
boxes.forEach(nodeItem => {nodeItem.addEventListener("mouseover", changeColor)});

function changeColor() {
        this.style['background-color'] = "grey";
        this.removeEventListener("mouseover", changeColor);
}



