const path = require('path')
const fs = require('./src/utils/fs')
const sudokuSolver = require('./src/core/sudokuSolver')
const loadSudokuTextFile = require('./src/utils/loadSudokuTextFile')
const logSudoku = require('./src/utils/logSudoku')

const main = async () => {
    const cases = await fs.readdir(path.join(__dirname, 'cases'))
    const fileName = process.argv[2]
    const fileNameInCases = cases.includes(fileName)
    if (!fileNameInCases) {
        console.error("File not in cases")
        process.exit()
    }
    const sudoku = await loadSudokuTextFile(path.join(__dirname, 'cases', fileName))
    const timeInit = Date.now()
    const result = await sudokuSolver.resolve({ sudoku })
    const timeEnd = Date.now()
    result.solutions.forEach((solution, index) => {
        logSudoku(solution, "solution " + index)
    })
    console.log(`\n\nTime to resolve: ${timeEnd - timeInit} ms`)
}

main()