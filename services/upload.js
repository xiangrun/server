const { Upload } = require('../models/index')

async function createUrl(url) {
    const result = await Upload.create({
        url,
    })

    const data = result.dataValues

    return data
}
module.exports = {
    createUrl
}
