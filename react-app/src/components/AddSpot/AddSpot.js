import NavBar from "../NavBar/NavBar";
import "./AddSpot.css";
import { useState, useEffect } from "react";
import SelectTripType from "./SelectTripType";
import AddSpotImages from "./AddSpotImages";
import AddSpotMainForm from "./AddSpotMainForm";

const AddSpot = () => {
  const [selected, setSelected] = useState("Apartment");
  const [firstSlide, setfirstSlide] = useState(true);
  const [secondSlide, setSecondSlide] = useState(false);
  const [thirdSlide, setThirdSlide] = useState(false);
  const [noImagesError, setnoImagesError] = useState([]);
  const [images, setImages] = useState([]);
  const [addSpotLoader, setAddSpotLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="addSpotPageContainer">
      <NavBar addspotPage={true} />
      <div className="addSpotMainContent">
        {firstSlide ? (
          <SelectTripType
            firstSlide={firstSlide}
            secondSlide={secondSlide}
            thirdSlide={thirdSlide}
            selected={selected}
            setSelected={setSelected}
            setfirstSlide={setfirstSlide}
            setSecondSlide={setSecondSlide}
          />
        ) : null}
        {secondSlide && (
          <AddSpotImages
            firstSlide={firstSlide}
            secondSlide={secondSlide}
            thirdSlide={thirdSlide}
            images={images}
            setImages={setImages}
            noImagesError={noImagesError}
            setnoImagesError={setnoImagesError}
            setfirstSlide={setfirstSlide}
            setSecondSlide={setSecondSlide}
            setThirdSlide={setThirdSlide}
          />
        )}
        {thirdSlide && (
          <AddSpotMainForm
            images={images}
            firstSlide={firstSlide}
            secondSlide={secondSlide}
            thirdSlide={thirdSlide}
            setAddSpotLoader={setAddSpotLoader}
            selected={selected}
          />
        )}
      </div>
      {addSpotLoader ? (
        <div className="addSpotLoaderBackground">
          <div className="lds-dual-ring"></div>
        </div>
      ) : null}
    </div>
  );
};

export default AddSpot;
