import { useState, useEffect, use } from "react";
import { Radio } from "antd"
import LoadCountriesTask from "../tasks/LoadCountries";
import Map from "./MapV2";
import { dataConfig } from './dataConfig';


const generateLegendData = (colordata: string[]) => {

const mineralRanges = [
      "+500mil",  // darkest red
      "500mil - 80mil", 
      "20mil - 1mil",
      "1mil - 500k",
      "500k - 100k",
      "100k - 50k",
      "50k - 10k",
      "10k - 5k",
      "5k - 100", 
      "100 - 0",
      'no data reported' //blue
     
    ];


    return colordata.slice(0, mineralRanges.length).map((color, index) => ({
      color: color,
      range: mineralRanges[index]
    }));
  };
    
const MapLoading = () => {

    const [countries, setCountries] = useState([]); 
    const [selectedDataset, setSelectedDataset] = useState("Mineral");
   
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const colordata = ['#010903ff','#4d061b',  '#9a0b28','#d30202', '#ff4721','#fd8d3c','#e8bf44','#fdd83c','#f7e285','#fefaa1','#72b1de' ]
    
    const handleRadioChange = (e: any) => {
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
                // console.log(config.data)
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

          <div id="legend" style ={{ 
            position: 'relative', 
            top: '7.5rem', 
            left:'0.5rem', 
            font: 'Inter'
            }}>
            <h3>Map Legend <br></br>{selectedDataset} tonnes</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 10, font: 'Inter', fontSize: "15px"}}>
              {generateLegendData(colordata).map((item, index) => (

                <li key={index}>
                    <span 
                      style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        backgroundColor: item.color,
                        marginRight: '1rem',
                        verticalAlign: 'middle'
                      }}
                    ></span>
                    {item.range}
                  </li>

              ))}

            </ul>
        </div>
      </div>        
    </div>
  }

        
</div>
                
}; 

export default MapLoading;