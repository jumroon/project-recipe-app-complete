import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

const RECIPES = [
  {
    name: "Tuna Poke witd Mango",
    cuisine: "Hawaiian",
    image:
      "https://thewoodenskillet.com/wp-content/uploads/2021/08/salmon-poke-bowl-recipe-10.jpg",
    ingredients: "Put some shit in your poke",
    preparation: "Mix it up yeah",
  },
  {
    name: "Pizza",
    cuisine: "Italian",
    image:
      "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2667,w_4000,x_0,y_0/c_limit,dpr_2,f_auto,fl_lossy,q_80,w_1680/bar-del-corso_Amber-Fouts_MB_1163_aaih9k.jpg",
    ingredients: "Dough, cheese, salami",
    preparation: "Bake it",
  },
];

const PIZZA_RECIPE = {
  name: "Pizza",
  cuisine: "Italian",
  image:
    "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2667,w_4000,x_0,y_0/c_limit,dpr_2,f_auto,fl_lossy,q_80,w_1680/bar-del-corso_Amber-Fouts_MB_1163_aaih9k.jpg",
  ingredients: "Dough, cheese, salami",
  preparation: "Bake it",
};

const POKE_RECIPE = {
  name: "Tuna Poke witd Mango",
  cuisine: "Hawaiian",
  image:
    "https://thewoodenskillet.com/wp-content/uploads/2021/08/salmon-poke-bowl-recipe-10.jpg",
  ingredients: "Put some shit in your poke",
  preparation: "Mix it up yeah",
};

function App() {
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const [recipes, setRecipes] = useState(RECIPES);

  const createRecipe = (newRecipe) => setRecipes([...recipes, newRecipe]);
  const clearRecipes = () => setRecipes([]);
  const deleteRecipeAtIndex = (index) => {
    const recipesCopy = [...recipes];
    recipesCopy.splice(index, 1);
    setRecipes(recipesCopy);
  };

  return (
    <div className="App">
      <button onClick={() => createRecipe(POKE_RECIPE)}>CREATE RECIPE</button>
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
