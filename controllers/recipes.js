const Recipe = require('../models/recipes')

async function getRecipeById(req, res) {
    const RecipeById = await Recipe.getRecipeById(req.params.id)
    res.json({RecipeById})
}

async function getAllRecipes(req, res) {
    const recipeArray = await Recipe.getAllRecipes();
    res.send(recipeArray)
}

async function getRecipesByUserId(req, req) {
    const recipesArray = await Recipe.getRecipesByUserId('req.session.user.id  ?? JWT ??')
    res.json(recipesArray)
}


module.exports = {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId
}