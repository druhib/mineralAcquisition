import React from "react";

import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Legend from "./Legend";

function createDataLookup(map_data: Record<string, any>) {
  const lookup: Record<string, any> = {};
  Object.values(map_data).forEach((item: any) => {
    //checking for ASM_WORKERS 
      lookup[item.ISO3] = item["ASM_Workers "] 
    });
  return lookup;
}


const mapStyle = {
        height: '37rem',
        width: '65rem',
        margin: '0 auto',
    }


function getColor(d) {
  if (d === null || d === undefined || d === 0) return '#169e26ff';
  return d > 500000 ? '#800026' :
         d > 100000 ? '#BD0026' :
         d > 50000  ? '#E31A1C' :
         d > 10000  ? '#FC4E2A' :
         d > 5000   ? '#FD8D3C' :
         d > 1000   ? '#FEB24C' :
         d > 0      ? '#FED976' :
                      '#32a74fff';
}

function style(feature, dataLookup) {
    const iso3 = feature.properties.ISO_A3;
    const asmWorkers = dataLookup[iso3];

    return {
    fillColor: getColor(asmWorkers),
    weight: 2,
    opacity: 0.7,
    color: 'white',
    fillOpacity: 0.7
  };

    
    } 


// container with countries 
const Map = ({countries, map_data}) => { 

const dataLookup = createDataLookup(map_data);

const onEachCountry = (country, layer) => {

    const name = country.properties.ADMIN;
    const iso3 = country.properties.ISO_A3;
    const asmWorkers = dataLookup[iso3];

    // ASM look up here is not working 
    layer.bindPopup(`Countr: ${name}<br> ISO3: ${iso3} <br> ASM Workers: ${asmWorkers}`);

  };
    
    return ( 
      <div>
        <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Artisanal and Small-scale Mining (ASM) Workers by Country
      </div>
      
        <MapContainer
          style={mapStyle}
          center ={[40, 10]}
          zoom={2} scrollWheelZoom={true} >
          <GeoJSON data={countries}
            style={(feature) => style(feature, dataLookup)}
            onEachFeature={onEachCountry} />
          <Legend />
        </MapContainer>
    
      </div>
    ); 
};

export default Map;