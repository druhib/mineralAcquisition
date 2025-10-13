import React, {useState, useEffect} from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';



interface MapProps {
  countries: any; 
  map_data: any;  
}



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


function getColor(d: any) {
  const value = Number(d);
  return value > 500000000 ? '#010903ff' :
         value > 80000000  ?  '#4d061b':
         value > 20000000  ? '#9a0b28' :
         value > 1000000  ? '#d30202' :
         value > 500000   ?'#ff4721' :
         value > 100000   ? '#fd8d3c' :
         value > 50000  ? '#fdd83c' :
         value > 10000   ? '#e8bf44' :
         value > 5000   ? '#fdd83c' :
         value > 100   ? '#f7e285':
         value >= 0    ? '#fefaa1':
                         '#72b1de';
}

function style(feature: any, data: Record<string, any>) {


    const iso3 = feature.properties.ISO_A3; 
    const mineralValue = Number(data[iso3]);
 

    return {
    fillColor: getColor(mineralValue),
    weight: .6,
    opacity: 0.7,
    color: 'black',
    fillOpacity: 1
  };

    
    } 


function MineralData(map_data: Record<string, any> , year:any ) {
  // extract mineral data for a given year from map_data 
  const mineralData: { [key: string]: any } = {};
  map_data.forEach((item: any) => {
    const iso3: any = item.ISO3;
    const yearData = item.Years[year];
    // console.log("Mineral data for year", item.Years[year]);
    mineralData[iso3] = yearData;


     
  })
  console.log("mineral data", mineralData)

  return mineralData;
  }

const marks: SliderSingleProps['marks'] = { // help with scale 
  1493: '1493',
  1600: '1600',
  1700: '1700',
  1800: '1800',
  1900: '1900',
  1920: '1920',
  1940: '1940',
  1960: '1960',
  1980: '1980',
  2000: '2000',
  2023: '2023'
};
  

const Map : React.FC<MapProps> = ({ countries, map_data}) => { 


  
  const YearDataMin_Max = map_data ? getYears(map_data) : [1493,2023];
  const [currentYear, setCurrentYear] = useState( 1493 ) // set initial year to ? 


  const [Mineraldata, setMineralData] = useState({});
  // console.log("set colors", colors); 
  console.log("YearDataMin_Max: ", YearDataMin_Max);

  // // Update data lookup when year changes
  useEffect(() => {
    if (map_data && currentYear) {
      console.log("Updating data lookup for year:", currentYear);
      const updatedMineralData = MineralData(map_data, currentYear);
      setMineralData(updatedMineralData);
     
      // console.log("Updated mineral data:", updatedMineralData);
      // console.log(YearDataMin_Max)
      

    }
  }, [currentYear, map_data]);

  // console.log("Data for current year:", );

function onEachCountry(data: Record<string, any>) {
    return (country: any , layer: any) => {
        const name = country.properties.ADMIN;
        const iso3 = country.properties.ISO_A3;
        // data point displayed is one behind what is need UGH 
        console.log("loaded" ,data)
        //const dataPoint = Number(data[iso3]) ? data : "No data";
        // console.log(layer)
        //console.log(`Country: ${name}, ISO3: ${iso3}, Value: ${mineralValue}`);
        layer.bindPopup(`Country: ${name}<br> ISO3: ${iso3} <br> Data: ${data[iso3] ? data[iso3] : "No data"}`);
    };
}

  const handleSliderChange = (sliderValue: number) => {
    // console.log(sliderValue)
    if (sliderValue  >= 1913){
      setCurrentYear(sliderValue)

    }
    else if((sliderValue  >= 1801) && (sliderValue  <= 1900  )){
      setCurrentYear(1801)

    }
    else if(sliderValue  >= 1701){
      setCurrentYear(1701)

    }
    else if(sliderValue  >= 1601){
      setCurrentYear(1601)

    }
    else if(sliderValue  >= 1493){
      setCurrentYear(1493)

    }
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
       {/* change slider to black out what is before it  */}
        <Slider min ={1493} max= {2023} step={1}  defaultValue={1493} marks = {marks} onChangeComplete={(sliderValue) => handleSliderChange(sliderValue)} />

       
      </div>
      
      


    ); 
};

export default Map;