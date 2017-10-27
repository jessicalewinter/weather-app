const express = require('express');

var app = express();

app.get('/', (req, res) => {
//res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Jessica',
        likes:[
            'Sex',
            'Drugs',
            'Alcohool',
        ]
    });
});

app.get('/about',(req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error: no such file',
    });
});

app.listen(3000);