import { Button } from "@chakra-ui/react";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

// import 'leaflet/dist/leaflet.css';
// predetermined long and lat for map
function LocationMapPicker({ dispatch }) {
  const [mapPosition, setMapPosition] = useState([52.505, -0.09]);

  useEffect(() => {
    function getDevicePosition() {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(`this is JJ's location ${lat},${long}`);
        setMapPosition([lat, long]);
        console.log(`this is map position after setting it ${mapPosition}`);
      });
    }
    getDevicePosition();
  }, []);

  const center = {
    lat: mapPosition[0],
    lng: mapPosition[1],
  };

  console.log(center.lat);
  console.log(center.lng);

  const [position, setPosition] = useState(center);

  useEffect(() => {
    setPosition({ lat: mapPosition[0], lng: mapPosition[1] });
  }, [mapPosition]);

  // makes the marker draggable to choose a location for event
  function DraggableMarker() {
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

    return (
      <Marker //the blue marker on page
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      ></Marker> //pop up that tells user the maker is draggable
    );
  }

  const setLocation = () => {
    dispatch({ type: "SET_LOCATION", payload: position });
  };

  return (
    //the map rendered
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
// #mapid { height: 180px; }

export default LocationMapPicker;
