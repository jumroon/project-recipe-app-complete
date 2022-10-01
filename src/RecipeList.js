import React, { useState } from "react";

import { RecipeListItem } from "./RecipeListItem";

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

function RecipeList() {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const [recipes, setRecipes] = useState(RECIPES);

  const recipeListItems = recipes.map((recipe) => (
    <RecipeListItem {...recipe} />
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeListItems}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
