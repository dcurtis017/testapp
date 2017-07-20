"use strict";

const testData = require('../../../test_data/todo-items.json');

module.exports = (req, res) => {
    res.status(200).json(testData);
}
