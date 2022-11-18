const { DataTypes } = require('sequelize')
const { db } = require('../database')

const CourseModel = db.define('course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    instructor: {
        type: DataTypes.STRING
    }
}, { timestamps: false })

module.exports = CourseModel