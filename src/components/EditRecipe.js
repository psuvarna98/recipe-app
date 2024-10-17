// created editRecipe component for edit function
// // src/components/EditRecipe.js
import React, { useState } from 'react';


const EditRecipe = ({index, setEditIndex, recipes, setRecipes}) => {
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');

  // Function to save the edited recipe
    const handleSaveRecipeEdit = (index) => {
    const newRecipes = recipes.map((recipe, i) => {
        if (i === index) {
        return { 
                id: recipe.id,
                name: editName.trim(), 
                description: editDescription.trim()}
                ;
            }
        return recipe;
    });
    setRecipes(newRecipes); // update recipes list, with updated recipe info
    setEditIndex(null); // for when exiting editing
};

    // for updating new name
    const handleEditNameChange = (e) => {
    setEditName(e.target.value);
    };
    
    // for updating new description
    const handleEditDescriptionChange = (e) => {
    setEditDescription(e.target.value);
    };

    return (
        <div className='recipe-editing'>
            {/* For editing recipe name */}
        <input
            type="text"
            value = {editName}
            onChange={handleEditNameChange}
            placeholder='Edit Recipe Name'
        />
        {/* For editing recipe description */}
        <textarea
            value = {editDescription}
            onChange={handleEditDescriptionChange}
            placeholder='Edit Recipe Description'                
        />
        {/* indicatory buttons  */}
        <button id="save-button" onClick={() => handleSaveRecipeEdit(index)}>Save</button>
        <button onClick={() => setEditIndex(null)}>Cancel</button>
    </div>
    );

};
    export default EditRecipe;