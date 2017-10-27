const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
//res.send('<h1>Hello Express!</h1>');
    res.render('home.hbs',{
        pageTitle: 'Home Title',
        currentYear: new Date().getFullYear(),
        welcomeTitle: 'Welcome to this webpage',
    });
});

app.get('/about',(req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Title',
        currentYear: new Date().getFullYear(),
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error: no such file',
    });
});

app.listen(3000);