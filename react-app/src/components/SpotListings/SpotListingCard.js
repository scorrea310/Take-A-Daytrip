import "./SpotListingCard.css"
import { GiVacuumCleaner } from "react-icons/gi"
import { useHistory } from "react-router-dom"

const SpotListingCard = ({ spot }) => {

    const history = useHistory()

    return (
        <div className="spotListingCard" onClick={() => history.push(`/spots/${spot.id}`)}>
            <div style={{ width: "30%", height: "200px", backgroundImage: `url(${spot.images[0]})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "12px" }}></div>
            <div style={{ width: "80%", height: "200px", marginLeft: "20px", display: "flex", flexDirection: "column" }}>
                <div className="titleSectionSpotCard">{spot.name}</div>
                <div className="spotStatsSectionSpotCard">
                    <div className='spotListingCardStats'>{spot.total_occupancy} guests · {spot.total_bedrooms} bedrooms · {spot.total_bathrooms} bathrooms </div>
                    <div className='spotListingCardStats'>
                        {spot.pets_allowed === "True" && "Pets Allowed"} {spot.has_wifi === "True" && "Wifi"} {spot.has_tv === "True" && "TV"} {spot.has_ac === "True" && "AC"}
                    </div>
                </div>
                <div className="priceSectionSpotCard">
                    {spot.type !== "Outdoor" && spot.type !== "Unique Experience" ? <div><GiVacuumCleaner style={{ fontSize: "24px" }} /> free cleaning service</div> : <div style={{ width: "20px" }}></div>}
                    <div>${spot.price_per_day} / day</div>
                </div>
            </div>
        </div>
    )
}

export default SpotListingCard;