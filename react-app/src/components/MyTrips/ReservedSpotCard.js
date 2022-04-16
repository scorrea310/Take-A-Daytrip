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
import { useEffect } from "react"

const ReservedSpotCard = ({ reservation }) => {

    const history = useHistory()
    const dispatch = useDispatch();
    const [showEditModal, setShowEditModal] = useState(false)
    const [showCancelReservationModal, setCancelReservation] = useState(false)
    let startDate = reservation.check_in.split(" ")
    let endDate = reservation.check_out.split(" ")
    let reservationCheckInDateObject = new Date(startDate[0].replace(/-/g, '\/'));
    let checkInDate = reservationCheckInDateObject.toDateString()
    let reservationCheckOutDateObject = new Date(endDate[0].replace(/-/g, '\/'));
    let checkOutDate = reservationCheckOutDateObject.toDateString()
    let days = (reservationCheckOutDateObject.getTime() - reservationCheckInDateObject.getTime()) / (1000 * 3600 * 24);
    const [priceState, setPriceState] = useState((days * reservation.price).toFixed(2))
    const cancelReservation = () => {
        dispatch(deleteReservationThunk(reservation.id))
    }

    useEffect(() => {
        setPriceState((days * reservation.price).toFixed(2))
    }, [days, reservation.price, setPriceState])

    return (

        <div className="reservedTripCardContainer">
            <div style={{ width: "400px", height: "100%", backgroundImage: `url(${reservation.spot_images[0]})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "24px" }} ></div>
            <div className="reservesSpotCardInfo">
                <div className="yourGoingToTextAndEditContainer">
                    <div className="yourGoingToText">You're going to {reservation.spot_name}</div>
                    <div className="editAndDeleteReservationIconAndText">
                        <div className="editIconAndDeleteReserveCard" onClick={() => setShowEditModal(true)} ><FiEdit id="editReservationIcon" /> Edit </div>
                        <div className="deleteIconAndTextReserveCard" onClick={() => setCancelReservation(true)} ><MdOutlineCancelPresentation id="cancelReservationIcon" /> Cancel</div>
                        {showEditModal && <Modal idName={"edit-Reservation-Modal"} onClose={() => setShowEditModal(false)}>
                            <ReserveSpot editStartDate={reservation.check_in} editEndDate={reservation.check_out} reservationDate={reservation.reservation} setShowEditModal={setShowEditModal} totalOccupantsAllowed={reservation.total_occupants_allowed} price={reservation.price} editModal={true} currentReservation={reservation} />
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
                        <div>Check In</div>
                        <div>{checkInDate}</div>
                    </div>
                    <div className="checkInDateReservedCArd">
                        <div>Check Out</div>
                        <div>{checkOutDate}</div>
                    </div>
                    <div className="checkInDateReservedCArd">
                        <div>Address</div>
                        <div>{reservation.spot_address}</div>
                    </div>
                    <div className="checkInDateReservedCArd">
                        <div>Number of Guests</div>
                        <div>{reservation.number_of_guests}</div>
                    </div>
                    <div className="priceReservationCardContainer">
                        <div>Price</div>
                        <div>${priceState}</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ReservedSpotCard