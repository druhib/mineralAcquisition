import { useEffect, useRef } from 'react'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css';
import {MapContainer, GeoJSON, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import PeopleInASM from './../data/PeopleInASM.json'



const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize the map
      mapInstanceRef.current = L.map(mapRef.current).setView([40, 10.0]).setZoom(1.9)
    


      // Add tile layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current)

      function getColor(d) {
        // if (d === null || d === undefined) return '#cccccc';

        return d < 0 ? '#800026' :
              // d > 500  ? '#BD0026' :
              // d > 200  ? '#E31A1C' :
              // d > 100  ? '#FC4E2A' :
              // d > 50   ? '#FD8D3C' :
              // d > 20   ? '#FEB24C' :
              // d > 10   ? '#FED976' :
                          '#ffa0c8ff';


      }

function style(feature) {

        const value = feature.properties.num_people_in_asm;
        console.log('Raw value:', value, 'Type:', typeof value);
        console.log('Color result:', getColor(value));
        return {
            fillColor: getColor(value),
            weight: 2,
            opacity: 0.7,
            color: 'white',
            //dashArray: '3',
            fillOpacity: 0.7
        };
      
    }


      // limit it to only places that have values 
     //console.log(PeopleInASM); 

     // L.geoJSON(PeopleInASM).addTo(mapInstanceRef.current);

      

      // const singleCountryData = {
      //       ...PeopleInASM,
      //       features: PeopleInASM[features]filter(feature => 
      //           feature.properties.Country === "Mexico"  // Change this to any country you want
      //       )
      //   };
      
//       function style(feature) {

//         const value = feature.properties.num_people_in_asm;
//         console.log('Raw value:', value, 'Type:', typeof value);
//         console.log('Color result:', getColor(value));
//         return {
//             fillColor: getColor(value),
//             weight: 2,
//             opacity: 0.7,
//             color: 'white',
//             //dashArray: '3',
//             fillOpacity: 0.7
//         };
      
//     }

//     const validData = {
//     ...PeopleInASM,
//     features: PeopleInASM.features.filter(feature => 
//         feature.properties.num_people_in_asm !== null && 
//         feature.properties.num_people_in_asm !== undefined
//     )
// };

    // console.log('Original features:', PeopleInASM.features.length);
    // console.log('Filtered features:', validData.features.length);
    
    L.geoJson(PeopleInASM, {style: style}).addTo(mapInstanceRef.current);




    } 
  }, [])

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height: '40rem', 
        width: '70rem',
      }} 
    />
  )
}

export default Map