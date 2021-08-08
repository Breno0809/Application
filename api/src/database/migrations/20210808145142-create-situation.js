'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Situation', {
            id: {
                type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            situation: {
                type: Sequelize.STRING,
                allowNull: false
            },
            descricao: {
                type: Sequelize.TEXT,
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
        return queryInterface.dropTable('Situation')
    }
};