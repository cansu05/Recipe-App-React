import React, { useEffect, useState } from "react";
import Search from "../Search/Search.js";
import axios from "axios";


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get("http://localhost:3002/recipes");
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  console.log(recipes);
  return (
    <div>
      <Search recipes={recipes} />
      
    </div>
  );
};

export default Home;
