import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ 
        recipes, 
        deleteRecipe, 
        editRecipeClick, 
        handleSaveRecipeEdit,
        editIndex
        }) =>{
    return(
        <div className= "recipe-list">
            {recipes.map((recipe, index)=>(
                <RecipeItem
                key={recipe.id}
                recipe={recipe}
                deleteRecipe={deleteRecipe}
                editRecipeClick={editRecipeClick}
                index={index}
                handleSaveRecipeEdit={handleSaveRecipeEdit}
                editIndex={editIndex}
                />
            ))}

        </div>
    );
};

export default RecipeList;