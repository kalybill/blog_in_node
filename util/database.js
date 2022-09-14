const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
