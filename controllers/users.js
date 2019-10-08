const User = require('../models/users')

async function getAllUsers(req, res) {
    const usersArray = await User.getAllUsers();
    res.send(usersArray)
}

async function addNewUser(req, res) {
    // const newPassword = User.hashPassword(req.body.password); Use this once hashing passwords

    let newUser = await User.addNewUser(req.body.first_name, req.body.last_name, req.body.email, req.body.password)
    res.json({message: 'success', newUserId: newUser.id})
}




module.exports = {
    getAllUsers,
    addNewUser,
}