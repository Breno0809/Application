'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Contact', {
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
        return queryInterface.dropTable('Contact')
    }
};