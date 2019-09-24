const path = require('path')
const assert = require('assert');
const validateSudoku = require('../../src/utils/validateSudoku')
const loadSudokuTextFile = require('../../src/utils/loadSudokuTextFile')

describe('validateSudoku', async () => {
    it('throw error because one invalid case length in last line', async () => {
        try {
            const sudoku = await loadSudokuTextFile(path.join(__dirname, '../../cases/invalidSudokuLastLine.txt'))
            validateSudoku(sudoku)
        } catch (error) {
            console.log(error)
            assert.equal('line 8 is not valid', error.message)
        }
    })
})
