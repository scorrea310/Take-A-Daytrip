import "./SpotMapCard.css"
import { IoIosClose } from "react-icons/io"
import {GrFormNext, GrUserSettings} from "react-icons/gr"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"

const SpotMapCard = ({setFocusedSpotMark, spot})=> {
    const [currentImageDisplayed, setCurrentImageDisplayed] = useState(0)
    const [imageArrowsVisible, setImageArrowsVisible] = useState(false)
    const history = useHistory()
    useEffect(() => {
        spot.images.forEach((imageUrl) => {
          const image = new Image();
          image.src = imageUrl;
        });
      }, []);

    const handlePageChange = (e)=> {
        if(e.target.className.baseVal === "spotMapCardNextArrow" || e.target.nodeName === "path" || e.target.id === "closeMapBoxIcon") {
            return;
        } 
        history.push(`/spots/${spot.id}`)
    }

    return (
        <div id='spotMapCard' onMouseOver={()=> setImageArrowsVisible(true)} onMouseLeave={()=> setImageArrowsVisible(false)} onClick={handlePageChange}>
            <div style={{ width: "100%", height: "100%", backgroundImage: `url(${spot.images[currentImageDisplayed]})`, backgroundSize: "cover", backgroundPosition: "center", borderTopRightRadius: "12px", borderTopLeftRadius: "12px" }}>
              <div id="spotMapCardCloseAndArrowsMainContent">
                <IoIosClose id="closeMapBoxIcon" onClick={() => setFocusedSpotMark(false)}/>
                <div id="spotMapCardArrowsParentContainer">
                    {imageArrowsVisible && (
                        <div id={currentImageDisplayed === 0 ? "spotMapCardArrowsMainContainerRight" : "spotMapCardArrowsMainContainerLeft"}>
                          {currentImageDisplayed !== 0 && <AiOutlineLeft className="spotMapCardNextArrow" onClick={()=> setCurrentImageDisplayed(0)}/>}
                          {currentImageDisplayed === 0 && <AiOutlineRight className="spotMapCardNextArrow" onClick={()=> setCurrentImageDisplayed(1)}/>}
                        </div>
                    )}
                </div>
              </div>    
            </div>
            <div id="spotMapCardTextContentArea">
                <div className="spotTextMapCardName">{spot.name}</div>
                <div id="spotTextMapCardPricePerDayContainer">
                    <div id="spotTextMapCardPricePerDay">${spot.price_per_day}</div>
                    <div id="spotTextMapCardNightText">night</div>
                </div>
            </div>
        </div>
    )
}

export default SpotMapCard