import React from "react";

import { RecipeListItem } from "./RecipeListItem";

function RecipeList({ recipes, onDelete }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const recipeListItems = recipes.map((recipe, index) => (
    <RecipeListItem key={index} {...recipe} onDelete={() => onDelete(index)} />
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
