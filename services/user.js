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
/**
 * 
 * @param {object} param0 修改的名称，密码
 */
async function updateUser({ newNickName, newPassword, id }) {
    const whereOpt = {
        id
    }
    const updateData = {}
    if (newPassword) {
        updateData.password = newPassword
    }
    if (newNickName) {
        updateData.userName = newNickName
    }

    const result = await User.update(updateData, {
        where: whereOpt
    })


    return result[0] > 0 //修改的行数
}
async function deleteUser(id) {
    const result = await User.destroy({
        where: { id }
    })
    console.log(result);
    return result > 0 //修改的行数
}
module.exports = {
    getUserInfo,
    createUser,
    updateUser,
    deleteUser
}