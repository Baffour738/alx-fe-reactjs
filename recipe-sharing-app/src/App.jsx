import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
    <div className="p-6">
      <nav className="mb-4">
        <Link to="/" className="text-blue-600">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
