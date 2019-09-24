const { readFile } = require('./fs')
const logSudoku = require('./logSudoku')
const sudokuTextToObject = require('./sudokuTextToObject')

module.exports = async (fullPath) => {
    const content = (await readFile(fullPath)).toString()
    console.log(content)
    const sudokuObject = sudokuTextToObject(content)
    logSudoku(sudokuObject, "loaded:")
    return sudokuObject
}