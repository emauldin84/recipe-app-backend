const express = require('express')
const recipesRouter = express.Router()

const {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
    addNewRecipe,
    // uploadImage,
} = require('../controllers/recipes')

recipesRouter.get('/allrecipes', getAllRecipes)
recipesRouter.get('/:id', getRecipeById)
recipesRouter.get('/', getRecipesByUserId)
recipesRouter.post('/add-new-recipe', addNewRecipe)
// recipesRouter.post('/upload-image', uploadImage)



module.exports = recipesRouter