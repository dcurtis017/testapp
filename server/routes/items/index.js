"use strict";

const items = require('express').Router();
const all = require('./all');
const single = require('./single');

items.get('/', all);
items.get('/:itemId', single.get);
items.delete('/:itemId', single.remove);
items.post('/', single.add);
items.put('/:itemId', single.update);

module.exports = items;
