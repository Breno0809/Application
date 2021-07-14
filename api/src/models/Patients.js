const Sequelize = require('Sequelize')
const sequelize = require('./config/db')
const db = require('./config/db')

const Patients = db.sequelize.define("Pacientes", {
    idPatient: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nomeCompleto: { type: Sequelize.STRING, allowNull: false },
    dataNascimento: { type: Sequelize.DATEONLY, allowNull: false },
    cartaoSUS: { type: Sequelize.STRING(18), allowNull: false },
    RG: { type: Sequelize.STRING(12), allowNull: false },
    CPF: { type: Sequelize.STRING(14), allowNull: false },
    telefone: { type: Sequelize.STRING(14), allowNull: false },
    celular: { type: Sequelize.STRING(14), allowNull: false },
    email: { type: Sequelize.STRING(100), allowNull: false },
    responsavel: { type: Sequelize.STRING, allowNull: false },
    emailResp: { type: Sequelize.STRING(100), allowNull: false },
    telefoneResp: { type: Sequelize.STRING(14), allowNull: false },
    celularResp: { type: Sequelize.STRING(14), allowNull: false },
    endereco: { type: Sequelize.STRING, allowNull: false },
    numero: { type: Sequelize.INTEGER, allowNull: false },
    bairro: { type: Sequelize.STRING, allowNull: false },
    cidade: { type: Sequelize.STRING, allowNull: false },
    CEP: { type: Sequelize.STRING(10), allowNull: false },
    comorbidade: { type: Sequelize.TEXT, allowNull: false },
    urgencia: { type: Sequelize.STRING, allowNull: false }
})

// Create Table
// This command must be execute only once
// Patients.sync({ force: true })
Patients.sync()

module.exports = Patients