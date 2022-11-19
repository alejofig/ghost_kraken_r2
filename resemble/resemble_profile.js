const compareImages = require("resemblejs/compareImages")
const fs = require('fs');
const newFolder = '../cypress/screenshots/images/cypress/profile_new/';
const oldFolder = '../cypress/screenshots/images/cypress/profile_old/';
const config = require("./config.json");

const { viewportHeight, viewportWidth, browsers, options } = config;

files = [];
fs.readdir(newFolder, (err, files) => {
    if (!fs.existsSync(`./results/`)){
        fs.mkdirSync(`./results/`, { recursive: true });
    }
    files.forEach(file => {
        executeTest(file);
      
    });
  });

async function executeTest(file){
  const data =  await compareImages(
    fs.readFileSync(`${newFolder}${file}`),
    fs.readFileSync(`${oldFolder}${file}`),
    options
);
console.log(file);
fs.writeFileSync(`./results/compare-${file}`, data.getBuffer());
}
