import NavBar from "../NavBar/NavBar";
import "./AddSpot.css"
import SpotCard from "./SpotCard";
import { useState } from "react";
import SpotImageForm from "../SpotImageForm/SpotImageForm";

const AddSpot = () => {

    const [selected, setSelected] = useState("Apartment")
    const [firstSlide, setfirstSlide] = useState(true)
    const [secondSlide, setSecondSlide] = useState(false)

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
                <SpotImageForm />
                <div className="nextButton">Next</div>
            </div>

        </>
    )



    return (
        <div className="addSpotPageContainer">
            <NavBar />
            <div className="addSpotMainContent">
                {firstSlide ? slide1 : null}
                {secondSlide && slide2}
            </div>
        </div >
    )

}

export default AddSpot;