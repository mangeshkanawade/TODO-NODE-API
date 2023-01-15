const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require('./DB-Connection')

var TODOController = require('./Controllers/TODOController')

var API = express();

API.use(bodyParser.json());

API.listen(3000, () => {
    console.log('API Started at Port 3000...!');
})

API.use('/Tasks', TODOController);