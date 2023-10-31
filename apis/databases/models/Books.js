const { DataTypes } = require('sequelize')
const {Sequelize, sequelize} = require('./database')

const Books = sequelize.define('Books',{
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Books.sync()

module.exports = Books