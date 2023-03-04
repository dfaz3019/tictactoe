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


// returns an array of the cell symbols (in order): "" = blank, circle = "circleCell", x = "xCell"
const getAllCellSymbols = () => {
    let result = [];
    for (let i = 0; i < cells.length; i++) {
        // substring removes the "cell " portion of the className so we're just left with blank, xCell, or circleCell
        result[i] = cells[i].className.substring(5, cells[i].className.length);
    }
    return result;
}


document.querySelector('.button').addEventListener('click', resetGame)