import React from "react";
import { DeleteButton } from "./DeleteButton";

export function RecipeListItem({
  name,
  cuisine,
  image,
  ingredients,
  preparation,
  onDelete,
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
      <td className="content_td">
        <DeleteButton onDelete={onDelete} />
      </td>
    </tr>
  );
}
