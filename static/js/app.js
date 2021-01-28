function newGrid(grid_size) {
    removeGrid()
    createGrid(grid_size)
    createEventListeners()
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

let grid_size = 10;
createGrid(grid_size);
createEventListeners();