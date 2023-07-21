import outdoorUrl from "../../../images/outdoor-things-to-do-outside-daytrips-from-houston-2020-enchanted-rock-696x407.jpeg";
import uniqueExperience from "../../../images/theoneSkydiving.jpeg";
import houseUrlImage from "../../../images/houseImage.jpeg";
import apartmentUrlImage from "../../../images/logan_apartments.6.jpg";
import { useHistory } from "react-router-dom";
///Users/stevecorrea/Desktop/JS_Problem_Sets_and_materials/App-Academy/Mod7/Take-A-Daytrip/react-app/src/images/logan_apartments.6.jpg

const CategoryCard = ({
  label,
  backgroundColor,
  milesAway,
  picture,
  rightCard,
  firstCard,
  secondCard,
  thirdCard,
  historyUrl,
}) => {
  ///Users/stevecorrea/Desktop/JS_Problem_Sets_and_materials/App-Academy/Mod7/Take-A-Daytrip/react-app/src/images/outdoor-things-to-do-outside-daytrips-from-houston-2020-enchanted-rock-696x407.jpeg

  const history = useHistory();
  let cardClassName;
  let imageUrl;

  if (rightCard) {
    cardClassName = "rightCategoryCard";
  } else if (firstCard) {
    cardClassName = "firstCategoryCard";
  } else if (secondCard) {
    cardClassName = "secondCategoryCard";
  } else if (thirdCard) {
    cardClassName = "thirdCategoryCard";
  }

  if (picture === "outdoor") {
    imageUrl = outdoorUrl;
  } else if (picture === "unique experience") {
    imageUrl = uniqueExperience;
  } else if (picture === "house") {
    imageUrl = houseUrlImage;
  } else if (picture === "apartment") {
    imageUrl = apartmentUrlImage;
  }

  return (
    <div className={cardClassName} onClick={() => history.push(historyUrl)}>
      <div
        style={{
          width: "100%",
          height: "50%",
          backgroundImage: `url(${imageUrl})`,
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="cardTitleLandingPage">
        {firstCard && "Outdoors"}
        {secondCard && "Houses"}
        {thirdCard && "Apartments"}
        {rightCard && "Unique"}
      </div>
    </div>
  );
};

export default CategoryCard;
