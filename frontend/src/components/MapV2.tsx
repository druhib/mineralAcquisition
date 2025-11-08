import React, {useState, useEffect,useCallback} from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Slider, Popover} from 'antd';
import type { SliderSingleProps} from 'antd';
import { PlayCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import L from 'leaflet';



interface MapProps {
  countries: any; 
  map_data: any;  
  mineral_name:any
}


// function to get min and max years 
function getYearsMinMax(map_data: Record<string, any>) {
  // extracts years from first data key which should be the same all all tables 
    const yearKeys = Object.keys(map_data[0].Years);
    const  min_max = [yearKeys[0], yearKeys[yearKeys.length - 1]]
    
  return  min_max; 

  
}

// function returns all years 
function getYears(map_data: Record<string, any>) {
  // extracts years from first data key which should be the same all all tables 
    const yearKeys = Object.keys(map_data[0].Years);
    
  return  yearKeys; 
} 
  
// orginal map style 
const mapStyle = {
        height: '36rem',
        width: '64rem',
        margin: '0',
    }

// return chloropeth map 
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

// return map style on map 
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

// returns values for each country 
function onEachCountry(feature: any, data: Record<string, any>, layer: any) {

  // console.log("why is data here diff", data)

    const name = feature.properties.ADMIN
    const iso3 = feature.properties.ISO_A3; 
    const mineralValue = Number(data[iso3]);

 
    layer.bindPopup(`Country: ${name}<br> ISO3: ${iso3} <br> Data: ${mineralValue != -1 ? mineralValue : "No data"}`);
    

    
    } 

// returns map data for a spacified year 
function MineralData(map_data: Record<string, any> , year:any ) {
   
  const mineralData: { [key: string]: any } = {};
  map_data.forEach((item: any) => {
    const iso3: any = item.ISO3;
    const yearData = item.Years[year];
    mineralData[iso3] = yearData;

    


     
  })

  return mineralData;
  }
// marks on map 
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
  
//map function 
const Map : React.FC<MapProps> = ({ countries, map_data, mineral_name}) => { 

  //console.log("mineral selected", mineral_name)

  const YearDataMin_Max = map_data ? getYearsMinMax(map_data) : [1493,2023];
  const [currentYear, setCurrentYear] = useState(0) // set initial year to ? 
  const [titleYear, setTitleYear] = useState(0)

  //timer function 
  const listOfYears = map_data ? getYears(map_data) : [];
  const [count, setCount] = useState(0);
  const [startTimer,setStartTimer] = useState(false)
  // const [Mineraldata, setMineralData] = useState<{ [key: string]: any }>({})
  const Mineraldata = map_data && currentYear ? MineralData(map_data, currentYear) : {};


  // timer used for play button 
  useEffect(() => {
    if (startTimer) {
          
      const timerId = setInterval(() => {
        setCount((prev) => {
          // Check if we've reached the end of the years array
          if (prev >= listOfYears.length - 1) {
              // Stop the timer and reset count to 0
              console.log('Timer ended');
              setStartTimer(false);
              return 0;
          }
        setCurrentYear(Number(listOfYears[prev + 1]));
        setTitleYear(Number(listOfYears[prev + 1]))
        // console.log("Timer tick", listOfYears[prev + 1]);
        return prev + 1;

        });
      }, 1250)

        // Cleanup when the component unmounts
    return () => {
      clearInterval(timerId);
    };;
        
  }}, [startTimer, listOfYears.length]);

  const handlePlayClick = () => {
    setStartTimer(true);
  };

  const handlePauseClick= () => {
    setStartTimer(false);
  };

  // handles slider values for data 
  const handleSliderChange = (sliderValue: number) => {
    console.log(sliderValue)
    setTitleYear(sliderValue)
 
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
  
  // website styles / loading
  return ( 
      
    <div >
      {/* title of map  */}
      <div style={{ textAlign: 'center',  fontSize: '1.5rem', fontWeight: 'bold', marginTop: "2.5rem"}}>
        Global Production of <span style ={{textDecoration: 'underline'}}>{mineral_name}</span> in metric tonnes for year <span style ={{textDecoration: 'underline'}}> {titleYear}</span>
      </div>
      
      <div> 
          {/* timer running  */}
        {startTimer && (
          <div>  
              <Slider
              min={1493}
              max={2023}
              step={1}
              defaultValue={1493}
              value = {titleYear}
              marks={marks}
              onChangeComplete={(sliderValue) => handleSliderChange(sliderValue)}
              //value={typeof currentYear === 'number' ? currentYear : 0} // i think this shoulf always be true so not sure why were are checking 
              styles = {{ track: { backgroundColor: 'black'}}}
              />
            <div style ={{position:"relative", left:"-5rem",marginTop: "-1.5rem" }}>  
                <Popover content="Stop Timeline" trigger="hover"> 
                  <CloseCircleFilled style={{ alignContent: 'left',fontSize: '2rem', color: '#08c'}} onClick={handlePauseClick} />
              </Popover>
            </div> 
          </div>

       
        )}
        {/* no timer running  */}
          {!startTimer && (
            
            <div >
              
              <Slider value = {titleYear} min ={1493} max= {2023} step={1}  defaultValue={1493} marks = {marks} onChangeComplete={(sliderValue) => handleSliderChange(sliderValue)} />
          <div style = {{position:"relative", left:"-5rem",marginTop: "-1.5rem"}}>
          <Popover content="Play to flip through the Years" trigger="hover"> 
            <PlayCircleFilled style={{ fontSize: '2rem', color: '#08c' }} onClick={handlePlayClick} />
          </Popover>
          </div>
          </div> 
          )}
          

      </div>
      {/* map container */}
        <div style={{ display: 'block', alignItems: 'right', gap:"1rem" }}> 
        
          <MapContainer
            style={mapStyle}
            center ={[30, 0]}
            zoom={1.7} scrollWheelZoom={true} >
            <GeoJSON 
              key ={currentYear}
              data={countries}
              style={(feature) => style(feature, Mineraldata)}
              onEachFeature={(feature, layer) => onEachCountry(feature, Mineraldata, layer) }
              />
            
          </MapContainer>
        </div>
        
       
      </div>
      
      


    ); 
};

export default Map;