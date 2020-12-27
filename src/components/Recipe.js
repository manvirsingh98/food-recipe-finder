import React, { useState } from "react";
import { Alarm, People } from "react-bootstrap-icons";

import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const {
    label,
    image,
    url,
    calories,
    totalWeight,
    healthLabels,
    totalTime,
    ingredients,
    totalNutrients,
  } = recipe.recipe;
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
      <div className="card h-100">
        {!show && (
          <>
            <div className="image position-relative">
              <img className="card-img" src={image} alt={label} />
              <div className="card-img-overlay">
                <div className="btn btn-light btn-sm mr-1">
                  {totalNutrients.FAT.label +
                    ": " +
                    Math.round(totalNutrients.FAT.quantity) +
                    totalNutrients.FAT.unit}
                </div>
                <div className="btn btn-light btn-sm mr-1">
                  {totalNutrients.PROCNT.label +
                    ": " +
                    Math.round(totalNutrients.PROCNT.quantity) +
                    totalNutrients.PROCNT.unit}
                </div>
                <div className="btn btn-light btn-sm mr-1">
                  {totalNutrients.CHOCDF.label +
                    ": " +
                    Math.round(totalNutrients.CHOCDF.quantity) +
                    totalNutrients.CHOCDF.unit}
                </div>
              </div>
            </div>

            <div className="card-body">
              <h4 className="card-title">{label}</h4>
              <p className="my-3">
                <small className="text-muted">
                  <Alarm className="text-info ml-2 mr-1" />{" "}
                  {totalTime + " minutes"}
                  {/* <People className="text-info ml-2 mr-1" />
                  {} */}
                </small>
              </p>
              <div className="card-text my-3">
                {healthLabels.map((healthLabel) => (
                  <div key={healthLabel} className="btn btn-light btn-sm m-1">
                    {healthLabel}
                  </div>
                ))}
              </div>
              <a href={url} className="btn btn-info mr-2">
                Read Recipe
              </a>
              <button
                className="btn btn-outline-info"
                onClick={() => setShow(!show)}
              >
                Ingredients
              </button>
            </div>
          </>
        )}
        {show && (
          <div className="card-body">
            <RecipeDetails
              ingredients={ingredients}
              onClick={() => setShow(!show)}
            />
          </div>
        )}
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">{"Calories: " + Math.round(calories)}</div>
          <div className="stats">{"Weight: " + Math.round(totalWeight)}</div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
