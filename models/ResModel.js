/**
 * @description res 的数据模型
 */

/**
 * @description 基础模型
 */

class BaseModel {
    constructor({ errno, data, message }) {
        this.errno = errno
        if (data) {
            this.data = data
        }
        if (message) {
            this.message.message
        }
    }
}

/**
 * 成功的数据模型
 */

class SuccessModel extends BaseModel {

}