import React, { useRef, useMemo, useState } from 'react';

import { Button } from '@chakra-ui/react';
import { useMapEvents, Marker, MapContainer, TileLayer } from 'react-leaflet';

function LocationMapPicker({ dispatch }) {
  const center = {
    lat: 52.4754,
    lng: -1.8845,
  };
  const [position, setPosition] = useState(center);

  function DraggableMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      ></Marker>
    );
  }

  const setLocation = () => {
    dispatch({ type: 'SET_LOCATION', payload: position });
  };

  return (
    <>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker />
      </MapContainer>
      <Button onClick={setLocation}>Set Location</Button>
    </>
  );
}
export default LocationMapPicker;
