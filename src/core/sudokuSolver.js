const getPosibleNumbers = (sudoku, options) => {
    const { line, column } = options
    const inLine = sudoku[line]
    const inColumn = sudoku.map(line => {
        return line[column]
    })
    const inSquare = []
    const usedNumbers = [].concat(inSquare, inColumn, inLine)
    return [...Array(10).keys()].filter(number => {
        return number !== 0 && !number.includes(usedNumbers)
    })
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
}

module.exports = {
    resolve,
}