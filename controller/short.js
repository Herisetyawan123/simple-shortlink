const shortid = require('shortid');
const fs = require('fs');
const { json } = require('body-parser');
// const validator = require('validator');


// const path
const dirPath = "./data";
const fileData = "url.json";

// membuat folder
if(!fs.existsSync(dirPath)){
    fs.mkdirSync("data")
}
// membuat file
if(!fs.existsSync(dirPath+"/"+fileData)){
    fs.writeFileSync(dirPath+"/"+fileData, '[]', 'utf-8');
}

const loadUrl = () => {
    const file = fs.readFileSync(dirPath+"/"+fileData, 'utf-8');
    const url = JSON.parse(file);
    return url;
}

const findKey = (key) => {
    const urls = loadUrl();
    url = urls.find((value) => value.key == key);
    return url
}

const addUrl = (urlLong, generate) => {
    const urls = loadUrl();
    const data = {
        key: generate.key,
        urlLong,
        urlShort: generate.urlShort,
        date: new Date()
    }
    urls.push(data);
    fs.writeFileSync(dirPath+"/"+fileData, JSON.stringify(urls));
}
// console.log(shortid.generate());
const generate = () => { 
    const key = shortid.generate();
    return {
        key,
        urlShort: "http://127.0.0.1:3000/"+key
    }
    
};

module.exports = { loadUrl, addUrl, generate, findKey }

