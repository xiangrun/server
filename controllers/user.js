/**
 * @description user controller
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { loginFailInfo, registerUserNameExistInfo } = require('../models/ErrorInfo')




async function register(ctx, next) {
    const { userName, password } = ctx.request.body
    //services
    const userInfo = await getUserInfo(userName, password)

    if (userInfo) {
        console.log(userInfo)
        //用户名存在
        return ctx.body = new ErrorModel(registerUserNameExistInfo)
    }

    try {
        const userInfo = await createUser({
            userName,
            password
        })

        ctx.body = new SuccessModel(userInfo)
    } catch (e) {
        return ctx.body = new ErrorModel(registerUserNameExistInfo)
    }
}


/**
 * 
 * @param {Object} ctx 
 * @param {string} userName 
 * @param {string} password 
 */
async function login(ctx, next) {
    const { userName, password } = ctx.request.body
    const userInfo = await getUserInfo(userName, password);
    console.log(userInfo)
    if (!userInfo) {
        //登录失败
        return ctx.body = new ErrorModel(loginFailInfo)

    }
    //登录成功
    ctx.body = new SuccessModel(userInfo)

}

module.exports = {
    login,
    register
}