const User = require('../models/users')

async function getAllUsers(req, res) {
    const usersArray = await User.getAllUsers();
    res.send(usersArray)
}

async function addNewUser(req, res) {
    // const newPassword = User.hashPassword(req.body.password); Use this once hashing passwords
    console.log('req.body',req.body)
    let newUser = await User.addNewUser(req.body.first, req.body.last, req.body.email, req.body.password)
    res.json({newUser})
}

async function getUserById(req, res) {
    const user = await User.getUserById(req.params.id/* adds req.session... here */)
    res.json({user})
}

async function getUserByEmail(req, res){
    const user = await User.getUserByEmail(req.body.email /* from session here? */)
    res.send(userInstance)
}



module.exports = {
    getAllUsers,
    addNewUser,
    getUserById,
    getUserByEmail,
}