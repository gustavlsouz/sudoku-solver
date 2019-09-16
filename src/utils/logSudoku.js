module.exports = (sudoku = [], title = "") => {
    console.log("\n\n", title)
    sudoku.forEach((line = []) => {
        console.log("-".repeat(34))
        console.log(line.join(" | "))
    });
}