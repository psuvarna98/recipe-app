// created editRecipe component for edit function
// // src/components/EditRecipe.js
import React, { useState, useEffect } from 'react';


// Move the EditRecipe component outside of App
const EditRecipe = ({ recipe, handleSaveRecipeEdit, index, setEditIndex }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    useEffect(() => {
      if (recipe) {
        setName(recipe.name);
        setDescription(recipe.description);
      }
    }, [recipe]);
  
    const saveRecipe = () => {
      handleSaveRecipeEdit(index, name, description);
      setEditIndex(null); // Reset the editing mode
    };
  
    return (
      <div>
        <h2>Edit Recipe</h2>
        <div className= "recipe-list">
            <div className='recipe-editing'>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe description"
        />
        <button onClick={saveRecipe}>Save</button>
      </div>
        </div>
        </div>
    );
  };

export default EditRecipe;