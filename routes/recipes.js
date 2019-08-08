const express = require('express')
const recipesRouter = express.Router()

const {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
} = require('../controllers/recipes')

recipesRouter.get('/allrecipes', getAllRecipes)
recipesRouter.get('/:id', getRecipeById)
recipesRouter.get('/', getRecipesByUserId)



module.exports = recipesRouter