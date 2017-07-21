"use strict";
const express = require('express');
const morgan = require('morgan');
const path = require('path');
//var mongoose = require('mongoose');
//switch to morgan-body
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const port = 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

//static files
console.log(path.join(__dirname, 'server/public'))
app.use(express.static(path.join(__dirname, 'server/public')))
app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});