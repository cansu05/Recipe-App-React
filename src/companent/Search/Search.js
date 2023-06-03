import { useState } from "react";
import CreateRecipesCard from "../RecipesCard/CreateRecipesCard.js";
import "../RecipesCard/CreateRecipesCard.css";
import "../Search/Search.css";
import { BsSearchHeart } from "react-icons/bs";

const Search = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    if (searchTerm === "") {
      return true; 
    } else {
      return recipe.foodName.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setTimeout(() => {
      setSearchTerm(value);
    }, 100);
  };

  return (
    <div className="form-wrapper">
      <form className="form">
        <div>
          <input
            className="form-input"
            value={searchTerm}
            onChange={handleChange}
            placeholder="What Are You Looking For?"
          />
          <BsSearchHeart className="search-icon" />
        </div>
      </form>
      <div className="container">
        {/* Render the filtered recipes */}
        {filteredRecipes.map((recipe, index) => (
          <CreateRecipesCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Search;
