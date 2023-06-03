import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Header from "./companent/Header/Header";
import Search from "./companent/Search/Search.js";


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
    </div>
  );
}

export default App;
