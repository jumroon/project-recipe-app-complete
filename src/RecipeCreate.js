import React, { useState } from "react";

const INITIAL_STATE = {
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

  const [recipe, setRecipe] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };

  const resetForm = () => setRecipe(INITIAL_STATE);

  return (
    <form
      name="create"
      onSubmit={(event) => {
        event.preventDefault();
        createRecipe(INITIAL_STATE);
      }}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" onChange={handleChange} />
            </td>
            <td>
              <input
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="photo"
                value={recipe.image}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
              <button onClick={resetForm} type="button">
                RESET
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
