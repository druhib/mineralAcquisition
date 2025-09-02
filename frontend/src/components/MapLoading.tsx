import React, { useState, useEffect } from "react";
import LoadCountriesTask from "../tasks/LoadCountries";
import LoadASMdataTask from "../tasks/LoadASMdata";
import Map from "./MapV2";



const MapLoading = () => {

    const [countries, setCountries] = useState([]); 
    const [ASMdata, setASMdata] = useState([]);

     
    useEffect(() => { 
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
        const loadASMdataTask = new LoadASMdataTask();
        loadASMdataTask.load(setASMdata);
           
        // fetch('http://127.0.0.1:5000/data_from_csv_pandas', 
        // {        method: 'GET',  
        //          headers: {'Content-Type': 'application/json',}    })    
        //          .then(response => response.json())  
        //         .then(data => { setASMdata(data);    

        //          })    
        //          .catch(error => {        
        //         console.error('Error fetching data:', error);    });
            }, []);

    

    return <div> {countries.length === 0 ? <div>Map</div> :
        
         <div> 
            <Map countries={countries} map_data = {ASMdata} />
           
      

            
            
        </div>}

        
</div>
}; 

export default MapLoading;