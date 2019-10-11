require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const cors = require('cors')
const session = require('express-session')


app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')
const sessionRouter = require('./routes/session')
app.use('/recipes', recipesRouter)
app.use('/users', usersRouter)
app.use('./session', sessionRouter)



app.listen(port), () => {
    console.log(`Server listening on port ${port}`)
}