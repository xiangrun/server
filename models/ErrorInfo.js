/**
 * 失败信息集合，包括 code 和 message
 */

module.exports = {
    registerUserNameExistInfo: {
        code: 10001,
        message: '用户名已存在'
    },
    //登录失败
    loginFailInfo: {
        code: 10002,
        message: "登录失败，用户名或密码错误"
    },
    changeInfoFail: {
        code: 10004,
        message: "修改失败"
    },
    deleteFailInfo: {
        code: 10005,
        message: "删除失败"
    },
    jsonSchemaFileInfo: {
        code: 10006,
        message: "校验数据失败"
    }
}