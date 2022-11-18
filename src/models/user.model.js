const { DataTypes } = require("sequelize")
const db = require("../database/database")
const bcrypt = require("bcrypt")

const encodePassword = (user, options) => {
    const { password } = user
    const hash = bcrypt.hashSync(password, 8)

    user.password = hash
}

const UserModel = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(70)
    },
    lastname: {
        type: DataTypes.STRING(70)
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {
    timestamps: true,
    hooks: {
        beforeCreate: encodePassword,
        beforeUpdate: encodePassword
    }
})

module.exports = UserModel