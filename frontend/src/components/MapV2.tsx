import React from "react";

import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const mapStyle = {
        height: '40rem',
        width: '70rem',
        margin: '0 auto',
    }

// container with countries 
const Map = ({countries}) => { 
    //console.log (countries);
    return ( 
        <MapContainer
            style={mapStyle}
            center ={[40, 10]}
            zoom={2} scrollWheelZoom={true} >
            <GeoJSON data={countries} />
        </MapContainer>
    
    
    ); 
};

export default Map;