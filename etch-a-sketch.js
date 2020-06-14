let gridSize;
const container = document.getElementById('container');
let cells = document.getElementsByClassName('cell');
let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

const clear_btn = document.querySelector('#clear_btn');
clear_btn.addEventListener('click', clearGrid);

const black_btn = document.querySelector('#black_btn');
black_btn.addEventListener('click', respondMouseOver);

const rainbow_btn = document.querySelector('#rainbow_btn');
rainbow_btn.addEventListener('click', respondMouseOverRainbow);

const newGrid_btn = document.querySelector('#newGrid_btn');
newGrid_btn.addEventListener('click', createNewGrid);

// Creates a default grid sized 16x16
createGrid(16);

// Creates a custom grid size based on user's input 
function createNewGrid() {
    while (cells.length > 0) {
        let i = 0;
        cells[i].remove();
        i++;
    }

    gridSize = prompt('what size grid do you need?');
    createGrid(gridSize);
}

// Creates grid
function createGrid(gridSize) {
    let autoStr = 'auto ';
    let repeatedStr = autoStr.repeat(gridSize);

    for (let i = 0; i < gridSize; i++) {
        container.style.gridTemplateColumns = repeatedStr;
        container.style.gridTemplateRows = repeatedStr;
    }

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
    }
}

// Creates MouseOver event black color
function respondMouseOver() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function () {
            cells[i].style.background = 'black';
        });
    }
}

// Creates MouseOver event rainbow color
function respondMouseOverRainbow() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function () {
            const randomColor = Math.floor(Math.random() * 16777216).toString(16);
            if (randomColor.length < 6) {
                const randomColor = 'black';
                cells[i].style.background = randomColor;
            } else cells[i].style.background = '#' + randomColor;
        });
    }
}

// Clears grid
function clearGrid() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}