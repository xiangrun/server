const blog = require('../controllers/blog')
const { Blog } = require('../models/index')
const { formatUser } = require('./_format')

/**
 * 创建blog
 * @param {*} param0 
 */
async function createBlog({ title, content, author }) {
    const result = await Blog.create({
        title, content, author
    })
    const data = result.dataValues
    console.log(data)
    return data
}
/**
 *  获取blog信息
 *
 * 
 */
async function getBlogInfo(title) {
    //查询条件
    const whereOpt = {
        title
    }

    //查询
    const result = await Blog.findOne({
        attributes: ['title'],
        where: whereOpt
    })

    if (result == null) {
        return result
    }
    const formatRes = formatUser(result.dataValues)
    return formatRes
}
async function getBlogList({ pageNo, pageSize }) {
    const result = await Blog.findAndCountAll({
        limit: pageSize, // 每页多少条
        offset: pageSize * (pageNo - 1), // 跳过多少条
        order: [['id', 'DESC']],
    })

    let list = result.rows.map(row => row.dataValues)
    return {
        total: result.count,
        list
    }
}
async function deleteBlog(id) {
    const result = await Blog.destroy({
        where: { id }
    })
    return result > 0 //修改的行数

}
async function updateBlog({ title, id, content, author }) {
    let whereOpt = {
        id
    };
    const updateData = {}
    if (title) {
        updateData.title = title
    }
    if (content) {
        updateData.content = content
    }
    if (author) {
        updateData.author = author
    }
    const result = await Blog.update(updateData, {
        where: whereOpt
    })
    return result[0] > 0 //修改的行数
}

async function queryBlog(id) {
    let whereOpt = {
        id
    };
    const result = await Blog.findOne({
        where: whereOpt
    })
    const formatRes = formatUser(result.dataValues)
    return formatRes

}
module.exports = {
    createBlog,
    getBlogInfo,
    getBlogList,
    deleteBlog,
    updateBlog,
    queryBlog
}