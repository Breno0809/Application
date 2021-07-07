const Sequelize = require('Sequelize')
    // Connection with database MySQL
const sequelize = new Sequelize('aoms', 'root', '@BReno08#09;', {
    host: 'localhost', // Default root of System
    dialect: 'mysql' // Type of data base
        /** dialect: one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

sequelize.authenticate().then(() => {
    console.log("> Successful database connection");
}).catch(err => {
    console.log("> Unsuccessful database connection");
    console.error(err);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}