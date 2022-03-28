import "./ManageListings.css"
import { useHistory } from "react-router-dom"


const ListingCard = ({ listing }) => {

    const history = useHistory()

    return (
        <div className="listingCard" onClick={() => history.push(`/spots/${listing.id}`)}>
            {/* <div id="listingNameListingCard">{listing.name}</div> */}
            <div>
                <img id="yourListingImageCard" alt="your-listing" src={listing.images[0]}></img>
            </div>
            <div className="listingNameAndPriceContainer">
                <div id="listingAddress">{listing.address}</div>
                <div id="listingPriceYourListings">${listing.price_per_day}/ day</div>
            </div>
        </div>
    )
}


export default ListingCard