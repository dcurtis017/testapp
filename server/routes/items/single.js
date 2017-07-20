"use strict";
const testData = require('../../../test_data/todo-items.json');

//use middleware to get rid of duplicate code
module.exports.get = (req, res) => {
    const itemId = req.params.itemId;
    let found = testData.find((t) => t.id == itemId);
    if (found == undefined) {
        res.status(400).send(`The item ${repoId} does not exist`);
    }
    else {
        res.status(200).json(found);
    }
};

module.exports.remove = (req, res) => {
    const itemId = req.params.itemId;
    let found = testData.find((t) => t.id == itemId);
    if (found == undefined) {
        res.status(400).send(`The item ${repoId} does not exist`);
    }
    else {
        res.status(204).json();
    }
};

module.exports.add = (req, res) => {
    const itemName = "" + req.body.itemName;
    const dueDate = "" + req.body.dueDate;

    if (itemName.length == 0 || dueDate.length == 0) {
        res.status(400).send(`Bad request`);
    }
    else {
        res.status(200).send({
            itemId: 1211,
            itemName: itemName,
            dueDate: dueDate
        });
    }
};

module.exports.update = (req, res) => {
    const itemId = req.params.itemId;
    let found = testData.find((t) => t.id == itemId);
    console.log(req.body)
    if (found == undefined) {
        res.status(400).send(`The item ${itemId} does not exist`);
    }
    else {
        const itemName = (req.body.itemName == undefined) ? found.itemName: ""+req.body.itemName;
        const dueDate = (req.body.dueDate == undefined) ? found.dueDate: ""+req.body.dueDate;
        const isComplete = (req.body.isComplete == undefined) ? found.isComplete: Boolean(req.body.isComplete);
        if (itemName.length == 0 || dueDate.length == 0) 
        {
            res.status(400).send(`Bad request`);
        }
        else {
            res.status(200).send({
                "itemId": itemId,
                "itemName": itemName,
                "dueDate": dueDate,
                "isComplete": isComplete
            });
        }
    }
};