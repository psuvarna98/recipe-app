import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import './App.css';

// Functional component called App
function App() {
  // State for recipes and search query
  const [recipes, setRecipes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search

  // Function to add a new recipe
  const addRecipe = (name, description) => {
    const newRecipe = {
      id: Date.now(), // Unique ID based on current time
      name,
      description,
    };
    setRecipes([...recipes, newRecipe]); // Add new recipe to recipes state
  };

  // Function to delete a recipe by ID
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id)); // Remove recipe with matching ID
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

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      {/* Add Search Input */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />

      <AddRecipe addRecipe={addRecipe} />

      {/* Show recipe editing form if editIndex is not null, otherwise show recipe list */}
      {editIndex !== null ? (
        <EditRecipe
          index={editIndex}
          setEditIndex={setEditIndex}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      ) : (
        <RecipeList
          recipes={filteredRecipes} // Use filtered recipes
          deleteRecipe={deleteRecipe}
          editRecipeClick={editRecipeClick} // Passing the edit function
          handleSaveRecipeEdit={handleSaveRecipeEdit} // Passing the save function
          editIndex={editIndex} // Passing the edit index
        />
      )}

      <Footer />
    </div>
  );
}

// Exporting the App component to use it in other parts of the app
export default App;
