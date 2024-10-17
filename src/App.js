import React, { useState} from 'react';  
import Header from './components/Header';
import Footer from './components/Footer';
import EditRecipe from './components/EditRecipe';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import './App.css';



function App() {
  const [recipes, setRecipes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Add a new recipe
  const addRecipe = (name, description) => {
    const newRecipe = {
      id: Date.now(),
      name,
      description,
    };
    setRecipes([...recipes, newRecipe]);
  };

  // Delete a recipe by ID
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // When clicking edit, set the editIndex
  const editRecipeClick = (index) => {
    setEditIndex(index);
  };

  // Handle saving the edited recipe
  const handleSaveRecipeEdit = (index, name, description) => {
    const updatedRecipes = recipes.map((recipe, i) => {
      if (i === index) {
        return { id: recipe.id, name, description };
      }
      return recipe;
    });
    
    setRecipes(updatedRecipes);
    setEditIndex(null); // Exit edit mode after saving
  };

  // Handle search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      {/* Full-width search bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />

      {/* Main content: two columns */}
      <div className="main-content">
        {/* Left Column: Add new recipe */}
        <div className="left-column">
          <h2>Add New Recipe</h2> {/* Title for the left column */}
          <div className="add-recipe-container">
            <AddRecipe addRecipe={addRecipe} />
          </div>
        </div>

        {/* Right Column: Display added recipes */}
        <div className="right-column">
          <h2>Recipe List</h2> {/* Title for the right column */}

          {/* Show 'No recipes found' if search result is empty */}
          {filteredRecipes.length === 0 ? (
            <p>No recipes found for "{searchQuery}"</p>
          ) : (
            <RecipeList
              recipes={filteredRecipes}
              deleteRecipe={deleteRecipe}
              editRecipeClick={editRecipeClick}
            />
          )}

           {editIndex !== null && (
            <div className="edit-recipe-box">
              <EditRecipe
                recipe={recipes[editIndex]} // Pass the specific recipe to edit
                handleSaveRecipeEdit={handleSaveRecipeEdit}
                index={editIndex} // Pass the index for updating the correct recipe
                setEditIndex={setEditIndex} // To reset the editing mode
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
