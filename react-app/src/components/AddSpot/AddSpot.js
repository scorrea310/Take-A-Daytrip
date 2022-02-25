import NavBar from "../NavBar/NavBar";
import "./AddSpot.css"
import SpotCard from "./SpotCard";
import { useState } from "react";
import SpotImageForm from "../SpotImageForm/SpotImageForm";
import gradientBackground from "../../images/Wiretap.jpeg"
import { useHistory } from "react-router-dom";
import { addSpot } from "../../store/spotReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddSpot = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory()
    const [selected, setSelected] = useState("Apartment")
    const [firstSlide, setfirstSlide] = useState(true)
    const [secondSlide, setSecondSlide] = useState(false)
    const [thirdSlide, setThirdSlide] = useState(false)
    const [noImagesError, setnoImagesError] = useState([])
    const [images, setImages] = useState([]);
    const [address, setAddress] = useState('')
    const [petsAllowed, setpetsAllowed] = useState("true")
    const [totalOccupancy, setTotalOccupancy] = useState(1)
    const [totalBedrooms, setTotalBedrooms] = useState(0)
    const [totalBathrooms, setTotalBathrooms] = useState(0)
    const [description, setDescription] = useState('')
    const [hasWifi, setHasWifi] = useState("true")
    const [hasTv, setHasTv] = useState("true")
    const [hasAc, setHasAc] = useState("true")
    const [price, setPrice] = useState('')
    const [addSpotLoader, setAddSpotLoader] = useState(false)
    const [name, setName] = useState('')



    const toObjectURL = (file) => URL.createObjectURL(file);


    const onSubmit = async (e) => {

        e.preventDefault();

        setAddSpotLoader(true)

        const imageData = new FormData();
        if (images && images.length) {
            images.forEach((image) => imageData.append('images', image));
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
            name

        }

        let newSpot = dispatch(addSpot(formObj, imageData)).then((data) => {
            history.push(`/spots/${data.id}`)
        })
    }

    const setAddressFunction = (e) => {
        setAddress(e.target.value);
    }


    let slide1 = (
        <>
            <div className="leftHalf">
                <div className="whatKindOfText">What kind of Daytrip are you hosting?</div>
            </div>
            <div className="rightHalf">

                <div>
                    <div className="progressBarSlide1">
                        <div className={firstSlide ? "blackSlide" : "graySlide"}></div>
                        <div className={secondSlide ? "blackSlide" : "graySlide"}></div>
                        <div className={thirdSlide ? "blackSlide" : "graySlide"}> </div>
                    </div>
                    <SpotCard imageClassName={"apartmentImage"} name={"Apartment"} selected={selected === "Apartment" ? "selected" : null} onClick={() => setSelected("Apartment")} />
                    <SpotCard imageClassName={"houseImage"} name={"House"} selected={selected === "House" ? "selected" : null} onClick={() => setSelected("House")} />
                    <SpotCard imageClassName={"outdoorsImage"} name={"Outdoors"} selected={selected === "Outdoor" ? "selected" : null} onClick={() => setSelected("Outdoor")} />
                    <SpotCard imageClassName={"uniqueExperience"} name={"Unique Experience"} selected={selected === "Unique Experience" ? "selected" : null} onClick={() => setSelected("Unique Experience")} />
                </div>
                <div className="nextButton" onClick={() => {
                    setfirstSlide(false)
                    setSecondSlide(true)

                }}>Next</div>
            </div>

        </>
    )

    let slide2 = (
        <>
            <div className="leftHalf">
                <div className="whatKindOfText">What does your spot look like?</div>
            </div>
            <div className="rightHalf">


                <SpotImageForm firstSlide={firstSlide} secondSlide={secondSlide} thirdSlide={thirdSlide} images={images} setImages={setImages} noImagesError={noImagesError} />

                <div className="nextButton" onClick={() => {

                    if (images.length < 2) {
                        setnoImagesError(["You have to include at least two images"])
                    } else {
                        setfirstSlide(false)
                        setSecondSlide(false)
                        setThirdSlide(true)
                    }

                }}>Next </div>
            </div>

        </>
    )





    let slide3 = (
        <>
            <div style={{ width: "50%", maxHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${gradientBackground})` }}>
                <img src={images.length > 0 ? toObjectURL(images[0]) : null} style={{ width: "80%", height: "80%", borderRadius: "24px" }} alt="backgroundImage" />
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
                            <h3>Tell us about your Daytrip</h3>
                            <div className="submitSpotButtonContainer">
                                <button className="submitSpotButton" type="submit"> Add Spot </button>
                            </div>
                        </div>
                        <label>Name</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required={true}
                        >
                        </input>
                        <label>Address</label>
                        <input
                            value={address}
                            type="text"
                            onChange={setAddressFunction}
                            placeholder="Address"
                            required={true}
                        >
                        </input>
                        <label>Pets Allowed</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={"true"}
                                type="checkbox"
                                onChange={() => {
                                    setpetsAllowed("true")
                                }}
                                id="Yes"
                                checked={petsAllowed === "true"}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={"false"}
                                type="checkbox"
                                onChange={() => setpetsAllowed("false")}
                                id="No"
                                checked={petsAllowed === "false"}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Has Wifi?</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={"true"}
                                type="checkbox"
                                onChange={() => {
                                    setHasWifi("true")
                                }}
                                id="Yes"
                                checked={hasWifi === "true"}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={"false"}
                                type="checkbox"
                                onChange={() => setHasWifi("false")}
                                id="No"
                                checked={hasWifi === "false"}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Has Tv?</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={"true"}
                                type="checkbox"
                                onChange={() => {
                                    setHasTv("true")
                                }}
                                id="Yes"
                                checked={hasTv === "true"}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={"false"}
                                type="checkbox"
                                onChange={() => setHasTv("false")}
                                id="No"
                                checked={hasTv === "false"}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Has AC?</label>
                        <div className="hasAcContainer">
                            <input
                                value={"true"}
                                type="checkbox"
                                onChange={() => {
                                    setHasAc("true")
                                }}
                                id="Yes"
                                checked={hasAc === "true"}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={"false"}
                                type="checkbox"
                                onChange={() => setHasAc("false")}
                                id="No"
                                checked={hasAc === "false"}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Total Occupancy</label>
                        <input
                            value={totalOccupancy}
                            type="number"
                            onChange={(e) => setTotalOccupancy(e.target.value)}
                            required={true}
                            min="1"
                        >
                        </input>
                        <label>Total Bedrooms</label>
                        <input
                            value={totalBedrooms}
                            type="number"
                            onChange={(e) => setTotalBedrooms(e.target.value)}
                            required={true}
                            min="0"
                        >
                        </input>
                        <label>Total Bathrooms</label>
                        <input
                            value={totalBathrooms}
                            type="number"
                            onChange={(e) => setTotalBathrooms(e.target.value)}
                            required={true}
                            min="0"
                        >
                        </input>
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ fontFamily: "Arial" }}
                            required={true}
                        >
                        </textarea>
                        <label>Price</label>
                        <input
                            type="number"
                            id="priceInputAddSpotFomr"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            required={true}
                            min="0"
                            step="any"
                            max="9999.99"
                        >

                        </input>
                    </form>
                </div>
            </div >

        </>
    )



    return (
        <div className="addSpotPageContainer">
            <NavBar addspotPage={true} />
            <div className="addSpotMainContent">

                {firstSlide ? slide1 : null}
                {secondSlide && slide2}
                {thirdSlide && slide3}
            </div>
            {addSpotLoader ? <div className="addSpotLoaderBackground"><div className="lds-dual-ring"></div></div> : null}
        </div >
    )

}

export default AddSpot;