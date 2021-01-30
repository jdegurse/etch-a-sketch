function newGrid() {
    removeGrid();
    createGrid(grid_size);
    createEventListeners();
}

function createGrid(grid_size) {
    for (let i = 0; i < grid_size; i++) {
        var new_column = document.createElement('div');
        new_column.classList.add('column');
        new_column.setAttribute('id', `column${i}`)
        for (let j = 0; j < grid_size; j++) {
            var new_cell = document.createElement('div');
            new_cell.classList.add('cell');
            new_cell.setAttribute('id', `${i},${j}`);
            new_column.appendChild(new_cell);
        }
        document.getElementById('appContainer').appendChild(new_column);
    }
}

function removeGrid() {
    const grid = document.getElementById('appContainer');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function createEventListeners() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
}

function changeColor() {
    this.style.backgroundColor = selectColor(this.style.backgroundColor);
}

function selectColor(bg_color) {
    if (grid_color === "rainbow") {
        return rainbowColor();
    }
    else if (grid_color === "greyscale") {
        return greyscaleColor(bg_color);
    }
    else {
        return grid_color;
    }
}

function rainbowColor() {
    function random_rgb() { return Math.floor(Math.random() * 256) }
    return `rgb(${random_rgb()}, ${random_rgb()}, ${random_rgb()})`
}

function greyscaleColor(bg_color) {
    if (bg_color.match(/rgba/)) {
        let alpha = Number(bg_color.slice(-4, -1));
        if (alpha < 1) {
            return `rgba(0, 0, 0, ${alpha + 0.1})`
        }
        else {
            return `rgba(0, 0, 0, 1)`
        }
    }
    else if (bg_color === 'rgb(0, 0, 0)' || bg_color === 'black') {
        return 'rgba(0, 0, 0, 1)'
    }
    else {
        return 'rgba(0, 0, 0, 0.1)'
    }
}

function updateGridSize() {
    let still_going = true;
    while (still_going) {
        input = prompt("Enter a canvas size between 1 and 100:");
        if (input >= 1 && input <= 500) {
            grid_size = input;
            btn_grid_size.textContent = `Canvas Size: ${grid_size}`;
            newGrid();
            still_going = false;
        }
        if (input === '' || input === null) {
            still_going = false;
        }
    }
}

// ON LOAD //
let grid_size = 40;
let grid_color = "black"
newGrid();

// BUTTON NEW GRID //
const btn_new_grid = document.getElementById('btn-new-grid');
btn_new_grid.addEventListener('click', newGrid);

// BUTTON GRID SIZE //
const btn_grid_size = document.getElementById('btn-grid-size');
btn_grid_size.addEventListener('click', updateGridSize);
btn_grid_size.textContent = `Canvas Size: ${grid_size}`;

// COLOR WHITE //
const btn_color_white = document.getElementById('btn-color-white');
btn_color_white.addEventListener('click', function () { grid_color = "" })

// COLOR BLACK //
const btn_color_black = document.getElementById('btn-color-black');
btn_color_black.addEventListener('click', function () { grid_color = "black" })

// COLOR RED //
const btn_color_red = document.getElementById('btn-color-red');
btn_color_red.addEventListener('click', function () { grid_color = "red" })

// COLOR GREEN //
const btn_color_green = document.getElementById('btn-color-green');
btn_color_green.addEventListener('click', function () { grid_color = "green" })

// COLOR BLUE //
const btn_color_blue = document.getElementById('btn-color-blue');
btn_color_blue.addEventListener('click', function () { grid_color = "blue" })

// COLOR RAINBOW //
const btn_color_rainbow = document.getElementById('btn-color-rainbow');
btn_color_rainbow.addEventListener('click', function () { grid_color = "rainbow" })

// COLOR RAINBOW //
const btn_color_greyscale = document.getElementById('btn-color-greyscale');
btn_color_greyscale.addEventListener('click', function () { grid_color = "greyscale" })
