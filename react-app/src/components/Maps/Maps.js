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

const Maps = ({ apiKey }) => {


    const [showMarker, setShowMarker] = useState(false)

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
                    options={
                        {
                            mapId: "3c1f96260c437762"
                        }
                    }
                >
                    <OverlayView
                        position={center}
                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                        <div onClick={() => setShowMarker({ id: 4 })} className='mapMarker'>
                            <div id="priceMapMarker">$300.00</div>

                        </div>
                    </OverlayView>

                    {showMarker.id === 4 && <InfoBox
                        options={{
                            enableEventPropagation: true,
                            pixelOffset: new window.google.maps.Size(80, 0),
                            closeBoxURL: ``,
                        }}
                        position={center}

                    >
                        <div onClick={() => setShowMarker(false)} style={{ backgroundColor: 'white', padding: 12 }}>
                            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                                Hello, World!
                            </div>
                        </div>
                    </InfoBox>}
                </GoogleMap>
            )
            }
        </>
    );
};

export default React.memo(Maps);