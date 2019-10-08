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




module.exports = {
    getAllUsers,
    addNewUser,
}