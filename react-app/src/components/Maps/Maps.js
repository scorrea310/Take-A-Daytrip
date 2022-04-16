// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./Maps.css"
import { OverlayView } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 34.0522,
    lng: -118.2437,
};

const Maps = ({ apiKey }) => {
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
                        <div className='mapMarker'>
                            <h2>$300.00</h2>
                        </div>
                    </OverlayView>
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);