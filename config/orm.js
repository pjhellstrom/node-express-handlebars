// Import connection
const connection = require('./connection');

const log = console.log;

// Define orm object
const orm = {
    selectAll: (tableInput) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, res) => {
            if (err) throw err;
            log(result);
        });
    },
    insertOne: (tableInput, objVal, vals) => {
        var queryString = "INSERT INTO ?? (??) VALUES (??);";
        connection.query(queryString, [tableInput, objVal, vals], (err, res) => {
            if (err) throw err;
            log(result);
        });
    },
    updateOne: (tableInput) => {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        connection.query(queryString, [tableInput], (err, res) => {
            if (err) throw err;
            log(result);
        });
    }
};

// Export orm object
module.exports = orm;