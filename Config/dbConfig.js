const Sequelize = require('sequelize')
const dbConn  = new Sequelize("tcc","root","",{
    dialect:"mysql",
    port: 3307,
    host:"localhost"
})
module.exports = dbConn
