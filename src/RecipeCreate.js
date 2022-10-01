import React, { useState } from "react";

const PIZZA_RECIPE = {
  name: "Pizza",
  cuisine: "Italian",
  image:
    "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2667,w_4000,x_0,y_0/c_limit,dpr_2,f_auto,fl_lossy,q_80,w_1680/bar-del-corso_Amber-Fouts_MB_1163_aaih9k.jpg",
  ingredients: "Dough, cheese, salami",
  preparation: "Bake it",
};

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form
      name="create"
      onSubmit={(event) => {
        event.preventDefault();
        createRecipe(PIZZA_RECIPE);
      }}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" />
            </td>
            <td>
              <input name="cuisine" />
            </td>
            <td>
              <input name="photo" />
            </td>
            <td>
              <textarea name="ingredients" />
            </td>
            <td>
              <textarea name="preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
