require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const cors = require('cors')
// const bodyParser= require('body-parser')
const multer = require('multer');

const recipesRouter = require('./routes/recipes')

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

// set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public/uploads') 
    },
    filename: function (req, file, cb) {
        console.log('FIIIIILE', file.originalname)
        cb(null, `/public/uploads/IMAGE-${Date.now()}-${file.originalname}`)
    }
})

// Init upload
const upload = multer({
    storage: storage,
})

app.use('/recipes', recipesRouter)

// recipesRouter.post('/upload-image', (req, res) => {
//     console.log('BODY',req.body)
//     upload(req, res, (err) => {
//         console.log('Request ---', req.body)
//         console.log('Request file ---', req.file)
//         if(err) {
//             return res.send(200).end()
//         }
//     })
// })


app.post('/upload-image', upload.single('photo'), function (req, res, next) {
    console.log('REQ.FILE',req.file)
    console.log('REQ.BODY',req.body)
})


app.listen(port), () => {
    console.log(`Server listening on port ${port}`)
}