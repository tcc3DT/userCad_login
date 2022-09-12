const Sequelize = require('sequelize');
const db = require('../Config/dbConfig');

const QrCodeTable = db.define('qrcode',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    pathImage:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports = QrCodeTable;