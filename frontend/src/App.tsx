import { FC, useEffect, useRef, useState } from "react";
import { createMap, MapApi } from "@foursquare/map-sdk";

import './App.css'
import MapLoading from './components/MapLoading';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router";



export default function App(){
  return(
    <div className = "App">
      
      <Navbar />
      <Routes>
        <Route path = "/" element = {<div> Home Page </div>} />
        <Route path = "/about" element = {<div> About Page </div>}/>
        <Route path = "/maps" element = {<MapLoading />}/>
        <Route path = "/casestudies" element = {<div> Case Studies </div>}/>
        <Route path = "/contacts" element = {<div> Contacts Page </div>}/>
      </Routes>
    
      
    </div>
  )
}




