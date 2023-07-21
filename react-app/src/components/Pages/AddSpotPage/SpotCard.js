import "./AddSpotPage.css";

const SpotCard = ({ name, selected, onClick, imageClassName }) => {
  let nameOfClass;

  if (selected) {
    nameOfClass = selected;
  } else {
    nameOfClass = "spotCard";
  }

  return (
    <div className={nameOfClass} onClick={onClick}>
      <div className="spotNameAndImageContainer">
        <div className="tripTypeTextSpotCard">{name}</div>
        <div className={imageClassName}></div>
      </div>
    </div>
  );
};

export default SpotCard;
