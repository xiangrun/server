/**
 * @description user controller
 */

const { getUserInfo } = require('../services/user')
/**
 * 
 * @param {Object} ctx 
 * @param {string} userName 
 * @param {string} password 
 */
async function login(ctx, userName, password) {
    const userInfo = await getUserInfo(userName, password);
    if (!userInfo) {
        //登录失败
        return
    }
    //登录成功
    return
}

module.exports = {
    login
}