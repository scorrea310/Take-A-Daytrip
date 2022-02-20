import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';




const Spot = ({ sessionId, spotsLoaded }) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const spot = useSelector((state) => state.spotReducer)
    const { spotId } = useParams();
    const [noProduct, setNoProduct] = useState(false)


    let spotDiv = (
        <div>

            <div>{spot[`${spotId}`]?.description}</div>
            <div>{spot[`${spotId}`]?.id}</div>
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