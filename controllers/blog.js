//引入模型
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const {
    blogTitleEmptyInfo,
    blogContentEmptyInfo,
    blogCreateInfo,
    blogTitleFaile,
    deleteFailInfo,
    idFailInfo,
    changeInfoFail,
    queryFailInfo
} = require('../models/ErrorInfo')
const {
    createBlog,
    getBlogInfo,
    getBlogList,
    deleteBlog,
    updateBlog,
    queryBlog
} = require('../services/blog')
class Blogs {
    //列表
    async list(ctx) {
        const { pageNo, pageSize } = ctx.request.body;
        //services
        const result = await getBlogList({ pageNo, pageSize })
        const { total, list } = result
        return ctx.body = new SuccessModel({
            list,
            total
        })

    }
    //创建
    async create(ctx) {
        const { title, content, author } = ctx.request.body;
        if (!title) {
            return ctx.body = new ErrorModel(blogTitleEmptyInfo)
        }
        if (!content) {
            return ctx.body = new ErrorModel(blogContentEmptyInfo)
        }
        //services
        const titleInfo = await getBlogInfo(title)
        if (titleInfo) {
            //标题存在
            return ctx.body = new ErrorModel(blogTitleFaile)
        }
        try {
            const data = await createBlog({
                title,
                content,
                author
            })
            console.log(data);
            ctx.body = new SuccessModel(data)
        } catch (err) {
            console.log(err)
            return ctx.body = new ErrorModel(blogCreateInfo)
        }
    }
    //删除

    async delete(ctx) {
        const id = ctx.params.id;
        const result = await deleteBlog(id);
        if (!result) {
            return ctx.body = new ErrorModel(deleteFailInfo)
        }
        return ctx.body = new SuccessModel(result)
    }

    //更新
    async update(ctx) {
        const { title, id, content, author } = ctx.request.body;

        if (!id) {
            return ctx.body = new ErrorModel(idFailInfo)
        }
        if (!title) {
            return ctx.body = new ErrorModel(blogTitleEmptyInfo)
        }
        if (!content) {
            return ctx.body = new ErrorModel(blogContentEmptyInfo)
        }
        //serivces
        const result = await updateBlog({ title, id, content, author })
        if (!result) {
            return ctx.body = new ErrorModel(changeInfoFail)
        }
        return ctx.body = new SuccessModel(result);
    }
    //查找
    async query(ctx) {
        const id = ctx.params.id;
        if (!id) {
            return ctx.body = new ErrorModel(queryFailInfo)
        }
        const res = await queryBlog(id)

        return ctx.body = new SuccessModel(res)
    }
}
module.exports = new Blogs