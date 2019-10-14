const User = require('../models/users')

async function getAllUsers(req, res) {
    const usersArray = await User.getAllUsers();
    res.send(usersArray)
}

async function addNewUser(req, res) {
    // const newPassword = User.hashPassword(req.body.password); Use this once hashing passwords
    let regAttemptUser = await User.getUserByEmail(req.body.email)
    if(!regAttemptUser) {
        let newUser = await User.addNewUser(req.body.first, req.body.last, req.body.email, req.body.password)
        req.session.user = newUser
        req.session.save()
        // console.log('req.session', req.session)
        res.json(newUser)
    } else if (regAttemptUser.email){
        console.log('that email address is already registered')
        res.json({status : 401, message: 'that email address is already registered'});
    }
}

async function getUserById(req, res) {
    const user = await User.getUserById(req.params.id/* adds req.session... here */)
    res.json({user})
    console.log(req.session)
}

async function getUserByEmail(req, res){
    const user = await User.getUserByEmail(req.session.email /* from session here? */)
    res.send(user)
}

function logOut(req, res) {
    req.session.destroy()
}





module.exports = {
    getAllUsers,
    addNewUser,
    getUserById,
    getUserByEmail,
    logOut,
}