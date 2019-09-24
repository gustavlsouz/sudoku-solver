const path = require('path')
const assert = require('assert');
const loadSudokuTextFile = require('../../src/utils/loadSudokuTextFile')

describe('loadSudokuTextFile', () => {
    it('load one case', async () => {
        const content = await loadSudokuTextFile(path.join(__dirname, '../../cases/sudoku1.txt'))
        assert.equal(Array.prototype, content.__proto__)
    })
})
