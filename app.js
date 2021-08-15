const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const shortid = require('shortid');
const short = require('./controller/short');


const app = express();
const port = 3000;


app.set('view engine', 'ejs');
// app.set('view options', {
//     layout: false
// });
// middleware
// app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:code', (req, res) => {
    // const 
    const url = short.findKey(req.params.code);
    if(!url){
        res.status(404).send('<h1>404 not found</h1>');
    }else{
        res.redirect(url.urlLong);
    }
    
    // res.redirect()
});

app.post('/generate', (req, res) => {
    console.log(req.body.link);

});

app.post(
    '/',
    (req, res) => {
        const urlShort = short.generate();
        const checkKey = short.findKey(urlShort.key);
        if(checkKey){
            res.redirect('/');
        }else{
            const url = short.loadUrl();
            short.addUrl(req.body.link, urlShort);
            res.render('index', {
                urlShort: urlShort.urlShort
            });
        }
       
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

