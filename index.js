const path = require('path')
const fs = require('fs')
const sudokuSolver = require('./src/core/sudokuSolver')
const loadSudokuTextFile = require('./src/utils/loadSudokuTextFile')

const cases = fs.readdirSync(path.join(__dirname, 'cases'))

const main = async () => {
    const fileName = process.argv[3]
    const fileNameInCases = cases.includes(fileName)
    // if (!fileNameInCases) {
    //     console.error("File not in cases")
    //     process.exit()
    // }
    const sudokuCase = await loadSudokuTextFile()
    sudokuSolver.resolve()
}

main()