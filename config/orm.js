var connection = require('./connection'),
    orm = {

        selectAll: (table, cbk) => {
            var queryString = 'SELECT * FROM ??';
            connection.query(queryString, [table], (err, result) => {
                if (err) throw err;
                cbk(result);
            });
        },
        insertOne: (table, column1, column2, value1, value2) => {
            var queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
            connection.query(queryString, [table, column1, column2, value1, value2], (err) => {
                if (err) throw err;
            });
        },
        updateOne: (table, column1, value1, column2, value2) => {
            var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
            connection.query(queryString, [table, column1, value1, column2, value2], (err) => {
                if (err) throw err;
            });
        }
    };

module.exports = orm;