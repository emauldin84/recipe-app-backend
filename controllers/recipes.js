const Recipe = require('../models/recipes')

async function getRecipeById(req, res) {
    const RecipeById = await Recipe.getRecipeById(req.params.id)
    res.json({RecipeById})
}

async function getAllRecipes(req, res) {
    const recipeArray = await Recipe.getAllRecipes();
    res.send(recipeArray)
}


module.exports = {
    getRecipeById,
    getAllRecipes
}