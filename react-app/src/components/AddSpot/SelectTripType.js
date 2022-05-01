import "./AddSpot.css";
import SpotCard from "./SpotCard";

const SelectTripType = ({
  firstSlide,
  secondSlide,
  thirdSlide,
  selected,
  setSelected,
  setfirstSlide,
  setSecondSlide,
}) => {
  return (
    <>
      <div className="leftHalf">
        <div className="whatKindOfText">What kind of trip are you hosting?</div>
      </div>
      <div className="rightHalf">
        <div className="spotCardCategorySelectionDiv">
          <div className="progressBarSlide1">
            <div className={firstSlide ? "blackSlide" : "graySlide"}></div>
            <div className={secondSlide ? "blackSlide" : "graySlide"}></div>
            <div className={thirdSlide ? "blackSlide" : "graySlide"}> </div>
          </div>
          <SpotCard
            imageClassName={"apartmentImage"}
            name={"Apartment"}
            selected={selected === "Apartment" ? "selected" : null}
            onClick={() => setSelected("Apartment")}
          />
          <SpotCard
            imageClassName={"houseImage"}
            name={"House"}
            selected={selected === "House" ? "selected" : null}
            onClick={() => setSelected("House")}
          />
          <SpotCard
            imageClassName={"outdoorsImage"}
            name={"Outdoors"}
            selected={selected === "Outdoor" ? "selected" : null}
            onClick={() => setSelected("Outdoor")}
          />
          <SpotCard
            imageClassName={"uniqueExperience"}
            name={"Unique Experience"}
            selected={selected === "Unique Experience" ? "selected" : null}
            onClick={() => setSelected("Unique Experience")}
          />
        </div>
        <div
          className="nextButton"
          onClick={() => {
            setfirstSlide(false);
            setSecondSlide(true);
          }}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default SelectTripType;
