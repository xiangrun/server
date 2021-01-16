const redis = require('redis')
const { REDIS_CONF } = require('./db')

export const client = redis.createClient(REDIS_CONF.prot, REDIS_CONF.host)