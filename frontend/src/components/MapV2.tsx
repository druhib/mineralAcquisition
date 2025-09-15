import React, {useState, useEffect} from "react";

import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Legend from "./Legend";
import {Slider, SliderSingleProps} from "antd"


function getYears(map_data: Record<string, any>) {
  // extracts years from first data key which should be the same all all tables 
    const yearKeys = Object.keys(map_data[0].Years);
    const  min_max = [yearKeys[0], yearKeys[yearKeys.length - 1]]
    
  return  min_max; 

  
}

function createDataLookup(map_data: Record<string, any>) {
  const lookup: Record<string, any> = {};
  Object.values(map_data).forEach((item: any) => {
      
      lookup[item.ISO3] = Number(item); 
    });
    console.log("Data lookup:", lookup);
  return lookup;
}

const mapStyle = {
        height: '37rem',
        width: '65rem',
        margin: '0',
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
    const mineralValue = Number(dataLookup[iso3]);

    

    return {
    fillColor: getColor(mineralValue),
    weight: 2,
    opacity: 0.7,
    color: 'white',
    fillOpacity: 0.7
  };

    
    } 


function MineralData(map_data, year) {
  // extract mineral data for a given year from map_data 
  const mineralData = {};
  map_data.forEach((item) => {
    const iso3 = item.ISO3;
    const yearData = item.Years[year];
    // console.log("Mineral data for year", item.Years[year]);
    mineralData[iso3] = yearData;

     
  })
  console.log("mineral data", mineralData)

  return mineralData;
  }



// container with countries 
const Map = ({countries, map_data}) => { 

  
  const YearDataMin_Max = map_data ? getYears(map_data) : {};
  const [currentYear, setCurrentYear] = useState(YearDataMin_Max[0] || 0 ) // set initial year to ? 


  const [data, setData] = useState({});

  // // Update data lookup when year changes
  useEffect(() => {
    if (map_data && currentYear) {
      console.log("Updating data lookup for year:", currentYear);
      const updatedMineralData = MineralData(map_data, currentYear);
      setData(updatedMineralData);
     
      console.log("Updated mineral data:", updatedMineralData);
      

    }
  }, [currentYear, map_data]);

  console.log("Data for current year:", data);


const dataLookup = createDataLookup(data);

const onEachCountry = (country, layer) => {

    const name = country.properties.ADMIN;
    const iso3 = country.properties.ISO_A3;

    // display data first --> console log and then check what to display
    // const data = dataLookup[iso3];

  
    // ASM look up here is not working 
    layer.bindPopup(`Country: ${name}<br> ISO3: ${iso3} <br> Value: ${data}`);

  };

  const handleSliderChange = (sliderValue) => {
    
    setCurrentYear(sliderValue);
  };
    
    return ( 
      <div>
        <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {currentYear} Map 
      </div>
      
        <MapContainer
          style={mapStyle}
          center ={[30, 0]}
          zoom={1.7} scrollWheelZoom={true} >
          <GeoJSON data={countries}
            style={(feature) => style(feature, data)}
            onEachFeature={onEachCountry} />
          
        </MapContainer>
        <Slider step = {1} included={false} defaultValue={0} min = {Number(YearDataMin_Max[0])} max ={Number(YearDataMin_Max[1])} onChangeComplete={(sliderValue) => handleSliderChange(sliderValue) }  />
        
      </div>
      


    ); 
};

export default Map;