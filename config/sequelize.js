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

    },
    timezone: '+08:00',
    define: {
        createdAt: 'created_at',
        updatedAt: 'update_at',
        deletedAt: 'deleted_at',
        timestamps: true, //设置为false就不会生成createdAt和updatedAt这两个字段了
        paranoid: true, //添加字段deletedAt
        underscored: true //将所有的驼峰命名的字段名称转换为以下划线链接的字段名称
    },
    logging: true, //默认值为true,是否在控制台中显示具体的mysql操作
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