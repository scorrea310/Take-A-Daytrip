import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import "./Spot.css"


const Spot = ({ sessionId, spotsLoaded }) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const spot = useSelector((state) => state.spotReducer)
    const { spotId } = useParams();
    const [noProduct, setNoProduct] = useState(false)

    /*
    style={{ width: "100%", height: "357px", backgroundImage: `url(${spot[`${spotId}`]?.images[0]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "12px" }}
    
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