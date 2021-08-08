const Sequelize = require('Sequelize')
const sequelize = require('../database/index')
const db = require('../database/index')

const Situation = db.sequelize.define("Situation", {
    idSituation = {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    situation = {
        type = Sequelize.STRING,
        allowNull: false,
    },
    descricao = {
        type = Sequelize.TEXT,
        allowNull: false
    }
})

// Create Table
// This command must be execute only once
// Situation.sync({ force: true })
// Situation.sync()

module.exports = Situation