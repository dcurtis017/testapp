"use strict";
const express = require('express');
const morgan = require('morgan');
//var mongoose = require('mongoose');
//switch to morgan-body
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const port = 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});