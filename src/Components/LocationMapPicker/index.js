import { Button } from '@chakra-ui/react';
import React, {
  useState,
  useRef,
  useMemo,
} from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';

// import 'leaflet/dist/leaflet.css';
// predetermined long and lat for map
function LocationMapPicker({ dispatch }) {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };
  const [position, setPosition] = useState(center);
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
    dispatch({ type: 'SET_LOCATION', payload: position });
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
