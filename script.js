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
    hasMatchingColumn(getAllCellSymbols());
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
    let lastSymbolIdentified = "";
    for(let i = 0; i < numColumns; i++){ // i = columnNumber
        for(let j = i; j <= i+6; j+=3){ // increment j by 3 so that we just evaluate the cells in that column e.g. cell 0,3,6 / cell 1, 4, 7 / cell 2, 5, 8
            if(j == i){ // if it's the first iteration of this inner loop
                lastSymbolIdentified = cellSymbols[j];
            } else if (lastSymbolIdentified == cellSymbols[j]){ // logic for 2nd & 3rd iterations
                continue; // if the cell symbol is the same, we've got  match so far, so continue
            } else if(lastSymbolIdentified != cellSymbols[j]){ // logic for 2nd & 3rd iterations
                result.columnMatched = false; // the symbol has differentiated, set it to false.
                break; // no point evaluating the last cell of set (in the case of iteration 2/3) if the 2nd cell doesn't match the 1st evaluated cell
            }
            if(lastSymbolIdentified == "") { // stop evaluating the current column if we have a blank cell.
                result.columnMatched = false; 
                break;  
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

}

const hasMatchingDiagonal = (cellSymbols) => {

}


document.querySelector('.button').addEventListener('click', resetGame)