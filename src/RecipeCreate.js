import React, { useState } from "react";

function RecipeCreate() {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create">
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
