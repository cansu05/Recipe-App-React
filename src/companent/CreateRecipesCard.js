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
        {/* card item başlangıç */}
        <div className="card-item">
          <img className="img" src={recipe.img} alt="" />
          <h2>{recipe.foodName}</h2>

          <div className="button">
            <button onClick={recipeShow} className="button-recipe">
              <RxDoubleArrowDown />
             
            </button>
          </div>
        </div>
        {/* card item bitiş */}
        {/* card recipe başlangıç */}
        {isShow ? (
          <div className="card-recipe recipes__list">
            <div className="recipe-icon">
              <div className="recipe-serving-icon">
                <ImSpoonKnife />
                <h5>{recipe.serving}Kişilik</h5>
              </div>
              <div className="recipe-time-icon">
                <BsClock />
                <h5>
                  Pişme Süresi <br />
                  {recipe.time}dk
                </h5>
              </div>
            </div>
            <div className="recipe">
              <h3 className="ingredients-title">
                {recipe.foodName} Tarifi İçin Malzemeler
              </h3>
              <ul></ul>

              <h3 className="making-title">
                {recipe.foodName} Tarifi Nasıl Yapılır?
              </h3>
              <ol id="making"></ol>
            </div>
          </div>) : <></>
        }
        {/* card recipe bitiş */}
      </div>
    </div>
  );
};

export default CreateRecipesCard;
