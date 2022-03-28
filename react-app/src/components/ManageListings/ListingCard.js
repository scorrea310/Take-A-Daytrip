import "./ManageListings.css"
import { useHistory } from "react-router-dom"


const ListingCard = ({ listing, PastTrip }) => {

    const history = useHistory()

    return (
        <div className="listingCard" onClick={() => {
            if (listing) {
                history.push(`/spots/${listing.id}`)
            } else if (PastTrip) {
                history.push(`/spots/${PastTrip.spot_id}`)
            }

        }}>
            {/* <div id="listingNameListingCard">{listing.name}</div> */}
            <div>
                <img id="yourListingImageCard" alt="your-listing" src={listing ? listing.images[0] : PastTrip.spot_images[0]}></img>
            </div>
            <div className="listingNameAndPriceContainer">
                <div id="listingAddress">{listing ? listing.address : PastTrip.spot_address}</div>
                <div id="listingPriceYourListings">${listing ? listing.price_per_day : PastTrip.price}/ day</div>
            </div>
        </div>
    )
}


export default ListingCard