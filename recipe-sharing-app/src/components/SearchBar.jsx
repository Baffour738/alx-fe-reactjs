import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const { setSearchTerm, filterRecipes, searchTerm } = useRecipeStore();

  // Whenever searchTerm changes, trigger filtering
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "100%" }}
      />
    </div>
  );
};

export default SearchBar;
