const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "src", "assets");
const distPath = path.join(__dirname, "dist", "assets");

// Create dist/assets folder if it doesn't exist
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

// Get all files in src/assets folder
const files = fs.readdirSync(srcPath);

// Copy PNG images to dist/assets folder
files.forEach((file) => {
  const srcFile = path.join(srcPath, file);
  const distFile = path.join(distPath, file);
  fs.copyFileSync(srcFile, distFile);
});

console.log("***assets copied successfully!***");
