import React, {useState, useEffect, useCallback} from "react";

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

function style(feature, data) {
    const iso3 = feature.properties.ISO_A3; 
    const mineralValue = Number(data[iso3]);
    //console.log("Styling feature:", feature.properties.ADMIN, "ISO3:", iso3, "Value:", mineralValue);
  


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


  const [Mineraldata, setMineralData] = useState({});

  // // Update data lookup when year changes
  useEffect(() => {
    if (map_data && currentYear) {
      console.log("Updating data lookup for year:", currentYear);
      const updatedMineralData = MineralData(map_data, currentYear);
      setMineralData(updatedMineralData);
     
      console.log("Updated mineral data:", updatedMineralData);
      

    }
  }, [currentYear, map_data]);

  // console.log("Data for current year:", );


// const onEachCountry = useCallback((country, layer ) => {
//         const name = country.properties.ADMIN;
//         const iso3 = country.properties.ISO_A3;
//         const yearData = data
//         console.log("Mineral data for year", data);
//     // mineralData[iso3] = yearData;

        
      

//         layer.bindPopup(`Country: ${name}<br> ISO3: ${iso3} <br> yearData: ${yearData[iso3]}`);
//     }, [data]); 

function onEachCountry(data) {
    return (country, layer) => {
        const name = country.properties.ADMIN;
        const iso3 = country.properties.ISO_A3;
        console.log("set" , data)
        const dataPoint = Number(data[iso3]) ? data : "No data";
        
        // let mineralValue;
        // if (dataPoint === undefined || dataPoint === null || dataPoint === "") {
        //     mineralValue = "No data";
        // } else {
        //     const numValue = Number(dataPoint);
        //     mineralValue = isNaN(numValue) ? "No data" : numValue;
        // }
        

        // data point displayed is one behind what is need UGH 

        //console.log(`Country: ${name}, ISO3: ${iso3}, Value: ${mineralValue}`);
        layer.bindPopup(`Country: ${name}<br> ISO3: ${iso3} <br>  `);
    };
}

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
          <GeoJSON 
            key ={currentYear}
            data={countries}
            style={(feature) => style(feature, Mineraldata)}
            onEachFeature={onEachCountry(Mineraldata)} />
          
        </MapContainer>
        <Slider step = {1} included={false} defaultValue={0} min = {Number(YearDataMin_Max[0])} max ={Number(YearDataMin_Max[1])} onChangeComplete={(sliderValue) => handleSliderChange(sliderValue) }  />
        
      </div>
      


    ); 
};

export default Map;