import React from "react";
import { DeleteButton } from "./DeleteButton";

export function RecipeListItem({
  name,
  cuisine,
  photo,
  ingredients,
  preparation,
  onDelete,
}) {
  return (
    <tr>
      <td className="content_td">{name}</td>
      <td className="content_td">{cuisine}</td>
      <td className="content_td">
        <img src={photo} alt="couldn't render" />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td className="content_td">
        <DeleteButton onDelete={onDelete} />
      </td>
    </tr>
  );
}
