const express = require("express");
var TaskId = require("mongoose").Types.ObjectId;
var route = express.Router();

var { Task } = require('../Models/TODO');

// => localhost:3000/Tasks
route.get('/', (req, res) => {
    Task.find((err, data) => {
        console.log('In Controller');
        if (err) {
            console.log('Getting Error while Retriving all Tasks ' + JSON.stringify(err));
        } else {
            res.send(data);
        }
    });
});

route.get('/GetTask/:id', (req, res) => {
    if (TaskId.isValid(req.params.id)) {
        Task.findById(req.params.id, (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                console.log('Error while Retriving Data By ID ' + JSON.stringify(err));
            }
        })
    } else {
        return res.status(400).send(`No Records with given ID ${req.param.id}`)
    }
});


// => localhost:3000/Tasks/InsertTask 
route.post('/InsertTask', (req, res) => {
    var NewTask = new Task({
        Task: req.body.Task,
        IsComplete: req.body.IsComplete,
        IsActive: req.body.IsActive
    });

    NewTask.save((err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log(err);
        }
    })
})

// => 

route.put('UpdateTask/:id', (req, res) => {
    if (TaskId.isValid(req.params.id)) {

        var UpdateTask = {
            Task: req.body.Task,
            IsComplete: req.body.IsComplete,
            IsActive: req.body.IsActive
        }

        Task.findByIdAndUpdate(req.params.id, res.body, { new: this.true }, (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                console.log('Error while Updating Data' + JSON.stringify(err));
            }
        })
    } else {
        return res.status(400).send(`No Records with given ID ${req.param.id}`)
    }
})



module.exports = route;
