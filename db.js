const config = require('./config/config.js');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password,
    {
        host: config.development.host,
        port: config.development.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,  
            min: 0,  
            acquire: 30000, 
            idle: 10000 
        },
    }
);

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
}); 