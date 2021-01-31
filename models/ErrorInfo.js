/**
 * 失败信息集合，包括 errno 和 message
 */

module.exports = {
    registerUserNameExistInfo: {
        errno: 10001,
        message: '用户名已存在'
    },
    //登录失败
    loginFailInfo: {
        errno: 10002,
        message: "登录失败，用户名或密码错误"
    },
    changeInfoFail: {
        errno: 10004,
        message: "修改失败"
    },
    deleteFailInfo: {
        errno: 10005,
        message: "删除失败"
    },
    jsonSchemaFileInfo: {
        errno: 10006,
        message: "校验数据失败"
    }
}