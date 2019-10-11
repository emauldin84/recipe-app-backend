const User = require('../models/users')

async function sessionCheck(req, res) {
    console.log(req.session)
}

module.exports = {
    sessionCheck,
}