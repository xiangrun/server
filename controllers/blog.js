//引入模型
const db = require("../models/bolgModel");
const Op = require('sequelize').Op;

class Blogs {
    //列表
    async list(ctx) {
        console.log(ctx)
        const query = ctx.query
        console.log(query)
        const { rows: data, count: total } = await db.findAndCountAll({
            offset: (+query.page - 1) * +query.pageSize,
            limit: +query.pageSize,
            order: [["createdAt"]]
        })
        ctx.body = {
            data,
            total
        }
    }
    //创建
    async create(ctx) {
        const params = ctx.request.body;
        if (!params.title) {
            ctx.body = {
                code: 1003,
                desc: "标题不能为空"
            }
            return false
        }

        try {
            await db.create(params)
            ctx.body = {
                code: 200,
                msg: '创建成功'
            }
        } catch (err) {
            ctx.body = {
                code: 300,
                msg: err,
            }
        }
    }
    //删除

    async delete(ctx) {
        const user = await db.findOne({ where: { id: ctx.params.id } })
        if (!user) {
            ctx.throw(404, "用户不存在")
        }
        await user.destroy()
        ctx.body = 204;
    }
    async update(ctx) {
        const params = ctx.request.body;
        if (!params.id) {
            ctx.body = {
                code: "1003",
                msg: "id不能为空"
            }
            return
        }
        await db.update(params, {
            where: { id: params.id }
        });
        ctx.body = {
            code: "200",
            msg: "修改成功"
        }
    }
    //查找
    async details(ctx) {
        const query = ctx.query;
        console.log(query);
        if (!query.id) {
            ctx.body = {
                code: "1003",
                msg: "id不能为空"
            }
            return
        }
        const res = await db.findOne({
            where: { id: Number(query.id) }
        });
        if (!res) {
            ctx.throw(404, "用户不存在")
        }
        ctx.body = res;
    }
}
module.exports = new Blogs