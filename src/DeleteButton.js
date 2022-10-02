import React from "react";

export function DeleteButton({ onDelete }) {
  return (
    <button name="delete" onClick={onDelete}>
      DELETE
    </button>
  );
}
