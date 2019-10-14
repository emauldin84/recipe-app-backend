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
        console.log('req.session', req.session.user)
        res.json(newUser)
    } else if (regAttemptUser.email){
        console.log('that email address is already registered')
        res.json({status : 401, message: 'that email address is already registered'});
    }
}

async function getUserById(req, res) {
    const user = await User.getUserById(req.session.user.id)
    res.json({user})
    console.log(req.session)
}

async function getUserByEmail(req, res){
    const user = await User.getUserByEmail(req.session.user.email)
    res.send(user)
}

function logOut(req, res) {
    req.session.destroy()
    res.json({message: `user session has been destroyed`})
}

async function sessionCheck(req, res) {
    if(!req.session.user){
        console.log('no session')
        res.json({message: 'no user'})
    }
    if(req.session && req.session.user && req.session.user.id){
        const user = await User.getUserById(req.session.user.id)
        res.send(user)
    }
}



module.exports = {
    getAllUsers,
    addNewUser,
    getUserById,
    getUserByEmail,
    logOut,
    sessionCheck,
}