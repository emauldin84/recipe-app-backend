const express = require('express');
const sessionRouter = express.Router();

const {
    sessionCheck,
} = require('../controllers/users');

sessionRouter.get('*', (req, res) => {
    console.log("Checking user's session")
    console.log(req.session)
    sessionCheck(req, res)

})

module.exports = sessionRouter;