import { Component }  from "react";
import { createMap, MapApi } from "@foursquare/map-sdk";

import './App.css'
import MapLoading from './components/MapLoading';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router";
import HomePage from './components/HomePage';
import ToolOverview from "./components/ToolOverview";
import Contacts from "./components/Contacts";


export default function App(){
  
  
  return(
    
         <div className = "App" >	
       
            <Navbar />
            <Routes>
              <Route path = "/" element = {<HomePage/>} />
              <Route path = "/about" element = {<ToolOverview/>}/>
              <Route path = "/contacts" element = {<Contacts/>}/>
            </Routes>
            

           
        </div> 

           

			

			

		
    
  )
}




