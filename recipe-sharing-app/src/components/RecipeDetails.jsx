import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{recipe.title}</h1>
      <p className="mt-2">{recipe.description}</p>

      <div className="mt-4">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
