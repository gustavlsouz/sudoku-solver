const possibleOptions = Object.freeze([...Array(10).keys()].slice(1))
const getPosibleNumbers = (sudoku, options) => {
    const { line, column } = options
    const inLine = sudoku[line]
    const inColumn = sudoku.map(lineItem => {
        return lineItem[column]
    })
    const inSquare = []
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
    return currentSudoku
}

module.exports = {
    resolve,
}