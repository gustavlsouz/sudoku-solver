module.exports = (sudoku = []) => {
    sudoku.forEach((line = []) => {
        console.log("-".repeat(34))
        console.log(line.join(" | "))
    });
}