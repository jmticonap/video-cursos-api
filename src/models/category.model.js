const { DataTypes } = require("sequelize")
const { db } = require("../database")

const CategoryModel = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { timestamps: false })

module.exports = CategoryModel