import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Header from "./companent/Header";
// import RecipesList from "./companent/RecipesList";
import Search from "./companent/Search";


function App() {
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
    <div className="App">
      <Header />
      <Search recipes={recipes}/>
      {/* <RecipesList recipes={recipes} /> */}
    </div>
  );
}

export default App;
