const Sequelize = require('Sequelize')
const sequelize = require('../database/index')
const db = require('../database/index')

const Historic = db.sequelize.define("Historico", {
    idHistoric: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

// Create Table
// This commando must be execute only once
// Historic.sync({ force: true })
// Historic.sync()

module.exports = Historic