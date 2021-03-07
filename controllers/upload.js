const { SuccessModel, ErrorModel } = require('../models/ResModel')
const fs = require('fs')
const path = require('path')
const {
    uploadFailInfo
} = require('../models/ErrorInfo')
const { createUrl } = require('../services/upload')

async function uploadFile(ctx, next) {

    const file = ctx.request.files.file;  //获取上传文件
    //创建可读流
    const reader = fs.createReadStream(file.path)
    let filePath = path.join(__dirname, '../public/upload/') + `.${file.name}`;
    //创建可写流
    let upStream = fs.createWriteStream(filePath);
    //可读流通过管道写入可写流
    reader.pipe(upStream);
    const data = await createUrl(file.name)

    if (!file) {
        return ctx.body = new ErrorModel(uploadFailInfo)
    }
    return ctx.body = new SuccessModel(data)
}
async function uploadFiles(ctx, next) {

    const files = ctx.request.files.file;  //获取上传文件
    let data;
    for (let file of files) {
        //创建可读流
        const reader = fs.createReadStream(file.path)
        let filePath = path.join(__dirname, '../public/upload/') + `.${file.name}`;
        //创建可写流
        let upStream = fs.createWriteStream(filePath);
        //可读流通过管道写入可写流
        reader.pipe(upStream);
        data = await createUrl(file.name)
    }
    if (!files) {
        return ctx.body = new ErrorModel(uploadFailInfo)
    }
    return ctx.body = new SuccessModel(data)
}
module.exports = {
    uploadFile,
    uploadFiles
}