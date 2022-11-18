const { DataTypes } = require('sequelize')
const { db } = require('../database')

const VideoModel = db.define('video',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }
    }, { timestamps: false }
)

module.exports = VideoModel