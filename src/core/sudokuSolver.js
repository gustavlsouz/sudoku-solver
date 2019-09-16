const possibleOptions = Object.freeze([...Array(10).keys()].slice(1))
const initSquares = [
    {
        line: 0,
        column: 0,
    },
    {
        line: 3,
        column: 0,
    },
    {
        line: 6,
        column: 0,
    },
]

const getInitIndex = (index) => {
    if (index < 3) {
        return 0
    }
    if (index < 6) {
        return 3
    }
    if (index < 9) {
        return 6
    }
}

const getCurrentSquare = (sudoku, { line, column }) => {
    const slices = {
        line: getInitIndex(line),
        column: getInitIndex(column),
    }
    return sudoku.slice(slices.line, (slices.line + 3)).map(line => {
        return line.slice(slices.column, (slices.column + 3))
    })
}

const getPosibleNumbers = (sudoku, options) => {
    const { line, column } = options
    const inLine = sudoku[line]
    const inColumn = sudoku.map(lineItem => {
        return lineItem[column]
    })
    const inSquare = getCurrentSquare(sudoku, options).reduce((items, line) => items.concat(line), [])
    const usedNumbers = [].concat(inSquare, inColumn, inLine)
    const possibleNumbers = possibleOptions.filter(number => {
        return number !== 0 && !usedNumbers.includes(number)
    })
    return possibleNumbers
}

const getNextLineAndColumnToFill = (sudoku) => {
    const line = sudoku.findIndex(line => line.includes(0))
    const column = sudoku[line].findIndex(number => number === 0)
    return {
        line,
        column,
    }
}

const copy = (sudoku) => {
    return sudoku.map(line => line.concat())
}

const resolve = async ({ sudoku, }) => {
    const currentSudoku = copy(sudoku)
    const { line, column } = getNextLineAndColumnToFill(currentSudoku)
    const possibleNumbers = getPosibleNumbers(currentSudoku, { line, column })
    const possibleNumbersLength = possibleNumbers.length
    for (let index = 0; index < possibleNumbersLength; index++) {
        const number = possibleNumbers[index];
        
    }
    return currentSudoku
}

module.exports = {
    resolve,
}