/**
 * @description user controller
 */
const jwt = require('jsonwebtoken')
const { secret } = require('../config/secret')
const { getUserInfo, createUser, updateUser, deleteUser, getUserList } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { loginFailInfo, registerUserNameExistInfo, changeInfoFail, deleteFailInfo } = require('../models/ErrorInfo')




/**
 * 注册
 */
async function register(ctx, next) {
    console.log(ctx);
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
    const { userName, password } = ctx.request.body
    const userInfo = await getUserInfo(userName, password);
    if (!userInfo) {
        //登录失败
        return ctx.body = new ErrorModel(loginFailInfo)
    }
    //登录成功
    const token = jwt.sign({ userName, password }, secret, { expiresIn: "2d" })
    ctx.body = new SuccessModel(token)

}

/**
 * 修改用户
 */
async function changeInfo(ctx) {
    const { userName, password, id } = ctx.request.body
    console.log(ctx.request.body);
    const result = await updateUser({ userName, password, id })
    console.log(result);

    if (!result) {
        return ctx.body = new ErrorModel(changeInfoFail)
    }
    return ctx.body = new SuccessModel(result)
}
/**
 * 删除用户
 * @param {*} ctx 
 */
async function deleteCurUser(ctx) {
    const id = ctx.params.id
    const result = await deleteUser(id);
    console.log(result);
    if (!result) {
        return ctx.body = new ErrorModel(deleteFailInfo)
    }
    return ctx.body = new SuccessModel(result)
}
/**
 * 用户列表
 * @param {*} ctx 
 */
async function userList(ctx) {
    const { pageNo, pageSize } = ctx.request.body;
    const result = await getUserList({ pageNo, pageSize })
    const { total, list } = result
    return ctx.body = new SuccessModel({
        list,
        total
    })
}
module.exports = {
    login,
    register,
    changeInfo,
    deleteCurUser,
    userList
}