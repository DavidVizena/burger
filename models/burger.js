var orm = require('./../config/orm');

var burger = {
    selectALL: function (cbk) {
        orm.selectAll('burgers', function (data) {
            cbk(data);
        });
    },
    insertOne: function (burgerName) {
        orm.insertOne('burgers', 'burger_name', 'devoured', burgerName, '0');
    },
    updateOne: function (id) {
        orm.updateOne('burgers', 'devoured', '1', 'id', id);
    }
};

module.exports = burger;