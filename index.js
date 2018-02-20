const format = require("prettier").format;
const fs = require("fs");
const path = require("path");

const filepath = path.resolve("./test.json");
const fileContents = fs.readFileSync(filepath, "utf-8");

format(fileContents, {
    filepath: filepath,
    rangeStart: 1, // skip start {
    rangeEnd: fileContents.indexOf("}") // skip end }
});
