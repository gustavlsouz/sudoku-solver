const isValidInSudoku = list => Array.isArray(list) && list.length === 9

module.exports = sudoku => {
    if (!isValidInSudoku(sudoku)) {
        throw new Error(`sudoku has ${sudoku.length} lines`)
    }
    sudoku.forEach((line, lineIndex) => {
        if (!isValidInSudoku(line)) {
            throw new Error(`line ${lineIndex} is not valid`)
        }
        line.forEach((item, columnIndex) => {
            const number = !Number.isNaN(Number(item))
            const inRange = item >= 0 && item <= 9
            if (number && inRange) {
                return
            }
            throw new Error(`item ${item} is not allowed... check line ${lineIndex} column ${columnIndex}`)
        })
    });
    return true
}