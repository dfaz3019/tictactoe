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
    if (cell.textContent === '') {
        cell.classList.add('xCell')
    } else if (cell.classList.contains('xCell')) {
        cell.classList.replace('xCell', 'circleCell')
    } else if (cell.classList.contains('circleCell')) {
        cell.classtList.replace('circleCell', '')
    }
}


