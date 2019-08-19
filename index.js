require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const cors = require('cors')
// const bodyParser= require('body-parser')
// const multer = require('multer');

const recipesRouter = require('./routes/recipes')

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

// const storage = multer.diskStorage({
//     destination: './public/uploads',
//     filename: function (req, file, cb) {
//         cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: {fileSize: 10000000},
// }).single('recipeImage')



app.use('/recipes', recipesRouter)

// recipesRouter.post('/upload', function(req, res) {
//     upload(req, res, function (err) {
//         console.log('Request ---', req.body)
//         console.log('Request file ---', req.file)
//         if(err)
//         return res.send(200).end()
//     })
// })

app.listen(port), () => {
    console.log(`Server listening on port ${port}`)
}