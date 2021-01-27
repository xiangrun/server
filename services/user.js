/**
 * @description user services
 */
const { User } = require('../models/index')
/**
 * 
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
        attributes: ['id', 'userName'],
        where: whereOpt
    })

    if (result == null) {
        return result
    }
    return result
}
module.exports = {
    getUserInfo
}