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

const resetGame = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('xCell', 'circleCell')
    }
}

initialiseCells();
addCellEvents();

const updateCellImage = (cell) => {
    if (!cell.className.includes("xCell") && !cell.className.includes("circleCell")) {
        cell.classList.add('xCell')
    } else if (cell.className.includes('xCell')) {
        cell.classList.replace('xCell', 'circleCell')
    } else if (cell.className.includes('circleCell')) {
        cell.classList.remove('circleCell');
    }
}


document.querySelector('.button').addEventListener('click', resetGame)