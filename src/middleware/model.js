const fs = require('fs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db_config = {
    dev: require('../config/mongodb_dev.json'),
    prod: require('../config/mongodb_prod.json'),
    test: require('../config/mongodb_test.json')
}
let models = {};

function dbConnect() {
    let env = process.env.NODE_ENV || 'dev';
    const {address, dbname, options} = db_config[env]
    console.log(address)
    let url = `${address}${dbname}`;
    mongoose.connect(url, options);
}

const path = __dirname + '/../model/';
function buildModels() {
    const files = fs.readdirSync(path);
    files.forEach((file) => {
        const modelProperty = require(path + file);
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