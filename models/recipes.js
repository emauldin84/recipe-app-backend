const db = require('./conn')

class Recipe {
    constructor(id, recipe_title, recipe_added_date, recipe_details, recipe_photo, user_id) {
        this.id = id;
        this.recipe_title = recipe_title;
        this.recipe_added_date = recipe_added_date;
        this.recipe_details = recipe_details;
        this.recipe_photo = recipe_photo;
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
                recipe.recipe_photo,
                recipe.user_id,
            ));
        })
        .catch(err => err)
    }
    static getRecipesByUserId(user_id) {
        return db.any(`
        SELECT * from recipes
        WHERE user_id = ${user_id};
        `)
        .then(recipesData => {
            const recipesArray = recipesData.map(recipe => {
                return (new Recipe(
                    recipe.id,
                    recipe.recipe_title,
                    recipe.recipe_added_date,
                    recipe.recipe_details,
                    recipe.recipe_photo,
                    recipe.user_id,
                ))
            })
            console.log('recipesArray', recipesArray)
            return recipesArray
        })
        .catch(err => err)
    }

    // Should create separate model to add photos?
    static addNewRecipe(recipe_title, recipe_added_date, recipe_details, recipe_photo, user_id) {
        console.log(`adding recipe ${recipe_title}`)
        return db.one(`
        INSERT INTO recipes (recipe_title, recipe_added_date, recipe_details, recipe_photo, user_id)
        VALUES ($1, $2, $3, $4, $5) returning *`, [recipe_title, recipe_added_date, recipe_details, recipe_photo, user_id]
        )
    }

    static editRecipe(recipe_title, recipe_details, recipe_photo, recipe_id) {
        console.log('recipe_id', recipe_id)
        return db.result(`
        UPDATE recipes
        SET recipe_title = $1, recipe_details = $2, recipe_photo = $3
        WHERE id = $4`, [recipe_title, recipe_details, recipe_photo, recipe_id]);
    }

    static deleteRecipe(recipeId) {
        return db.result(`
        DELETE from recipes
        where id = ${recipeId};
        `)
    }
}

module.exports = Recipe;