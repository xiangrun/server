/**
 * @description upload数据模型
 */

const { INTEGER, STRING, TEXT } = require('../config/types')
const sequelize = require("../config/sequelize")

const Upload = sequelize.define(
    'upload',
    {
        url: {
            type: STRING,
        },

    }
)

module.exports = Upload