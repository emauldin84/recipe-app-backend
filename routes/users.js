const express = require('express');
const usersRouter = express.Router();

const {
    getAllUsers,
    addNewUser,
    getUserById,
    getUserByEmail,
} = require('../controllers/users');


usersRouter.get('/allusers', getAllUsers);
usersRouter.get('/email/:email', getUserByEmail);
usersRouter.get('/id/:id', getUserById);
usersRouter.post('/add-new-user', addNewUser);


module.exports = (usersRouter);