// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoBox, OverlayView } from '@react-google-maps/api';
import "./Maps.css"
import { useState } from 'react';
import { HiLocationMarker } from "react-icons/hi"

const containerStyle = {
    width: '100%',
    height: '100%',
};

const Maps = ({ apiKey, center, singleSpot }) => {
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
                    zoom={12}
                    options={
                        {
                          mapId: "3c1f96260c437762"
                        }
                    }
                >
                    {singleSpot && (
                      <OverlayView
                      position={center}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                      >
                        <HiLocationMarker id="locationMarker"/>
                   </OverlayView>
                    )}

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