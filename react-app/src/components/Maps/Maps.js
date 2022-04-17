// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoBox, OverlayView } from '@react-google-maps/api';
import "./Maps.css"
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 34.0522,
    lng: -118.2437,
};

const rightOfCenter = {
    lat: 34.20,
    lng: -118.2437,
}

const Maps = ({ apiKey }) => {

    const [showMarker, setShowMarker] = useState(false)

    const options = { closeBoxURL: '', enableEventPropagation: true };


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={8}
                >
                    <OverlayView
                        position={center}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div onClick={() => setShowMarker(true)} className='mapMarker'>
                            <div id="priceMapMarker">$300</div>

                        </div>
                    </OverlayView>

                    {/* {showMarker && <InfoBox
                        options={options}
                        position={center}
                    >
                        <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
                            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                                Hello, World!
                            </div>
                        </div>
                    </InfoBox>} */}
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);