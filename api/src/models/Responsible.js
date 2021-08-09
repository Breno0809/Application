const Sequelize = require('Sequelize')
const sequelize = require('../database/index')
const db = require('../database/index')

const Responsible = db.sequelize.define("Responsible", {
    idResponsible: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idContact: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        allowNull: false,
        reference: {
            model: 'Contact',
            key: 'idContact'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Create Table
// This command must be execute only once
// Responsible.sync({ force: true })
// Responsible.sync()

module.exports = Responsible