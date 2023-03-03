var cellOne = document.querySelector('.cell-1')
var cellTwo = document.querySelector('.cell-2')
var cellThree = document.querySelector('.cell-3')
var cellFour = document.querySelector('.cell-4')
var cellFive = document.querySelector('.cell-5')
var cellSix = document.querySelector('.cell-6')
var cellSeven = document.querySelector('.cell-7')
var cellEight = document.querySelector('.cell-8')
var cellNine = document.querySelector('.cell-9')
/* Function to generate a random number between 1-9 */

function randomNumber () {
    const generateNumber = parseInt(Math.random(10) * 10, 10);
    const roundedNumber = Math.round(generateNumber);
    return roundedNumber;
}


cellOne.addEventListener('click', () => {
    cellOne.textContent = 'X';
    const roundedNumber = randomNumber();
    const randomCell = document.querySelector(`'.cell-${roundedNumber}`)
    randomCell.textConten = 'O'
})