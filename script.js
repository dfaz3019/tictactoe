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
    // every time a new cell has changed check if there is a match.
    checkForMatchingSymbols();
}

const checkForMatchingSymbols = () => {
    let cellSymbols = getAllCellSymbols();
    // These functions return an object which can be evaluated to determine if a row is found.
    // TODO: evaluate the return object and take further action if a matching row / column / diagonal is found
    hasMatchingColumn(cellSymbols);
    hasMatchingRow(cellSymbols);
    hasMatchingDiagonal(cellSymbols);
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

const hasMatchingColumn = (cellSymbols) => {
    let numColumns = 3;
    let result = {
        columnMatched: true, // If it's not a match, the logic below will flip it to false.
        matchedColumnNumber: -1, // negative 1 means no match
        matchedSymbol: ""
    }
    // these loops are brutally hard to read, my bad :P
    var lastSymbolIdentified = "";
    for(let i = 0; i < numColumns; i++){ // i = columnNumber
        for(let j = i; j <= i+6; j+=3){ // increment j by 3 so that we just evaluate the cells in that column e.g. cell 0,3,6 / cell 1, 4, 7 / cell 2, 5, 8
            if(cellSymbols[j] == "") { // stop evaluating the current column if we have a blank cell.
                result.columnMatched = false; 
                break;  
            }
            if(j == i){ // if it's the first iteration of this inner loop
                lastSymbolIdentified = cellSymbols[j];
            } else if (lastSymbolIdentified == cellSymbols[j]){ // logic for 2nd & 3rd iterations
                continue; // if the cell symbol is the same, we've got  match so far, so continue
            } else if(lastSymbolIdentified != cellSymbols[j]){ // logic for 2nd & 3rd iterations
                lastSymbolIdentified = cellSymbols[j];
                result.columnMatched = false; // the symbol has differentiated, set it to false.
                break; // no point evaluating the last cell of set (in the case of iteration 2/3) if the 2nd cell doesn't match the 1st evaluated cell
            }
        }
        // if result.columnMatched is true here, then we've found a match, so set the matchedColumnNumber so we can return the result
        if(result.columnMatched && lastSymbolIdentified !== "") {
            result.matchedColumnNumber = i;
            result.matchedSymbol = lastSymbolIdentified;
            console.log("a column match was found :O:O It's column number: " + (result.matchedColumnNumber+1)
            + " and has matching symbols of: " + lastSymbolIdentified);
            return result;
        }
        // if the above conditional is true, the code won't reach here, meaning the above is not true if the code is here
        result.columnMatched = true; // resetting back to true for the next iteration.
    };
    return result;
}

const hasMatchingRow = (cellSymbols) => {
    let result = {
        rowMatched: true, // If it's not a match, the logic below will flip it to false.
        matchedRowNumber: -1, // negative 1 means no match
        matchedSymbol: ""
    }
    // these loops are brutally hard to read, my bad :P
    let lastSymbolIdentified = "";
    for(let i = 0; i < 7; i+=3){ // i = the cellNumber at the beginning of the row // rows start at cell 0, 3, and then 6 thus the += 3
        for(let j = i; j < i+3; j++){ // the cell nums in rows: 0, 1, 2 / 3, 4, 5 / 6, 7, 8. Thus increment 1 each time for inner loop
            if(cellSymbols[j] == "") { // stop evaluating the current column if we have a blank cell.
                result.rowMatched = false; 
                break;  
            }
            if(j == i){ // if it's the first iteration of this inner loop
                lastSymbolIdentified = cellSymbols[j];
            } else if (lastSymbolIdentified == cellSymbols[j]){ // logic for 2nd & 3rd iterations
                continue; // if the cell symbol is the same, we've got  match so far, so continue
            } else if(lastSymbolIdentified != cellSymbols[j]){ // logic for 2nd & 3rd iterations
                result.rowMatched = false; // the symbol has differentiated, set it to false.
                break; // no point evaluating the last cell of set (in the case of iteration 2/3) if the 2nd cell doesn't match the 1st evaluated cell
            }
        }
        // if result.columnMatched is true here, then we've found a match, so set the matchedColumnNumber so we can return the result
        if(result.rowMatched && lastSymbolIdentified !== "") {
            result.matchedRowNumber = i;
            result.matchedSymbol = lastSymbolIdentified;
            console.log("a row match was found :O:O It's row starts with cell number: " + (result.matchedRowNumber+1)
            + " and has matching symbols of: " + lastSymbolIdentified);
            return result;
        }
        // if the above conditional is true, the code won't reach here, meaning the above is not true if the code is here
        result.rowMatched = true; // resetting back to true for the next iteration.
    };
    return result;
}

const hasMatchingDiagonal = (cellSymbols) => {
    let result = {
        diagonalMatched: true, // If it's not a match, the logic below will flip it to false.
        matchedDiagonalNumber: -1, // negative 1 means no match. if it's 0 then diagonal: top left to bottom right, if it's 2 then diagional top right too bottom left.
        matchedSymbol: ""
    }
    // these loops are brutally hard to read, my bad :P
    let lastSymbolIdentified = "";
    for(let i = 0; i < 3; i+=2){ // i = cell number at top left and then cell number at top right.
        let jIncrementor = i == 0 ? 4 : 2; // first iteration cells 0, 4, 8 evaluated, need to increment +4, 2nd iteration cells 2, 4, 6 evaluated, need to increment +2
        let loopConditonal = jIncrementor == 4 ? 8 : 6;
        for(let j = i; j <= loopConditonal; j+= jIncrementor){ // evaluating cell nums 0, 4, 8, then 2, 4, 6
            if(cellSymbols[j] == "") { // stop evaluating the current column if we have a blank cell.
                result.diagonalMatched = false; 
                break;  
            }
            if(j == i){ // if it's the first iteration of this inner loop
                lastSymbolIdentified = cellSymbols[j];
            } else if (lastSymbolIdentified == cellSymbols[j]){ // logic for 2nd & 3rd iterations
                continue; // if the cell symbol is the same, we've got  match so far, so continue
            } else if(lastSymbolIdentified != cellSymbols[j]){ // logic for 2nd & 3rd iterations
                result.diagonalMatched = false; // the symbol has differentiated, set it to false.
                break; // no point evaluating the last cell of set (in the case of iteration 2/3) if the 2nd cell doesn't match the 1st evaluated cell
            }
        }
        // if result.columnMatched is true here, then we've found a match, so set the matchedColumnNumber so we can return the result
        if(result.diagonalMatched && lastSymbolIdentified !== "") {
            result.matchedDiagonalNumber = i;
            result.matchedSymbol = lastSymbolIdentified;
            console.log("a diagonal match was found :O:O It's row starts with cell number: " + (result.matchedDiagonalNumber+1)
            + " and has matching symbols of: " + lastSymbolIdentified);
            return result;
        }
        // if the above conditional is true, the code won't reach here, meaning the above is not true if the code is here
        result.diagonalMatched = true; // resetting back to true for the next iteration.
    };
    return result;
}


/*This function will convert the hours into 12 hour time and suffix an am/pm*/

const getTime = () => {
    const date = new Date();
    var timeSuffix = ""
    var hours = date.getHours() - 12
    var minutes = ""

    if (hours <= 12) {
        timeSuffix = 'PM'
    } else {
        timeSuffix = 'AM'
    }

    /*This function will check if the minutes of the clock are less than 10, if so it will prefix the minute with a 0 - for tidyness*/

    if(date.getMinutes() < 10) {
        minutes = '0'+date.getMinutes()
    } else {
        minutes = date.getMinutes()
    }

    const currentTime = `${hours}:${minutes} ${timeSuffix}`

    return currentTime;
}


const validateMessageBoxSize = () => {
    
}


const displayMessage = (message) => {
        const messageBox = document.querySelector('.message-box')
        const paragraph = document.createElement('p')
        paragraph.classList.add('message-box-paragraph')
        messageBox.prepend(paragraph)
        messageBox.prepend(message)
        validateMessageBoxSize()
}

const updateMessageBox = () => {
    
    for (let i = 0; i < cells.length; i++) {
        
        cells[i].addEventListener('click', () => {
            var message = (`${getTime()}: ${cells[i].className.includes('xCell') ? 'Cross' : 'Circle'} added to game board`)
            displayMessage(message)
        })
    }
}

updateMessageBox()

document.querySelector('.button').addEventListener('click', resetGame)