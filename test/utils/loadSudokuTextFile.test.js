const path = require('path')
const loadSudokuTextFile = require('./../../src/utils/loadSudokuTextFile')

const test = async () => {
    try {
        const content = await loadSudokuTextFile(path.join(__dirname, '../../cases/opes.txt'))
        console.log(content)
    } catch (error) {
        console.error(error)
    }
}

test()