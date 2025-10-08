import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
      </button>

      <EditRecipeForm recipeId={recipe.id} />
      <DeleteRecipeButton id={recipe.id} />
      <button onClick={() => navigate("/")}>Back to List</button>
    </div>
  );
};

export default RecipeDetails;
