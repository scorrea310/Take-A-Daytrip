import "./SpotListingCard.css"
import { GiVacuumCleaner } from "react-icons/gi"

const SpotListingCard = ({ spot }) => {

    return (
        <div className="spotListingCard">
            <div style={{ width: "30%", height: "200px", backgroundImage: `url(${spot.images[0]})`, backgroundSize: "cover", backgroundPosition: "center", marginLeft: "20px", borderRadius: "12px" }}></div>
            <div style={{ width: "80%", height: "200px", marginLeft: "20px", display: "flex", flexDirection: "column" }}>
                <div className="titleSectionSpotCard">{spot.name}</div>
                <div className="spotStatsSectionSpotCard">
                    <div style={{ color: "#717171", fontSize: "14px", fontWeight: "400" }}>{spot.total_occupancy} guests · {spot.total_bedrooms} bedrooms · {spot.total_bathrooms} bathrooms </div>
                    <div style={{ color: "#717171", fontSize: "14px", fontWeight: "400", marginTop: "10px" }}>
                        {spot.pets_allowed === "True" && "Pets Allowed"} {spot.has_ac === "True" && "Wifi"} {spot.has_tv === "True" && "TV"} {spot.has_ac === "True" && "AC"}
                    </div>
                </div>
                <div className="priceSectionSpotCard">
                    <div> <GiVacuumCleaner /> free cleaning service</div>
                    <div>${spot.price_per_day} / day</div>
                </div>
            </div>
        </div>
    )
}

export default SpotListingCard;