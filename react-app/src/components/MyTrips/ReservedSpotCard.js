import "./ReservationSpotCard.css"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBinLine } from "react-icons/ri"
import { MdOutlineCancelPresentation } from "react-icons/md"
import { CgDetailsMore } from "react-icons/cg"
import { useState } from "react"
import { Modal } from "../../context/Modal"
import ReserveSpot from "../Spot/ReserveSpot"
import Button from "../common/Button/Button"
import { deleteReservationThunk } from "../../store/reservationsReducer"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const ReservedSpotCard = ({ reservation }) => {

    const history = useHistory()
    const dispatch = useDispatch();
    const [showEditModal, setShowEditModal] = useState(false)
    const [showCancelReservationModal, setCancelReservation] = useState(false)
    let dateArray = reservation.reservation.split(" ")

    const cancelReservation = () => {

        //dispatch cancelreservationThunk passing in reservation.id
        dispatch(deleteReservationThunk(reservation.id)).then(() => {
            setCancelReservation(false)
        })

    }

    return (

        <div className="reservedTripCardContainer">
            <div style={{ width: "400px", height: "100%", backgroundImage: `url(${reservation.spot_images[0]})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "24px" }} ></div>
            <div className="reservesSpotCardInfo">
                <div className="yourGoingToTextAndEditContainer">
                    <div className="yourGoingToText">You're going to {reservation.spot_name}</div>
                    <div className="editAndDeleteReservationIconAndText">
                        <div className="editIconAndDeleteReserveCard" onClick={() => setShowEditModal(true)} ><FiEdit style={{ marginRight: "5px" }} /> Edit </div>
                        <div className="deleteIconAndTextReserveCard" onClick={() => setCancelReservation(true)} ><MdOutlineCancelPresentation style={{ color: "red", marginRight: "5px" }} /> Cancel</div>
                        {showEditModal && <Modal idName={"edit-Reservation-Modal"} onClose={() => setShowEditModal(false)}>
                            <ReserveSpot setShowEditModal={setShowEditModal} totalOccupantsAllowed={reservation.total_occupants_allowed} price={reservation.price} editModal={true} currentReservation={reservation} />
                        </Modal>}
                        {showCancelReservationModal && <Modal idName={"edit-Reservation-Modal"} onClose={() => setCancelReservation(false)}>
                            <div className="cancelReservationInModalContainer">
                                <div>Are you sure you want to cancel your reservation?</div>
                                <div className="cancelReservationInModalButtonContainer">
                                    <Button className={"cancelReservationButton"} label={"Yes"} onClick={cancelReservation} />
                                    <Button className={"noCancelReservationButton"} label={"No"} onClick={() => setCancelReservation(false)} />
                                </div>
                            </div>

                        </Modal>}
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