import SpotImageForm from "../../SpotImageForm/SpotImageForm";

const AddSpotImages = ({
  firstSlide,
  secondSlide,
  thirdSlide,
  images,
  setImages,
  noImagesError,
  setnoImagesError,
  setfirstSlide,
  setSecondSlide,
  setThirdSlide,
}) => {
  return (
    <>
      <div className="leftHalf">
        <div className="whatKindOfText">What does your spot look like?</div>
      </div>
      <div className="rightHalf">
        <SpotImageForm
          firstSlide={firstSlide}
          secondSlide={secondSlide}
          thirdSlide={thirdSlide}
          images={images}
          setImages={setImages}
          noImagesError={noImagesError}
        />

        <div
          className="nextButton"
          onClick={() => {
            if (images.length < 2) {
              setnoImagesError(["You have to include at least two images"]);
            } else {
              setfirstSlide(false);
              setSecondSlide(false);
              setThirdSlide(true);
            }
          }}
        >
          Next{" "}
        </div>
      </div>
    </>
  );
};

export default AddSpotImages;
