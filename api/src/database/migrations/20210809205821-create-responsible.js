'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Responsible', {
            idResponsible: {
                type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            idContact: {
                type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'Contact',
                    key: 'idContact'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            nomeCompleto: {
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
        return queryInterface.dropTable('Responsible')
    }
};