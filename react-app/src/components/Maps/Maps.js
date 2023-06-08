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

const Maps = ({ apiKey, center, singleSpot, spotListingsPage, spots, zoom }) => {
    const [focusedSpotMark, setFocusedSpotMark] = useState(false)

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
                    zoom={zoom}
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

                    {spotListingsPage && spots.map((spot) => {
                        return (
                          <OverlayView
                            key={spot.id}
                            position={{lat: spot.latitude, lng: spot.longitude}}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                          >
                            <div onClick={() => setFocusedSpotMark(spot)} className='mapMarker'>
                              <div id="priceMapMarker">${spot.price_per_day}</div>
                           </div>
                          </OverlayView>
                        )
                    })}
                     
                    {focusedSpotMark && <InfoBox
                        options={{
                            enableEventPropagation: true,
                            pixelOffset: new window.google.maps.Size(80, 0),
                            closeBoxURL: ``,
                        }}
                        position={{lng: focusedSpotMark.longitude, lat: focusedSpotMark.latitude}}

                    >
                        <div onClick={() => setFocusedSpotMark(false)} style={{ backgroundColor: 'white', padding: 12 }}>
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