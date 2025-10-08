import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm, filterRecipes } = useRecipeStore();

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayedRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {displayedRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
