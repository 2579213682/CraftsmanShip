const db = require('../db/index')

exports.get = (req, res) => {
    const sql = 'select * from user'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}