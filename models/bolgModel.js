/**
 * @description blog数据模型
 */

const { INTEGER, STRING, TEXT } = require('../utils/types')
const sequelize = require("../utils/sequelize")

const Blog = sequelize.define(
    'blog',
    {
        id: {
            type: INTEGER,
            primaryKey: true, //设为主键
            autoIncrement: true, //自增
        },
        title: {
            type: STRING,
        },
        content: {
            type: TEXT
        },

    }
)

module.exports = Blog