// Import orm object
const orm = require('../config/orm');

// ORM calls here
const burger = {
    selectAll: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (cb) => {
        orm.create("burgers", (res) => {
            cb(res);
        });
    },
    updateOne: (cb) => {
        orm.update("burgers", (res) => {
            cb(res);
        });
    }
};

// Export database functions
module.exports = burger;
