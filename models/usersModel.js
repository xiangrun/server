const { INTEGER, STRING, TEXT } = require('../config/types')
const sequelize = require("../config/sequelize")

const User = sequelize.define(
    'users',
    {
        userName: {
            type: STRING,
            allowNull: false,
            unique: true,
            comment: '用户名，唯一'
        },
        password: {
            type: STRING,
            allowNull: false,
            comment: '密码'
        },
    }
)

module.exports = User;