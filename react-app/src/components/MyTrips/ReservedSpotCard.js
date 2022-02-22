import "./ReservationSpotCard.css"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBinLine } from "react-icons/ri"
import { MdOutlineCancelPresentation } from "react-icons/md"
import { CgDetailsMore } from "react-icons/cg"

const ReservedSpotCard = ({ reservation }) => {

    console.log(reservation)

    // backgroundImage: `url(${reservation.spot_images[0]})` }}

    let dateArray = reservation.reservation.split(" ")
    console.log(dateArray)


    return (

        <div className="reservedTripCardContainer">
            <div style={{ width: "400px", height: "100%", backgroundImage: `url(${reservation.spot_images[0]})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "24px" }} ></div>
            <div className="reservesSpotCardInfo">
                <div className="yourGoingToTextAndEditContainer">
                    <div className="yourGoingToText">You're going to {reservation.spot_name}</div>
                    <div className="editAndDeleteReservationIconAndText">
                        <div className="editIconAndDeleteReserveCard"><FiEdit style={{ marginRight: "5px" }} /> Edit </div>
                        <div className="deleteIconAndTextReserveCard"><MdOutlineCancelPresentation style={{ color: "red", marginRight: "5px" }} /> Cancel</div>
                    </div>
                </div>
                <div className="reservedSpotCardMainInfo">
                    <div className="checkInDateReservedCArd">
                        <div>Check in</div>
                        <div>{dateArray[0]}</div>
                    </div>
                    <div className="checkInDateReservedCArd">
                        <div>Address</div>
                        <div>{reservation.spot_address}</div>
                    </div>
                    <div className="priceReservationCardContainer">
                        <div>Price</div>
                        <div>${reservation.price}</div>
                    </div>
                    <div className="seeMoreDetailsIconAndTextContainerReserveCard">
                        <CgDetailsMore style={{ fontSize: "24px", marginRight: "5px" }} />
                        <div>Details</div>
                    </div></div>
            </div>
        </div >
    )
}

export default ReservedSpotCard