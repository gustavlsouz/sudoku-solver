const fs = require('fs')
const util = require('util');
const readFile = util.promisify(fs.readFile)
module.exports = async (fullPath) => {
    const content = await readFile(fullPath)
    return content
}