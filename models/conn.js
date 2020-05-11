require('dotenv').config();

const pgp = require('pg-promise')({
    query: e => {
        console.log('Query: ', e.query)
    }
})


const options = {
    // Locally hosted
    host: 'localhost',
    database: 'recipe-app',

    // AWS DB
    // host: process.env.AWS_DB_HOST,
    // database: process.env.DB_NAME,
    // user: process.env.AWS_USERNAME, 
    // password: process.env.AWS_PASSWORD, 
}

const db = pgp(options)

module.exports = db