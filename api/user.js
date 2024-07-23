const User = require('../sdk/user')

function getUser(req, res) {
    const user = new User()
    user.get(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).send(data)
    })
}

module.exports = {
    getUser
}
