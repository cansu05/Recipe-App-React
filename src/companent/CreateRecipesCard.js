import { RxDoubleArrowDown } from "react-icons/rx";
import { BsClock } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import "./CreateRecipesCard.css";
import { useState } from "react";
const CreateRecipesCard = ({ recipe }) => {
  const [isShow, setIsShow] = useState(false);

  const recipeShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div recipe={recipe}>
      <div className="card">
        {isShow ? (
          <div className="card-recipe">
            <div className="recipe-icon">
              <div className="recipe-serving-icon">
                <ImSpoonKnife className="icon" />
                <h5>{recipe.serving} Kişilik</h5>
              </div>
              <div className="recipe-time-icon">
                <BsClock className="icon" />
                <h5>
                  Pişme Süresi <br />
                  {recipe.time} dk
                </h5>
              </div>
            </div>
            <div className="recipe">
              <h3 className="ingredients-title">
                {recipe.foodName} Tarifi İçin Malzemeler
              </h3>
              <ul className="ingredient">
                {recipe.ingredients?.map((ingredient, index) => {
                  return <li>{ingredient}</li>;
                })}
              </ul>

              <h3 className="making-title">
                {recipe.foodName} Tarifi Nasıl Yapılır?
              </h3>
              <ol className="making">
                {recipe.making?.map((make, index) => {
                  return <li>{make}</li>;
                })}
              </ol>
            </div>
            <div>
              <button onClick={recipeShow} className="isShow-button-recipe">
                <RxDoubleArrowDown />
              </button>
            </div>
          </div>
        ) : (
          <div className="card-item">
            <img className="img" src={recipe.img} alt="" />
            <h2>{recipe.foodName}</h2>

            <div className="button">
              <button onClick={recipeShow} className="button-recipe">
                <RxDoubleArrowDown />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateRecipesCard;
