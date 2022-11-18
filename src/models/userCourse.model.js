const { DataTypes } = require('sequelize')
const { db } = require('../database')

const UserCourseModel = db.define('usercourse',
    {},
    { timestamps: false }
)

module.exports = UserCourseModel