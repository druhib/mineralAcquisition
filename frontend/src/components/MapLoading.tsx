import { useState, useEffect, use } from "react";
import { Radio } from "antd"
import LoadCountriesTask from "../tasks/LoadCountries";
import Map from "./MapV2";
import { dataConfig } from './dataConfig';


// legend numbers
const generateLegendData = (colordata: string[]) => {

const mineralRanges = [

      "+500mil",  // black
      "80mil -500mil",
      "20mil - 80mil", 
      "1mil - 20mil ",
      "500k - 1mil",
      "100k - 500k",
      "50k - 100k",
      "10k - 50k",
      "5k - 10k",
      "100 -5k", 
      "0 - 100",
      'no data reported' //blue
     
    ];

    // mapping to data 
    return colordata.slice(0, mineralRanges.length).map((color, index) => ({
      color: color,
      range: mineralRanges[index]
    }));
  };

// loading map 
const MapLoading = () => {

    const [countries, setCountries] = useState([]); 
    const [selectedDataset, setSelectedDataset] = useState("Mineral");
   
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const colordata = ['#010903ff','#4d061b', '#892c2cff' , '#9a0b28','#d30202', '#ff4721','#fd8d3c','#e8bf44','#fdd83c','#f7e285','#fefaa1','#72b1de' ]
    
    const handleRadioChange = (e: any) => {
     setSelectedDataset(e.target.value); 
  };

    //reading file locally once
    useEffect(() => { 
      const loadCountriesTask = new LoadCountriesTask();
      loadCountriesTask.load(setCountries);

      // fetch('https://mineralexploitationbucket.s3.us-east-1.amazonaws.com/data/countries.json', 
      //       {       method: 'GET',  
      //               headers: {'Content-Type': 'application/json',}    })    
      //               .then(response => response.json())  
      //               .then(countriesdata => {setCountries(countriesdata);
      //               console.log("fetched countries:", countriesdata);    

      //       })    
      //       .catch(error => {  
      //       setCountries([]);   
      //       console.error('Error fetching data:', error);    
      //     });
        
    }, []);
    // set data dynamically based on selected data key
    useEffect(() => {
      const loadData = async () => {
        if (!selectedDataset || selectedDataset === "false") return; // does this make sense? 
        setLoading(true);
        try {
          const config = dataConfig[selectedDataset];
          
          if (config && config.file_name) {
          
            fetch('https://mineralexploitationbucket.s3.us-east-1.amazonaws.com/data/' + config.file_name, 
            {       method: 'GET',  
                    headers: {'Content-Type': 'application/json',}    })    
                    .then(response => response.json())  
                    .then(data => { setData(data);
                    console.log("fetched data", data)

            })    
            .catch(error => {  
            setData(null);   
            console.error('Error fetching data:', error);    });
  
          } else {
            console.log('No data configuration found for:', selectedDataset);
            setData(null);
          }
        }finally {
          setLoading(false);
        }
      };
      loadData();
      }, [selectedDataset]);
    

    return <div> {countries.length === 0 ? <div>Map</div> :
     
      <div style ={{display: "flex", flexDirection:"row", gap:"1rem", textAlign:"left", marginTop: "-3rem"}}>
       {/* buttons  for each mineral */}
        <div style ={{display: "flex", flexDirection:"column", gap:"2rem", textAlign:"left", marginTop: "9rem"}}>
          <Radio.Group
                value={selectedDataset} 
                onChange={handleRadioChange}
            >
            {Object.keys(dataConfig).map((key) => (
              <div  style = {{display: 'flex', alignItems: 'center', justifyContent: 'left',  }}> 
                <Radio key={key} value={key} style = {{fontSize: "14px"}}>  
                  {dataConfig[key].label} <span style = {{fontSize: "9px"}}> {dataConfig[key].year_interval}  </span>  
                </Radio>
              </div>
            ))}
          </Radio.Group>
        
          {/* legend  */}
          <div id="legend" style ={{ font: 'Inter',}}>
            <h3><span style = {{ fontSize:"small"}}> Map Legend (tonnes)</span></h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 10, font: 'Inter', fontSize: "15px"}}>
              {generateLegendData(colordata).map((item, index) => (

                <li key={index}>
                    <span 
                      style={{
                        display: 'inline-block',
                        width: '15px',
                        height: '15px',
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
       {/* map conatiner */}
        <Map 
            key ={selectedDataset}
            countries={countries} 
            map_data={data}
            mineral_name = {selectedDataset}
            
        />
      </div>     
     
  }

        
</div>
                
}; 

export default MapLoading;