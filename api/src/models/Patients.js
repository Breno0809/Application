const Sequelize = require('Sequelize')
const sequelize = require('../database/index')
const db = require('../database/index')

const Patients = db.sequelize.define("Pacientes", {
    idPatient: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idResponsible: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        // allowNull: false,
        references: {
            model: 'Responsible',
            key: 'idResponsible'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    idContact: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        // allowNull: false,
        references: {
            model: 'Contact',
            key: 'idContact'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    idSituation: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        // allowNull: false,
        references: {
            model: 'Situation',
            key: 'idSituation'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    idOxygen: {
        type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        // allowNull: false,
        references: {
            model: 'Oxygen',
            key: 'idOxygen'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cartaoSUS: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RG: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // telefone: { type: Sequelize.STRING, allowNull: false },
    // celular: { type: Sequelize.STRING, allowNull: false },
    // email: { type: Sequelize.STRING, allowNull: false },
    // responsavel: { type: Sequelize.STRING, allowNull: false },
    // emailResp: { type: Sequelize.STRING, allowNull: false },
    // telefoneResp: { type: Sequelize.STRING, allowNull: false },
    // celularResp: { type: Sequelize.STRING, allowNull: false },
    // endereco: { type: Sequelize.STRING, allowNull: false },
    // numero: { type: Sequelize.INTEGER, allowNull: false },
    // bairro: { type: Sequelize.STRING, allowNull: false },
    // cidade: { type: Sequelize.STRING, allowNull: false },
    // CEP: { type: Sequelize.STRING, allowNull: false },
    comorbidade: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    urgencia: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Create Table
// This command must be execute only once
// Patients.sync({ force: true })
// Patients.sync()

module.exports = Patients