const { INTEGER, STRING, TEXT } = require('../utils/types')
const sequelize = require("../utils/sequelize")

module.exports = sequelize.define(
    'users',
    {
        id: {
            type: INTEGER,
            primaryKey: true, //设为主键
            autoIncrement: true, //自增
        },
        title: {
            type: STRING,
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