const { INTEGER, STRING, TEXT } = require('../utils/types')
const sequelize = require("../utils/sequelize")

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