/**
 * @description user services
 */
const { User } = require('../models/index')
const { formatUser } = require('./_format')
/**
 *  获取用户信息
 * @param {string} userName 用户名 
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
    //查询条件
    const whereOpt = {
        userName
    }
    if (password) {
        Object.assign(whereOpt, { password })
    }
    //查询
    const result = await User.findOne({
        attributes: ['userName'],
        where: whereOpt
    })

    if (result == null) {
        return result
    }

    const formatRes = formatUser(result.dataValues)
    console.log(formatRes)
    return formatRes
}

async function createUser({ userName, password }) {
    const result = await User.create({
        userName, password
    })
    const data = result.dataValues
    return data
}


module.exports = {
    getUserInfo,
    createUser,
}