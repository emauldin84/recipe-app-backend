const Recipe = require('../models/recipes')

// const multer = require('multer');

// // set storage engine
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/uploads/') 
//     },
//     filename: function (req, file, cb) {
//         console.log('FIIIIILE', file.originalname)
//         cb(null, `IMAGE-${Date.now()}-${file.originalname}`)
//     }
// })

// // Init upload
// const upload = multer({
//     storage: storage,
//     limits: {fileSize: 10000000},
// }).single('photo')

// ====================

async function getRecipeById(req, res) {
    const RecipeById = await Recipe.getRecipeById(req.params.id)
    res.json({RecipeById})
}

async function getAllRecipes(req, res) {
    const recipeArray = await Recipe.getAllRecipes();
    res.send(recipeArray)
}

// use req.session.user.id  ?? JWT ??
async function getRecipesByUserId(req, req) {
    const recipesArray = await Recipe.getRecipesByUserId('req.session.user.id  ?? JWT ??')
    res.json(recipesArray)
}

// use req.session.user.id  ?? JWT ??
async function addNewRecipe(req, res) {
    console.log('req.body', req.body)
    let newRecipe = await Recipe.addNewRecipe(req.body.title, req.body.date, req.body.details, req.body.photo, req.body.user_id)
    res.json({newRecipe})

    // upload(req, res, function(err) {
    //     console.log('UPLOADING HERE...')
    //     console.log('Request ---', req.body)
    //     console.log('Request file ---', req.file)
    //     if(err) {
    //         return err
    //     }
    // })
}

async function editRecipe(req, res) {
    let editedRecipe = await Recipe.editRecipe(req.body.title, req.body.details, req.body.photo, req.params.id)
    res.json({recipe: editedRecipe})
}

module.exports = {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
    addNewRecipe,
    editRecipe
}