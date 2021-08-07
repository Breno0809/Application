'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        // return queryInterface.dropTable('user', {
        //     id: {
        //         type: Sequelize.INTEGER.ZEROFILL.UNSIGNED,
        //         primaryKey: true,
        //         autoIncrement: true,
        //         allowNull: false
        //     },
        //     name: {
        //       type: Sequelize.STRING,
        //       allowNull: false,
        //     },
        //     email: {
        //       type: Sequelize.STRING,
        //       allowNull: false,
        //     }
        // })
    },

    down: async(queryInterface, Sequelize) => {
        // return queryInterface.dropTable('user')
    }
};