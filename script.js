// alternative way of initializing the cell references
var cells = [];

const initialiseCells = () => {
    for(let i = 0; i < 9; i++){
        cells[i] = document.querySelector(`#cell-${i+1}`);
    }
}

const addCellEvents = () => {
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener("click", (e) => {
            updateCellImage(e.target);            
        });
    }
}

initialiseCells();
addCellEvents();

const updateCellImage = (cell) => {
    console.log(cell.id);
    if (cell.textContent === 'X') {
        cell.textContent = ''
    } else if (cell.textContent === 'X') {
        cell.textContent = 'O'
    } else if (cell.textContent === 'O') {
        cell.textContent = 'X'
    } else if (cell.textContent === '') {
        cell.textContent = 'O'
    }
}


