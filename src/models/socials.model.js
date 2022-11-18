const { DataTypes } = require("sequelize")
const db = require("../database/database")

const SocialsModel = db.define("socials_user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = SocialsModel