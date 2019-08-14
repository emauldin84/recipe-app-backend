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

// use req.session.user.id  ?? JWT ??
async function addNewRecipe(req, res) {
    console.log('req.body', req.body)
    let newRecipe = await Recipe.addNewRecipe(req.body.title, req.body.date, req.body.details, req.body.photos, req.body.user_id)
    res.json({newRecipe})
}


module.exports = {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
    addNewRecipe,
}