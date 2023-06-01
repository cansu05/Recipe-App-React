import CreateRecipesCard from "./CreateRecipesCard";

const RecipesList = ({ recipes }) => {
  return (
    <div className="container">
      {recipes?.map((recipe, index) => {
        return <CreateRecipesCard key={index} recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
