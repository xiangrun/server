/**
 * @description json schema 校验
 * @author 双越老师
 */

const Ajv = require('ajv').default

const ajv = new Ajv()

/**
 * json schema 校验
 * @param {Object} schema json schema 规则
 * @param {Object} data 待校验的数据
 */
function validate(schema, data = {}) {
    const valid = ajv.validate(schema, data)

    if (!valid) {
        return ajv.errors[0]
    }
}

module.exports = validate
