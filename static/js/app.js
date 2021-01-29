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
    this.style.backgroundColor = "rgb(0, 0, 0)";
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
newGrid();


// CONTROLS //

// BUTTON NEW GRID
const btn_new_grid = document.getElementById('btn-new-grid');
btn_new_grid.addEventListener('click', newGrid);

// BUTTON GRID SIZE
const btn_grid_size = document.getElementById('btn-grid-size');
btn_grid_size.addEventListener('click', updateGridSize);
btn_grid_size.textContent = `Canvas Size: ${grid_size}`;

// To only draw while mousedown and mouseover, try the solution given in:
// https://stackoverflow.com/questions/48593312/javascript-event-when-mouseover-and-mousedown