import React from 'react';

const RecipeItem = ({
    recipe,
    deleteRecipe,
    editRecipeClick,
    index,
}) =>{
    return(
        <div className="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button onClick ={() => deleteRecipe(recipe.id)}>Delete</button>
            <button onClick ={() => editRecipeClick(index)}>Edit</button>
        </div>
    );
};

export default RecipeItem;