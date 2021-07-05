const Sequelize = require('Sequelize')
const sequelize = require('./db')
const db = require('./db')

const Patients = db.sequelize.define("Pacientes", {
    idPatient: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    RG: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CPF: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    responsavel: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.STRING(10),
        allowNull: false
    },
    comorbidade: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    urgencia: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
})

// Create Table
// This command must be execute only once
// Patients.sync({ force: true })

module.exports = Patients