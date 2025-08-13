import React,{useState, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {MapContainer, GeoJSON, TileLayer} from 'react-leaflet';
import PeopleInASM from './../data/PeopleInASM.json'
// import './Map.css';



const Map = ()=>{
    

    const [onselect, setOnselect] = useState({});
    const [geoJSON, setGeoJSON] = useState(null);

    useEffect(() => {
    // Fetch the GeoJSON data
    try {
        console.log('Loaded GeoJSON data:', PeopleInASM);
        setGeoJSON(PeopleInASM);
        } 
        catch (error) {
        console.error('Error loading GeoJSON data:', error);
    }
    }, []);

    /* function determining what should happen onmouseover, this function updates our state*/
    const highlightFeature = (e=> {
        var layer = e.target;
        const { County, Total, Male, Female, Intersex, Desnity } = e.target.feature.properties;
        setOnselect({
            county:County,
            total:Total,
            male:Male,
            female:Female,
            intersex:Intersex,
            density: Desnity
        });
        layer.setStyle({
            weight: 1,
            color: "black",
            fillOpacity: 1
        });
    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    const resetHighlight= (e =>{
        setOnselect({});
        e.target.setStyle(style(e.target.feature));
    })

    const onEachFeature= (feature, layer)=> {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
            });
        }

    const getColor = (d => {
        //console.log(getColor(d));
        return (d) < 0
            ? 'rgb(128, 0, 38)'
            : '#47cb23ff';
    })
        
    
    const style = (feature => {
        //console.log(typeof parseInt(feature.properties.num_people_in_asm))
        //console.log(getColor(parseInt(feature.properties.num_people_in_asm)))
        return ({
            
            fillColor: getColor(parseInt(feature.properties.num_people_in_asm)),
            weight: 1,
            opacity: 1,
            color: 'white',
            // dashArray: '2',
            fillOpacity: 0.7
        });
    });


    const mapStyle = {
        height: '40rem',
        width: '70rem',
        margin: '0 auto',
    }

    //console.log('PeopleInASM', PeopleInASM);

    return(
         <div className='container'>
            <div className="header">
            <h2 className='heading'>World Map</h2>
            <p className="text-muted">A choropleth map displaying Density of workers in ASM by country</p></div>
            <div className="">
                <div className="">
                <MapContainer
                center ={[40, 10]}
                zoom={2} scrollWheelZoom={true} style={mapStyle}>
                    <TileLayer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                   {
                    <GeoJSON data={PeopleInASM}
                    style={style} 
                    onEachFeature={onEachFeature}/>
                    }
                    
                </MapContainer>
                </div>
            </div>
        </div>

    )
}


export default Map;