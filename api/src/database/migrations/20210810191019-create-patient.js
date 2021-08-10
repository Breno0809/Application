'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Patient', {
            idPatient: {
                type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
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
                    key: 'id'
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
            comorbidade: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            urgencia: {
                type: Sequelize.STRING,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Patient')
    }
};