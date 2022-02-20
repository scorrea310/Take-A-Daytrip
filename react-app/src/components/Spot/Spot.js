import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import "./Spot.css"
import { BsDoorOpen } from "react-icons/bs"
import { BsCalendarDate } from "react-icons/bs"
import EditSpot from './EditSpot';
import ReserveSpot from './ReserveSpot';

const Spot = ({ spotsLoaded }) => {

    const user = useSelector((state) => state.session.user)
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const spot = useSelector((state) => state.spotReducer)
    const { spotId } = useParams();
    const [noProduct, setNoProduct] = useState(false)

    /*
    style={{ width: "100%", height: "357px", backgroundImage: `url(${spot[`${spotId}`]?.images[0]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "12px" }}
    
    */

    /*
    total_bathrooms: "0"
    total_bedrooms: "0"
    total_occupancy: "0"
    */
    let spotDiv = (
        <div className='spotPageContainer'>
            <div className='spotPageNavBArContainerParent'>
                <NavBar spotPage={true} />
            </div>
            <div className='spotNameAndImageSection'>
                <h2>{spot[`${spotId}`]?.name}</h2>
                <div className='spotPageImagesSection'>
                    <div style={{ width: "49%", height: "357px", backgroundImage: `url(${spot[`${spotId}`]?.images[0]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "12px" }}></div>
                    <div style={{ width: "49%", height: "357px", backgroundImage: `url(${spot[`${spotId}`]?.images[1]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "12px" }}></div>
                </div>
            </div>
            <div className='spotInfoAndReserveOrEditContainer'>
                <div className='spotDescriptionAndInfoDiv'>
                    <div className='spotDetailsTitleAndStats'>
                        <h2>{spot[`${spotId}`]?.type} hosted by {spot[`${spotId}`]?.host_name}</h2>
                        <div className='spotStatContainer'>
                            Total Bathrooms {spot[`${spotId}`]?.total_bathrooms} - Total Bedrooms {spot[`${spotId}`]?.total_bedrooms} - Total Occupants Allowed {spot[`${spotId}`]?.total_occupancy}
                        </div>
                    </div>
                    <div className='reservationAndCancelationTextContainer'>
                        <div className='doorAndSelfTextContainer'> <BsDoorOpen id="doorIcon" /> Self Check In </div>
                        <div className='checkInYouselfText'>Check yourself by showing up.</div>
                        <div className='calendarAndCancelationText'> <BsCalendarDate id="calendarIcon" /> Free cancellation before start date. </div>
                    </div>
                    <div className='spotDescriptionContainer'>{spot[`${spotId}`]?.description}</div>
                </div>
                <div className='editDeleteOrReserveSection'>
                    {user?.id === parseInt(spot[`${spotId}`]?.host_id, 10) ? <EditSpot /> : <ReserveSpot />}
                </div>
            </div>
        </div>
    )



    if (!spotsLoaded) {
        return null;
    }

    return (
        <>
            {spot[`${spotId}`] === undefined ? <div>Spot Does not Exist</div> : spotDiv}
        </>
    )
}

export default Spot;