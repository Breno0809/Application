const Sequelize = require('Sequelize')
const sequelize = require('../database/index')
const db = require('../database/index')

const Oxygen = db.sequelize.define("Oxygen", {
    idOxygen: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nivel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    horario: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Oxygen