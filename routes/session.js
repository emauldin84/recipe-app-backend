const express = require('express');
const sessionRouter = express.Router();

// const {

// } = require('../controllers/signin');

sessionRouter.get('*', (req, res) => {
    console.log("Checking user's session")
    console.log(req.session)

})

module.exports = sessionRouter;