import "./SpotMapCard.css"
import { IoIosClose } from "react-icons/io"
const SpotMapCard = ({setFocusedSpotMark, spot})=> {
    
    return (
        <div id='spotMapCard'>
            <div style={{ width: "100%", height: "100%", backgroundImage: `url(${spot.images[0]})`, backgroundSize: "cover", backgroundPosition: "center", borderTopRightRadius: "12px", borderTopLeftRadius: "12px" }}>
                <IoIosClose id="closeMapBoxIcon" onClick={() => setFocusedSpotMark(false)}/>
            </div>
            <div id="spotMapCardTextContentArea">
                <div className="spotTextMapCard">{spot.name}</div>
                <div className="spotTextMapCard">
                    <div>${spot.price_per_day}</div>
                    <div>night</div>
                </div>
            </div>
        </div>
    )
}

export default SpotMapCard