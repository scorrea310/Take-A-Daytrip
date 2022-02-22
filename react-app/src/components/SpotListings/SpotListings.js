import NavBar from "../NavBar/NavBar";
import "./SpotListings.css"

const SpotListings = () => {

    // overflow-y: scroll; on div you want to scroll
    // overflow: hidden; on parent div
    return (
        <div className="spotListingsPage">
            <NavBar spotListingsPage={true} />
        </div>
    )
}



export default SpotListings