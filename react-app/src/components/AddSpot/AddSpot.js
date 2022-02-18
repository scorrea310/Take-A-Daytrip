import NavBar from "../NavBar/NavBar";
import "./AddSpot.css"
import SpotCard from "./SpotCard";
import { useState } from "react";

const AddSpot = () => {

    const [selected, setSelected] = useState("Apartment")



    return (
        <div className="addSpotPageContainer">
            <NavBar />
            <div className="addSpotMainContent">
                <div className="leftHalf">
                    <div className="whatKindOfText">What kind of spot are you hosting?</div>
                </div>
                <div className="rightHalf">
                    <div>
                        <SpotCard imageClassName={"apartmentImage"} name={"Apartment"} selected={selected === "Apartment" ? "selected" : null} onClick={() => setSelected("Apartment")} />
                        <SpotCard imageClassName={"daytripImage"} name={"Daytrip"} selected={selected === "Daytrip" ? "selected" : null} onClick={() => setSelected("Daytrip")} />
                        <SpotCard imageClassName={"uniqueExperience"} name={"Unique Experience"} selected={selected === "Unique Experience" ? "selected" : null} onClick={() => setSelected("Unique Experience")} />
                        <SpotCard imageClassName={"beachImage"} name={"Beach"} selected={selected === "Beach" ? "selected" : null} onClick={() => setSelected("Beach")} />
                    </div>
                    <div className="nextButton">Next</div>
                </div>

            </div>
        </div >
    )

}

export default AddSpot;