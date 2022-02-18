import NavBar from "../NavBar/NavBar";
import "./AddSpot.css"
import SpotCard from "./SpotCard";
import { useState } from "react";
import SpotImageForm from "../SpotImageForm/SpotImageForm";

const AddSpot = () => {

    const [selected, setSelected] = useState("Apartment")
    const [firstSlide, setfirstSlide] = useState(true)
    const [secondSlide, setSecondSlide] = useState(false)
    const [images, setImages] = useState([]);
    const [address, setAddress] = useState('')
    const [petsAllowed, setpetsAllowed] = useState(true)
    const [totalOccupancy, setTotalOccupancy] = useState(0)
    const [totalBedrooms, setTotalBedrooms] = useState(0)
    const [totalBathrooms, setTotalBathrooms] = useState(0)
    const [description, setDescription] = useState('')
    const [hasWifi, setHasWifi] = useState(true)
    const [hasTv, setHasTv] = useState(true)
    const [hasAc, setHasAc] = useState(true)
    const [price, setPrice] = useState('')


    const onSubmit = () => {

    }

    const setAddressFunction = (e) => {
        setAddress(e.target.value);
    }


    let slide1 = (
        <>
            <div className="leftHalf">
                <div className="whatKindOfText">What kind of spot are you hosting?</div>
            </div>
            <div className="rightHalf">
                <div>
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
                <SpotImageForm images={images} setImages={setImages} />
                <div className="nextButton" onClick={() => {
                    setfirstSlide(false)
                    setSecondSlide(true)
                }}>Next </div>
            </div>

        </>
    )


    let slide3 = (
        <>
            <div className="leftHalf">
                <div className="whatKindOfText">Tell us about your spot</div>
            </div>
            <div className="rightHalf">
                <div className="formAndNextButtonContainer">
                    <form onSubmit={onSubmit} className="addSpotTextForm">
                        <div>Type: {selected} </div>
                        <label>Address</label>
                        <input
                            value={address}
                            type="text"
                            onChange={setAddressFunction}
                            placeholder="Address"
                        >
                        </input>
                        <label>Pets Allowed</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={true}
                                type="radio"
                                onChange={() => {
                                    setpetsAllowed(true)
                                }}
                                id="Yes"
                                checked={petsAllowed === true}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={false}
                                type="radio"
                                onChange={() => setpetsAllowed(false)}
                                id="No"
                                checked={petsAllowed === false}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Has Wifi?</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={true}
                                type="radio"
                                onChange={() => {
                                    setHasWifi(true)
                                }}
                                id="Yes"
                                checked={hasWifi === true}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={false}
                                type="radio"
                                onChange={() => setHasWifi(false)}
                                id="No"
                                checked={hasWifi === false}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Has Tv?</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={true}
                                type="radio"
                                onChange={() => {
                                    setHasTv(true)
                                }}
                                id="Yes"
                                checked={hasTv === true}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={false}
                                type="radio"
                                onChange={() => setHasTv(false)}
                                id="No"
                                checked={hasTv === false}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Has AC?</label>
                        <div className="pertsAllowedDivForm">
                            <input
                                value={true}
                                type="radio"
                                onChange={() => {
                                    setHasAc(true)
                                }}
                                id="Yes"
                                checked={hasAc === true}
                            >
                            </input>
                            <label htmlFor="Yes"> Yes</label>
                            <input
                                value={false}
                                type="radio"
                                onChange={() => setHasAc(false)}
                                id="No"
                                checked={hasAc === false}
                            >
                            </input>
                            <label htmlFor="No"> No</label>

                        </div>
                        <label>Total Occupancy</label>
                        <input
                            value={totalOccupancy}
                            type="number"
                            onChange={(e) => setTotalOccupancy(e.target.value)}
                        >
                        </input>
                        <label>Total Bedrooms</label>
                        <input
                            value={totalBedrooms}
                            type="number"
                            onChange={(e) => setTotalBedrooms(e.target.value)}
                        >
                        </input>
                        <label>Total Bathrooms</label>
                        <input
                            value={totalBathrooms}
                            type="number"
                            onChange={(e) => setTotalBathrooms(e.target.value)}
                        >
                        </input>
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ fontFamily: "Arial" }}
                        >
                        </textarea>
                    </form>
                    <div className="nextButton" onClick={() => {
                        setfirstSlide(false)
                        setSecondSlide(true)
                    }}>Next </div>
                </div>
            </div >

        </>
    )



    return (
        <div className="addSpotPageContainer">
            <NavBar />
            <div className="addSpotMainContent">
                {firstSlide ? slide1 : null}
                {secondSlide && slide3}
            </div>
        </div >
    )

}

export default AddSpot;