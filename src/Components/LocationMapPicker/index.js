import { Button } from "@chakra-ui/react";

const { default: React, useEffect, useRef, useMemo } = require("react");
const { useState } = require("react");
const {
  useMapEvents,
  Popup,
  Marker,
  MapContainer,
  TileLayer,
} = require("react-leaflet");

function LocationMapPicker({ dispatch }) {
  const [position, setPosition] = useState(null);
  function LocationMarker() {
    const map = useMapEvents({
      locationfound(e) {
        setPosition(e.latlng);
        console.log(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          //finds the final location of marker
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );

    useEffect(() => {
      map.locate();
    }, []);

    return position === null ? null : (
      <Marker
        position={position}
        draggable={true}
        eventHandlers={eventHandlers}
        ref={markerRef}
      >
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  const setLocation = () => {
    dispatch({ type: "SET_LOCATION", payload: position });
  };

  return (
    <>
      <MapContainer
        center={{ lat: 52.486, lng: -1.89 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      <Button onClick={setLocation}>Set Location</Button>
    </>
  );
}
export default LocationMapPicker;
