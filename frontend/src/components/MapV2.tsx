import React, {useState, useEffect} from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';



interface MapProps {
  countries: any; 
  map_data: any;  
  colors: string[];
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


function getColor(d: any, colors: string[]) {
  // if (d === null || d === undefined) return '#6a6f6bff';
  const value = Number(d);
  return value > 500000000 ? '#010903ff' :
         value > 80000000  ? colors[0] :
         value > 20000000   ? colors[1] :
         value > 1000000  ? colors[2] :
         value > 500000   ? colors[3] :
        //  value > 30000   ? colors[5] :
        //  value > 100000   ? colors[6] :
         value > 100000   ? colors[4] :
         value > 50000  ? colors[5] :
         value > 10000   ? colors[6] :
         value > 5000   ? colors[7] :
         value > 100   ?  colors[8]:
         value > 0      ? colors[9] :
         value === 0    ? '#32a74fff' :
                      '#6a6f6bff';
}

function style(feature: any, data: Record<string, any>, colors: string[]) {


    const iso3 = feature.properties.ISO_A3; 
    const mineralValue = Number(data[iso3]);
    //console.log("Styling feature:", feature.properties.ADMIN, "ISO3:", iso3, "Value:", mineralValue);
  
    console.log("styled data: ", data)

    return {
    fillColor: getColor(mineralValue, colors),
    weight: 2,
    opacity: 0.7,
    color: 'white',
    fillOpacity: 0.7
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
  
// };


// container with countries 

//export const dataConfig : Record< string,MineralConfig> = {
// const Map: React.FC<MapProps> = ({ countries, map_data }) => { 
//const Map: React.FC<MapProps> = ({ countries, map_data, colors }) => { 
const Map : React.FC<MapProps> = ({ countries, map_data , colors}) => { 

  console.log("data", map_data); 
  console.log("set colors", colors)

  
  const YearDataMin_Max = map_data ? getYears(map_data) : {};
  const [currentYear, setCurrentYear] = useState( 1493 ) // set initial year to ? 


  const [Mineraldata, setMineralData] = useState({});
  // console.log("set colors", colors); 

  // // Update data lookup when year changes
  useEffect(() => {
    if (map_data && currentYear) {
      console.log("Updating data lookup for year:", currentYear);
      const updatedMineralData = MineralData(map_data, currentYear);
      setMineralData(updatedMineralData);
     
      console.log("Updated mineral data:", updatedMineralData);
      console.log(YearDataMin_Max)
      

    }
  }, [currentYear, map_data]);

  // console.log("Data for current year:", );

function onEachCountry(data: Record<string, any>) {
    return (country: any , layer: any) => {
        const name = country.properties.ADMIN;
        const iso3 = country.properties.ISO_A3;
        // data point displayed is one behind what is need UGH 
        const dataPoint = Number(data[iso3]) ? data : "No data";
        console.log(layer)
        //console.log(`Country: ${name}, ISO3: ${iso3}, Value: ${mineralValue}`);
        layer.bindPopup(`Country: ${name}<br> ISO3: ${iso3} <br>  `);
    };
}

  const handleSliderChange = (sliderValue: number) => {
    console.log(sliderValue)
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
            style={(feature) => style(feature, Mineraldata, colors)}
            onEachFeature={onEachCountry(Mineraldata)} />
          
        </MapContainer>
       {/* change slider to black out what is before it  */}
        <Slider min ={1493} max= {2023} step={1} defaultValue={1493} marks = {marks} onChangeComplete={(sliderValue) => handleSliderChange(sliderValue) }  />

       
      </div>
      
      


    ); 
};

export default Map;