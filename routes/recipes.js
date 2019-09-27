const express = require('express')
const recipesRouter = express.Router()

const {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
    addNewRecipe,
    editRecipe,
    deleteRecipe,
} = require('../controllers/recipes')

recipesRouter.get('/allrecipes', getAllRecipes)
recipesRouter.get('/:id', getRecipeById)
recipesRouter.get('/', getRecipesByUserId)
recipesRouter.post('/add-new-recipe', addNewRecipe)
recipesRouter.post('/edit/:id', editRecipe)
recipesRouter.delete('/delete-recipe/:id', deleteRecipe)



module.exports = recipesRouter