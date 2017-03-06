const fs = require('fs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let models = {};

function dbConnect() {
    const {
        address,
        port,
        dbname,
        options,
    } = require('../config/mongodb.json');
    const url = `${address}:${port}/${dbname}`;
    mongoose.connect(url, options);
}

function buildModels() {
    const files = fs.readdirSync('./model/');
    files.forEach((file) => {
        const modelProperty = require(`../model/${file}`);
        const entitySchema = mongoose.Schema(modelProperty);
        const modelName = file.substr(0, file.length - 3);
        models[modelName] = mongoose.model(modelName, entitySchema);
    });
}

function getModel(name) {
    let model = models[name];
    if (model) {
        return model
    } else {
        throw `you do not define a model [${name}]`
    }
}

dbConnect();
buildModels();
console.log('models inited: ', Object.keys(models))

module.exports = getModel;