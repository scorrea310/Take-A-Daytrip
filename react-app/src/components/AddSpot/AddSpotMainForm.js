import { useSelector, useDispatch } from "react-redux";
import { addSpot } from "../../store/spotReducer";
import { useHistory } from "react-router-dom";
import { verify, AddressForm } from "@lob/react-address-autocomplete";
import { useState } from "react";

//Coverts image object to usable url
const toObjectURL = (file) => {
  if (file === null || file === undefined) {
    return;
  }
  return URL.createObjectURL(file);
};

// Custom styles for AddressForm Lob component
const customStyles = {
  lob_row: (provided) => ({
    ...provided,
    flexDirection: "column",
    alignItems: "flex-start",
  }),
  lob_label: (provided) => ({
    alignSelf: "start",
    minWidth: "5em",
    marginRight: "1em",
    textAlign: "start",
  }),
};

const AddSpotMainForm = ({
  images,
  firstSlide,
  secondSlide,
  thirdSlide,
  setAddSpotLoader,
  selected,
}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  //component states
  const [selectedAddress, setSelectedAddress] = useState({});
  const [verificationResult, setVerificationResult] = useState(null);
  const [petsAllowed, setpetsAllowed] = useState("true");
  const [totalOccupancy, setTotalOccupancy] = useState(1);
  const [totalBedrooms, setTotalBedrooms] = useState(0);
  const [totalBathrooms, setTotalBathrooms] = useState(0);
  const [description, setDescription] = useState("");
  const [hasWifi, setHasWifi] = useState("true");
  const [hasTv, setHasTv] = useState("true");
  const [hasAc, setHasAc] = useState("true");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  //Verify address via Lob API
  const verifyAddress = (e) => {
    verify("API_KEY", selectedAddress)
      .then((result) => {
        // Simplify response into something readable to the user
        console.log(result);
        const summary = `This address is ${result.deliverability}`;
        setVerificationResult(summary);
      })
      .catch((errorData) => setVerificationResult(errorData.message));
  };

  //Submits new listing
  const onSubmit = async (e) => {
    e.preventDefault();

    setAddSpotLoader(true);

    const imageData = new FormData();
    if (images && images.length) {
      images.forEach((image) => imageData.append("images", image));
    }

    let formObj = {
      address,
      petsAllowed,
      totalOccupancy,
      totalBedrooms,
      totalBathrooms,
      description,
      hasWifi,
      hasTv,
      hasAc,
      price,
      userId: sessionUser.id,
      type: selected,
      name,
    };

    dispatch(addSpot(formObj, imageData)).then((data) => {
      history.push(`/spots/${data.id}`);
    });
  };

  return (
    <>
      <div className="spotToAddImageContainer">
        <img
          src={images.length > 0 ? toObjectURL(images[0]) : null}
          style={{ width: "80%", height: "80%", borderRadius: "24px" }}
          alt="backgroundImage"
        />
      </div>

      <div className="rightHalf">
        <div className="formAndNextButtonContainer">
          <form onSubmit={onSubmit} className="addSpotTextFormSlide3">
            <div className="progressBarSlide3">
              <div className={firstSlide ? "blackSlide" : "graySlide"}></div>
              <div className={secondSlide ? "blackSlide" : "graySlide"}></div>
              <div className={thirdSlide ? "blackSlide" : "graySlide"}> </div>
            </div>
            <div className="tellUsAboutDaytripContainer">
              <h3>Tell us about your listing</h3>
              <div className="submitSpotButtonContainer">
                <button className="submitSpotButton" type="submit">
                  {" "}
                  Submit Listing{" "}
                </button>
              </div>
            </div>
            <label>Name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required={true}
            ></input>
            <AddressForm
              styles={customStyles}
              apiKey="API_KEY"
              onSelection={(selected) => {
                console.log(selected.value);
                setSelectedAddress(selected.value);
              }}
              onInputChange={(e) => {
                setSelectedAddress({ ...selectedAddress, primary_line: e });
                console.log(e);
                console.log(selectedAddress);
              }}
              onFieldChange={(e) => {
                console.log(e.target.id);

                let objName = e.target.id;

                setSelectedAddress({
                  ...selectedAddress,
                  objName: e.target.value,
                });
              }}
            />
            <div>
              <div onClick={verifyAddress}>Verify</div>
            </div>
            <p>{verificationResult}</p>
            <label>Pets Allowed</label>
            <div className="pertsAllowedDivForm">
              <input
                value={"true"}
                type="checkbox"
                onChange={() => {
                  setpetsAllowed("true");
                }}
                id="Yes"
                checked={petsAllowed === "true"}
              ></input>
              <label htmlFor="Yes"> Yes</label>
              <input
                value={"false"}
                type="checkbox"
                onChange={() => setpetsAllowed("false")}
                id="No"
                checked={petsAllowed === "false"}
              ></input>
              <label htmlFor="No"> No</label>
            </div>
            <label>Has Wifi?</label>
            <div className="pertsAllowedDivForm">
              <input
                value={"true"}
                type="checkbox"
                onChange={() => {
                  setHasWifi("true");
                }}
                id="Yes"
                checked={hasWifi === "true"}
              ></input>
              <label htmlFor="Yes"> Yes</label>
              <input
                value={"false"}
                type="checkbox"
                onChange={() => setHasWifi("false")}
                id="No"
                checked={hasWifi === "false"}
              ></input>
              <label htmlFor="No"> No</label>
            </div>
            <label>Has Tv?</label>
            <div className="pertsAllowedDivForm">
              <input
                value={"true"}
                type="checkbox"
                onChange={() => {
                  setHasTv("true");
                }}
                id="Yes"
                checked={hasTv === "true"}
              ></input>
              <label htmlFor="Yes"> Yes</label>
              <input
                value={"false"}
                type="checkbox"
                onChange={() => setHasTv("false")}
                id="No"
                checked={hasTv === "false"}
              ></input>
              <label htmlFor="No"> No</label>
            </div>
            <label>Has AC?</label>
            <div className="hasAcContainer">
              <input
                value={"true"}
                type="checkbox"
                onChange={() => {
                  setHasAc("true");
                }}
                id="Yes"
                checked={hasAc === "true"}
              ></input>
              <label htmlFor="Yes"> Yes</label>
              <input
                value={"false"}
                type="checkbox"
                onChange={() => setHasAc("false")}
                id="No"
                checked={hasAc === "false"}
              ></input>
              <label htmlFor="No"> No</label>
            </div>
            <label>Total Occupancy</label>
            <input
              value={totalOccupancy}
              type="number"
              onChange={(e) => setTotalOccupancy(e.target.value)}
              required={true}
              min="1"
            ></input>
            <label>Total Bedrooms</label>
            <input
              value={totalBedrooms}
              type="number"
              onChange={(e) => setTotalBedrooms(e.target.value)}
              required={true}
              min="0"
            ></input>
            <label>Total Bathrooms</label>
            <input
              value={totalBathrooms}
              type="number"
              onChange={(e) => setTotalBathrooms(e.target.value)}
              required={true}
              min="0"
            ></input>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="addSpotTextArea"
              required={true}
            ></textarea>
            <label>Price</label>
            <input
              type="number"
              id="priceInputAddSpotFomr"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required={true}
              min="0"
              step="any"
              max="9999.99"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSpotMainForm;
