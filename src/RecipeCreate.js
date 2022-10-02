import React, { useState } from "react";

const INITIAL_STATE = {
  name: "",
  cuisine: "",
  image: "",
  ingredients: "",
  preparation: "",
};

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [recipe, setRecipe] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    console.log(target.name, target.value);
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
        createRecipe(recipe);
      }}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                value={recipe.name}
                onChange={handleChange}
                placeholder="name"
              />
            </td>
            <td>
              <input
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                placeholder="cuisine"
              />
            </td>
            <td>
              <input
                name="image"
                value={recipe.image}
                onChange={handleChange}
                placeholder="url"
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                placeholder="ingredients"
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                placeholder="preparation"
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
