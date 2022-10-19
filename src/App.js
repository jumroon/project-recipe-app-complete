import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

const POKE_RECIPE = {
  name: "Tuna Poke witd Mango",
  cuisine: "Hawaiian",
  photo:
    "https://thewoodenskillet.com/wp-content/uploads/2021/08/salmon-poke-bowl-recipe-10.jpg",
  ingredients: "PUT THINGS INSIDE",
  preparation: "Mix it up yeah",
};

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => setRecipes([...recipes, newRecipe]);
  const clearRecipes = () => setRecipes([]);
  const deleteRecipeAtIndex = (index) => {
    console.log(index);
    const recipesCopy = [...recipes];
    recipesCopy.splice(index, 1);
    setRecipes(recipesCopy);
  };

  return (
    <div className="App">
      <button onClick={() => createRecipe(POKE_RECIPE)}>
        CREATE PLACEHOLDER RECIPE
      </button>
      <button onClick={clearRecipes}>CLEAR RECIPES</button>
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        recipes={recipes}
        onDelete={(index) => deleteRecipeAtIndex(index)}
      />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
