import { FC, useEffect, useRef, useState } from "react";
import { createMap, MapApi } from "@foursquare/map-sdk";

import './App.css'
// import Map from './components/WorldMap'
import Map from './components/WorldMap';
// import Legend from './components/Legend';
import MapLoading from './components/MapLoading';

const App = () => {
   return(
    // map loading has all components 
    <MapLoading>
    </MapLoading>
    // <Map>

    // </Map>
     
  );
};

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Map />
//       </div>
//     </>
    
      
  
//   )
// }

export default App
