
var cellOne = document.querySelector('#cell-1');
var cellTwo = document.querySelector('#cell-2');
var cellThree = document.querySelector('#cell-3');
var cellFour = document.querySelector('#cell-4');
var cellFive = document.querySelector('#cell-5');
var cellSix = document.querySelector('#cell-6');
var cellSeven = document.querySelector('#cell-7');
var cellEight = document.querySelector('#cell-8');
var cellNine = document.querySelector('#cell-9');


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
        cellOne.textContent = ''
    } else if (cellTwo.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellTwo.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellTwo.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellThree () {
    if (cellThree.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellThree.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellThree.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellThree.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellFour () {
    if (cellFour.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellFour.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellFour.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellFour.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellFive () {
    if (cellFive.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellFive.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellFive.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellFive.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellSix () {
    if (cellOne.textContent === 'X') {
        cellSix.textContent = ''
    } else if (cellSix.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellSix.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellSix.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellSeven () {
    if (cellSeven.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellSeven.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellSeven.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellSeven.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellEight () {
    if (cellEight.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellEight.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellEight.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellEight.textContent === '') {
        cellOne.textContent = 'O'
    }
}

function inputValueCellNine () {
    if (cellNine.textContent === 'X') {
        cellOne.textContent = ''
    } else if (cellNine.textContent === 'X') {
        cellOne.textContent = 'O'
    } else if (cellNine.textContent === 'O') {
        cellOne.textContent = 'X'
    } else if (cellNine.textContent === '') {
        cellOne.textContent = 'O'
    }
}


cellOne.addEventListener('click', inputValueCellOne)
cellOne.addEventListener('click', inputValueCellTwo)
cellOne.addEventListener('click', inputValueCellThree)
cellOne.addEventListener('click', inputValueCellFour)
cellOne.addEventListener('click', inputValueCellFive)
cellOne.addEventListener('click', inputValueCellSix)
cellOne.addEventListener('click', inputValueCellSeven)
cellOne.addEventListener('click', inputValueCellEight)
cellOne.addEventListener('click', inputValueCellNine)

/* Computer Logic
cellOne.addEventListener('click', () => {
    cellOne.textContent = 'X';
    const roundedNumber = randomNumber();
    const randomCell = document.querySelector(`.cell-${roundedNumber}`)
    randomCell.textContent = 'O'
})*/