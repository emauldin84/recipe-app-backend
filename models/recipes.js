const db = require('./conn')

class Recipe {
    constructor(id, recipe_title, recipe_added_date, recipe_details, recipe_photos, user_id) {
        this.id = id;
        this.recipe_title = recipe_title;
        this.recipe_added_date = recipe_added_date;
        this.recipe_details = recipe_details;
        this.recipe_photos = recipe_photos;
        this.user_id = user_id;
    }
    
    static getAllRecipes() {
        return db.any(`
        SELECT * from recipes
        `)
    }
    static getRecipeById(recipeId) {
        return db.one(`
        SELECT * from recipes
        WHERE id = ${recipeId};
        `)
        .then(recipe => {
            return( new Recipe(
                recipe.id,
                recipe.recipe_title,
                recipe.recipe_added_date,
                recipe.recipe_details,
                recipe.recipe_photos,
                recipe.user_id,
            ));
        })
        .catch(err => err)
    }
    static getRecipesByUserId(user_Id) {
        return db.any(`
        SELECT * from recipes
        WHERE user_id = ${user_id};`
        )
        .then(recipesData => {
            const recipesArray = recipesData.map(recipe => {
                return (new Recipe(
                    recipe.id,
                    recipe.recipe_title,
                    recipe.recipe_added_date,
                    recipe.recipe_details,
                    recipe.recipe_photos,
                    recipe.user_id,
                ))
            })
            console.log('reipesArray', recipesArray)
            return recipesArray
        })
        .catch(err => err)
    }

}

module.exports = Recipe;