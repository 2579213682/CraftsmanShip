const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1', // 数据库IP地址
    user: 'root', // 数据库登录账号
    password: 'root', // 数据库登录密码
    database: 'sams' // 要操作的数据库
})

module.exports = db