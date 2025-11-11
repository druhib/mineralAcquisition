import { Component }  from "react";
import { createMap, MapApi } from "@foursquare/map-sdk";

import './App.css'
import MapLoading from './components/MapLoading';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router";
import HomePage from './components/HomePage';
import LithiumPage from './components/LithiumPage';


export default function App(){
  
  
  return(
    
         <div className = "App" >	
      
            <Navbar />
            <Routes>
              <Route path = "/" element = {<HomePage/>} />
              <Route path = "/about" element = {<div> About Page </div>}/>
              <Route path = "/maps" element = {<MapLoading />}/>
              <Route path = "/casestudies" element = {<div> <a href="generic.html"></a> </div>}/>
              <Route path = "/contacts" element = {<div> Contacts Page </div>}/>
              {/* <Route path = "/lithium" element = {<div> Contacts Page </div>}/> */}
            </Routes>

           
        </div> 

           

			

			

		
    
  )
}




