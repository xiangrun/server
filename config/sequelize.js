const Sequelize = require('sequelize')
//传入参数 数据库名 用户名，密码


//线上数据库
const sequelize = new Sequelize('demo', 'root_mysql', '123456Aa', {
    host: 'rm-bp1tmxb598zly8utrao.mysql.rds.aliyuncs.com',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,

    }
})
//本地数据库
// const sequelize = new Sequelize('demo', 'root', '12345678', {
//     host: 'localhost',
//     dialect: 'mysql',
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     }
// })

sequelize
    .authenticate()
    .then(() => {
        console.log("mysql 连接成功")
    })
    .catch(err => {
        console.error("连接失败", err);
    })
//根据模型自动创建表并同步
sequelize.sync({ alter: true })
module.exports = sequelize;