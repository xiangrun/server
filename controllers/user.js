/**
 * @description user controller
 */
const jwt = require('jsonwebtoken')
const { secret } = require('../config/secret')
const { getUserInfo, createUser, updateUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { loginFailInfo, registerUserNameExistInfo } = require('../models/ErrorInfo')



/**
 * 注册
 */
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
 *  登录
 */
async function login(ctx) {
    console.log(ctx.verifyParams)
    const { userName, password } = ctx.request.body
    const userInfo = await getUserInfo(userName, password);
    console.log(userInfo)
    if (!userInfo) {
        //登录失败
        return ctx.body = new ErrorModel(loginFailInfo)
    }
    //登录成功
    const token = jwt.sign({ userName, password }, secret, { expiresIn: "2" })
    ctx.body = new SuccessModel(token)

}

/**
 * 修改用户
 */
async function changeInfo(ctx) {
    const { newUserName } = ctx.request.body
    const result = await updateUser({ newUserName }, { userName })
    //services
    if (result) {
        return new SuccessModel(result)
    }
    return new ErrorModel(registerUserNameExistInfo)
}


module.exports = {
    login,
    register
}