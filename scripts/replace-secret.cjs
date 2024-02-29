const path = require("path");
const fs = require("fs");

const dts = fs.readFileSync(path.join(__dirname, "..", "src", "d.ts"), "utf8");
const newSecret = process.env.SECRET;

const newDts = dts.replace("REPLACE_ME", newSecret);

fs.writeFileSync(path.join(__dirname, "..", "src", "d.ts"), newDts);
