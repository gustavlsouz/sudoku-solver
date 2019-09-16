module.exports = (sudoku = []) => {
    console.log("\n\n")
    sudoku.forEach((line = []) => {
        console.log("-".repeat(34))
        console.log(line.join(" | "))
    });
}