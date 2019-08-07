const express = require('express')
const recipesRouter = express.Router()

const {
    getRecipeById,
    getAllRecipes,
} = require('../controllers/recipes')

recipesRouter.get('/:id', getRecipeById)
recipesRouter.get('/allrecipes', getAllRecipes)



module.exports = recipesRouter