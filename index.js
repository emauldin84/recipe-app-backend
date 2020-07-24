require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const helmet = require('helmet')
// const AWS = require('aws-sdk')

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_KEY_ID,
//     secretAccessKey: AWS_ACCESS_KEY,
// });

// const params = {
//     Bucket: 'cs-recipes-bucket',
//     CreateBucketConfiguration: {
//         // Set your region here
//         // LocationConstraint: "eu-west-1"
//     }
// };

// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('Bucket Created Successfully', data.Location);
// });


app.use(helmet())
const { NODE_ENV } = process.env
const IN_PROD = NODE_ENV === 'production'
app.use(session({
    store: new FileStore({logFn: function(){}}),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1800000 /* half hour */,
        secure: IN_PROD,
        sameSite: true,
    },
    // rolling: true,
}))
// app.use(session( {
//     store: new FileStore(),
//     secret: process.env.SECRET
// }
// ));
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))

const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')
const sessionRouter = require('./routes/session')
app.use('/recipes', recipesRouter)
app.use('/users', usersRouter)
app.use('/session', sessionRouter)



app.listen(port), () => {
    console.log(`Server listening on port ${port}`)
}

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        } 
    })
})