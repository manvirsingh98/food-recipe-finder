import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "1fd5bad9";
  const APP_KEY = "86d662902551374d79b0a2b4f4d77485";

  //https://developer.edamam.com/
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the input");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    getData();
  };

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 text-uppercase font-weight-bold text-info">
          Food Recipes finder
        </span>
      </nav>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h6 className="text-uppercase font-weight-bold text-info">
              Find your recipe
            </h6>
            <form className="search-form" onSubmit={onSubmit}>
              {alert !== "" && <Alert alert={alert} />}

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="Search your food recipe here"
                  aria-label="Search food"
                  aria-describedby="button-addon2"
                  onChange={onChange}
                  value={query}
                  autoComplete="off"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-info px-4 py-23"
                    type="Submit"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="recipes">
        <div className="container-fluid">
          <div className="row">
            {recipes !== [] &&
              recipes.map((recipe) => (
                <Recipe key={uuidv4()} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
