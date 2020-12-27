import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients, onClick }) => {
  return (
    <>
      <h5 className="mb-3 text-info text-uppercase">Ingredients</h5>
      <ul className="list-group mb-3">
        {ingredients.map((ingredient) => (
          <li
            className="list-group-item"
            style={{ fontSize: "14px" }}
            key={uuidv4()}
          >
            {ingredient.text}
          </li>
        ))}
      </ul>
      <button className="btn btn-outline-info" onClick={onClick}>
        Back to recipe
      </button>
    </>
  );
};

export default RecipeDetails;
