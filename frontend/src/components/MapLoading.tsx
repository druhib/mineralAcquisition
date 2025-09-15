import React, { useState, useEffect, use } from "react";
import { Radio } from "antd"
import LoadCountriesTask from "../tasks/LoadCountries";
import LoadASMdataTask from "../tasks/LoadASMdata";
import Map from "./MapV2";
import { dataConfig } from './dataConfig';



const MapLoading = () => {

    const [countries, setCountries] = useState([]); 
    const [selectedDataset, setSelectedDataset] = useState("false");
   
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRadioChange = (e) => {
     setSelectedDataset(e.target.value);
  };

     
    useEffect(() => { 
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);

        
        }, []);

        useEffect(() => {
          const loadData = async () => {
            if (!selectedDataset || selectedDataset === "false") return;
            setLoading(true);
            try {
              const config = dataConfig[selectedDataset];
              if (config && config.data) {
                // If you have static imports in config, use them directly
                setData(config.data);
              } else {
                console.error('No data configuration found for:', selectedDataset);
                setData(null);
              }
            } catch (error) {
              console.error("Error loading data:", error);
              setData(null);
            } finally {
              setLoading(false);
            }
          };
          loadData();
        }, [selectedDataset]);


        

    

    return <div> {countries.length === 0 ? <div>Map</div> :
        
      <div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
            <Radio.Group
                value={selectedDataset} 
                onChange={handleRadioChange}
            >
              {Object.keys(dataConfig).map((key) => (
              <div  style = {{display: 'flex', alignItems: 'center', justifyContent: 'left' }}> 
                <Radio key={key} value={key}>
                  {dataConfig[key].label}
                </Radio>
              </div>
              ))}
            </Radio.Group>
        
          <Map 
            countries={countries} 
            map_data={data} 
          />

          <div id="legend" style ={{ position: 'relative', top: '11rem', left:'0.5rem' }}>
            <h3>Map Legend</h3>
            <ul>
              <li><span className="legend-item color-dark-pink"></span> +500000</li>
              <li><span className="legend-item color-dark-red"></span> 500000-100000</li>
              <li><span className="legend-item color-red"></span> 100000-50000 </li>
              <li><span className="legend-item color-orange"></span> 50000-10000</li>
              <li><span className="legend-item color-orange-yellow"></span>10000-5000 </li>
              <li><span className="legend-item color-dark-yellow"></span> 5000-1000</li>
              <li><span className="legend-item color-yellow"></span> 1000-0</li>
              <li><span className="legend-item color-green"></span> default </li> 
            </ul>
        </div>
      </div>        
    </div>
  }

        
</div>
                
}; 

export default MapLoading;