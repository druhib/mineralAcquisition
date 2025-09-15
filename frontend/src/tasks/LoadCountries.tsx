import countries from "../../public/data/countries.json";

class LoadCountriesTask{
    
    load = (setState) => {
        setState(countries); 
        // console.log("Loaded countries");
        // console.log(countries);
    }
    
}; 
export default LoadCountriesTask;