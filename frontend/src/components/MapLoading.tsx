import React, { useState, useEffect } from "react";
import LoadCountriesTask from "../tasks/LoadCountries";
import LoadASMdata from "../tasks/LoadASMdata";
import Map from "./MapV2";

const MapLoading = () => {

    const [countries, setCountries] = useState([]); 
    const [ASMdata, setASMdata] = useState([]);
     
    const load = () => {
        const loadCountriesTask = new LoadCountriesTask(); 
        loadCountriesTask.load(setCountries); 
        
    }; 
    useEffect(load, []);

    return <div> {countries.length === 0 ? <div>Map</div> :
        
         <div> 
            <Map countries={countries} />
        </div>}

        
</div>
}; 

export default MapLoading;