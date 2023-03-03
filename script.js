
var cellOne = document.querySelector('#cell-1');
var cellTwo = document.querySelector('#cell-2');
var cellThree = document.querySelector('#cell-3');
var cellFour = document.querySelector('#cell-4');
var cellFive = document.querySelector('#cell-5');
var cellSix = document.querySelector('#cell-6');
var cellSeven = document.querySelector('#cell-7');
var cellEight = document.querySelector('#cell-8');
var cellNine = document.querySelector('#cell-9');


// alternative way of initializing the cell references
var cells = [];

const initialiseCells = () => {
    for(let i = 0; i < 9; i++){
        cells[i] = document.querySelector(`#cell-${i+1}`);
    }
}
initialiseCells();
// cell reference example end

/* Function to generate a random number between 1-9 */

function randomNumber () {
    const generateNumber = parseInt(Math.random(10) * 10, 10);
    const roundedNumber = Math.round(generateNumber);
    return roundedNumber;
}

function inputValueCellOne () {
    if (cellOne.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellOne.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellOne.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellOne.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellTwo () {
    if (cellTwo.textContent === 'X') {
        cellTwo.textContent = ''
    } else if (cellTwo.textContent === 'X') {
        cellTwo.textContent = 'O'
    } else if (cellTwo.textContent === 'O') {
        cellTwo.textContent = 'X'
    } else if (cellTwo.textContent === '') {
        cellTwo.textContent = 'O'
    }
}

function inputValueCellThree () {
    if (cellThree.textContent === 'X') {
        cellThree.textContent = ''
    } else if (cellThree.textContent === 'X') {
        cellThree.textContent = 'O'
    } else if (cellThree.textContent === 'O') {
        cellThree.textContent = 'X'
    } else if (cellThree.textContent === '') {
        cellThree.textContent = 'O'
    }
}

function inputValueCellFour () {
    if (cellFour.textContent === 'X') {
        cellFour.textContent = ''
    } else if (cellFour.textContent === 'X') {
        cellFour.textContent = 'O'
    } else if (cellFour.textContent === 'O') {
        cellFour.textContent = 'X'
    } else if (cellFour.textContent === '') {
        cellFour.textContent = 'O'
    }
}

function inputValueCellFive () {
    if (cellFive.textContent === 'X') {
        cellFive.textContent = ''
    } else if (cellFive.textContent === 'X') {
        cellFive.textContent = 'O'
    } else if (cellFive.textContent === 'O') {
        cellFive.textContent = 'X'
    } else if (cellFive.textContent === '') {
        cellFive.textContent = 'O'
    }
}

function inputValueCellSix () {
    if (cellSix.textContent === 'X') {
        cellSix.textContent = ''
    } else if (cellSix.textContent === 'X') {
        cellSix.textContent = 'O'
    } else if (cellSix.textContent === 'O') {
        cellSix.textContent = 'X'
    } else if (cellSix.textContent === '') {
        cellSix.textContent = 'O'
    }
}

function inputValueCellSeven () {
    if (cellSeven.textContent === 'X') {
        cellSeven.textContent = ''
    } else if (cellSeven.textContent === 'X') {
        cellSeven.textContent = 'O'
    } else if (cellSeven.textContent === 'O') {
        cellSeven.textContent = 'X'
    } else if (cellSeven.textContent === '') {
        cellSeven.textContent = 'O'
    }
}

function inputValueCellEight () {
    if (cellEight.textContent === 'X') {
        cellEight.textContent = ''
    } else if (cellEight.textContent === 'X') {
        cellEight.textContent = 'O'
    } else if (cellEight.textContent === 'O') {
        cellEight.textContent = 'X'
    } else if (cellEight.textContent === '') {
        cellEight.textContent = 'O'
    }
}

function inputValueCellNine () {
    if (cellNine.textContent === 'X') {
        cellNine.textContent = ''
    } else if (cellNine.textContent === 'X') {
        cellNine.textContent = 'O'
    } else if (cellNine.textContent === 'O') {
        cellNine.textContent = 'X'
    } else if (cellNine.textContent === '') {
        cellNine.textContent = 'O'
    }
}


cellOne.addEventListener('click', inputValueCellOne)
cellTwo.addEventListener('click', inputValueCellTwo)
cellThree.addEventListener('click', inputValueCellThree)
cellFour.addEventListener('click', inputValueCellFour)
cellFive.addEventListener('click', inputValueCellFive)
cellSix.addEventListener('click', inputValueCellSix)
cellSeven.addEventListener('click', inputValueCellSeven)
cellEight.addEventListener('click', inputValueCellEight)
cellNine.addEventListener('click', inputValueCellNine)

/* Computer Logic
cellOne.addEventListener('click', () => {
    cellOne.textContent = 'X';
    const roundedNumber = randomNumber();
    const randomCell = document.querySelector(`.cell-${roundedNumber}`)
    randomCell.textContent = 'O'
})*/