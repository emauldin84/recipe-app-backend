const Recipe = require('../models/recipes')


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
}

async function editRecipe(req, res) {
    let editedRecipe = await Recipe.editRecipe(req.body.title, req.body.details, req.body.photo, req.params.id)
    res.json({recipe: editedRecipe})
}

async function deleteRecipe(req, res) {
    let deletedRecipe = Recipe.deleteRecipe(req.params.id)
    console.log('deleted recipe: ', deletedRecipe)

    res.json({message: `successfullly deleted recipe id: ${req.params.id}` })
}

module.exports = {
    getRecipeById,
    getAllRecipes,
    getRecipesByUserId,
    addNewRecipe,
    editRecipe,
    deleteRecipe,
}