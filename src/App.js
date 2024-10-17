// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import './App.css';

// Functional component called App
function App() {
  // State for recipes
  const [recipes, setRecipes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Function to add a new recipe
  const addRecipe = (name, description) => {
    const newRecipe = {
      id: Date.now(), // Unique ID based on current time
      name,
      description
    };
    setRecipes([...recipes, newRecipe]); // Add new recipe to recipes state
  };

  // Function to delete a recipe by ID
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id)); // Remove recipe with matching ID
  };

// Function editing a recipe by index, changing the name and description
const editRecipeClick = (index) => {
  setEditIndex(index);

};

const handleSaveRecipeEdit = (index, name, description) => {
  const newRecipes = recipes.map((recipe, i) => {
    if (i === index) {
      return { id: recipe.id, name, description };
    }
    return recipe;
  });
  setRecipes(newRecipes);
  setEditIndex(null); // Reset edit index
};


  return (
    <div className="App">
      <Header /> 
      <AddRecipe addRecipe={addRecipe} /> 

 {/* //shows recipe editing form if editIndex is not null,  otherwise not shown. */}
      {editIndex !== null ?( 
      <EditRecipe 
        index={editIndex}
        setEditIndex={setEditIndex}
        recipes={recipes}
        setRecipes={setRecipes}/>

      ):(

      <RecipeList 
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        editRecipeClick={editRecipeClick}  //passing the edit function
        handleSaveRecipeEdit={handleSaveRecipeEdit} // passing the save function
        editIndex={editIndex} // passing the edit index
      /> 
      )}
        {/* passing footer because it is not used  */}
      <Footer />  

    </div>
  );
}

// Exporting the App component to use it in other parts of the app
export default App;
