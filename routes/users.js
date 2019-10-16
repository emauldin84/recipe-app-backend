const express = require('express');
const usersRouter = express.Router();

const {
    getAllUsers,
    addNewUser,
    getUserById,
    getUserByEmail,
    logOut,
    logIn,
} = require('../controllers/users');


usersRouter.get('/allusers', getAllUsers);
usersRouter.get('/email/:email', getUserByEmail);
usersRouter.get('/id/:id', getUserById);
usersRouter.post('/add-new-user', addNewUser);
usersRouter.post('/login', logIn);
usersRouter.delete('/logout', logOut);


module.exports = (usersRouter);