const { INTEGER, STRING, DATE } = require('../config/types')
const sequelize = require("../config/sequelize")
const bcrypt = require("bcryptjs");
const moment = require('moment');

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
            comment: '密码',
            set(val) {
                // 加密
                const salt = bcrypt.genSaltSync(10);
                // 生成加密密码
                const psw = bcrypt.hashSync(val, salt);
                this.setDataValue("password", psw);
            }
        },
    }
)

module.exports = User;