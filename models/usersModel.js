const { INTEGER, STRING, TEXT } = require('../utils/types')
const sequelize = require("../utils/sequelize")

const User = sequelize.define(
    'users',
    {
        id: {
            type: INTEGER,
            primaryKey: true, //设为主键
            autoIncrement: true, //自增

        },
        title: {
            type: STRING,
            comment: "标题"
        },
        name: {
            type: STRING,
        },
        password: {
            type: STRING,
        },
        content: {
            type: TEXT
        },
        author: {
            type: STRING
        }
    }
)

module.exports = User;