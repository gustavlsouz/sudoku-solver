const { readFile } = require('./fs')
const logSudoku = require('./logSudoku')

module.exports = async (fullPath) => {
    const content = (await readFile(fullPath)).toString()
    console.log(content)
    const sudokuObject = content.split("\n").map(line => line.match(/[0-9]/g).map(Number))
    logSudoku(sudokuObject)
    return sudokuObject
}