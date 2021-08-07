const Sequelize = require('Sequelize')
const dbConfig = require('../config/db')

const connection = new Sequelize(dbConfig)

module.exports = connection