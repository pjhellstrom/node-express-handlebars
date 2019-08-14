// Import orm object
const orm = require('../config/orm.js');

// Model construction
const burger = {
    select: (callback) => {
        orm.select("burgers", (res) => {
        callback(res);
    });
    },
    create: (cols, vals, callback) => {
        orm.create("burgers", cols, vals, (res) => {
        callback(res);
    });
    },
    update: (objColVals, condition, callback) => {
        orm.update("burgers", objColVals, condition, (res) => {
        callback(res);
    });
    }
};

// Export model
module.exports = burger;