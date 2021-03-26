import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

function EventMap(){

function notifyClick(){
  console.log('map got clicked');
}


//hard coded variables
let long=52.4862;
let lat=-1.8904;

    return(
        <div id='mapid'>
    <MapContainer center={[long, lat]} zoom={13} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[long, lat]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>
    )
}
    
// #mapid { height: 180px; }

export default EventMap;


