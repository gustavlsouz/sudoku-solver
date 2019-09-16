const path = require('path')
const fs = require('fs')
const sudokuSolver = require('./src/core/sudokuSolver')
const loadSudokuTextFile = require('./src/utils/loadSudokuTextFile')
const logSudoku = require('./src/utils/logSudoku')

const main = async () => {
    const cases = fs.readdirSync(path.join(__dirname, 'cases'))
    const fileName = process.argv[2]
    const fileNameInCases = cases.includes(fileName)
    if (!fileNameInCases) {
        console.error("File not in cases")
        process.exit()
    }
    const sudoku = await loadSudokuTextFile(path.join(__dirname, 'cases', fileName))
    const resolvedSudoku = await sudokuSolver.resolve({ sudoku })
    logSudoku(resolvedSudoku)
}

main()