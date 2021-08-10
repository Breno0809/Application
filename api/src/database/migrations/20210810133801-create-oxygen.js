'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Oxygen', {
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
        return queryInterface.dropTable('Oxygen')
    }
};