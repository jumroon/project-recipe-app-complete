import React from "react";

export function RecipeListItem({
  name,
  cuisine,
  image,
  ingredients,
  preparation,
}) {
  return (
    <tr>
      <td className="content_td">{name}</td>
      <td className="content_td">{cuisine}</td>
      <td className="content_td">
        <img src={image} />
      </td>
      <td className="content_td">{ingredients}</td>
      <td className="content_td">{preparation}</td>
      <td className="content_td">DELETE BUTTON GOES HERE</td>
    </tr>
  );
}
