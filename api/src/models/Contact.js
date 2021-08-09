const Sequelize = require('Sequelize')
const sequelize = require('../database/index')
const db = require('../database/index')

const Contact = db.sequelize.define("Contact", {
    idContact: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CEP: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

// Create Table
// This command must be execute only once
// Contact.sync({ force: true })
// Contact.sync()

module.exports = Contact