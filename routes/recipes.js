const express = require('express')
const recipesRouter = express.Router()

const {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
    addNewRecipe,
} = require('../controllers/recipes')

recipesRouter.get('/allrecipes', getAllRecipes)
recipesRouter.get('/:id', getRecipeById)
recipesRouter.get('/', getRecipesByUserId)
recipesRouter.post('/add-new-recipe', addNewRecipe)



module.exports = recipesRouter