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
        attributes: ['userName', 'password'],
        where: whereOpt
    })

    if (result == null) {
        return result
    }

    const formatRes = formatUser(result.dataValues)
    console.log(formatRes)
    return formatRes
}
/**
 * 创建用户
 * @param {*} param0 
 */
async function createUser({ userName, password }) {
    const result = await User.create({
        userName, password
    })
    const data = result.dataValues
    return data
}
async function updateUser({ newUserName }, { userName, password }) {
    const updateData = {}
    if (newUserName) {
        updateData.userName = newUserName
    }
    const whereData = {
        userName
    }
    if (password) {
        whereData.password = password
    }
    console.log(User)
    const result = await User.update(updateData, {
        where: whereData
    })
    return result[0] > 0 //修改的行数
}

module.exports = {
    getUserInfo,
    createUser,
    updateUser
}