import countries from "../../public/data/countries.json";


class LoadCountriesTask{
    
    load = (setState: any) => {
        setState(countries); 
        console.log("Loaded countries");
        console.log(countries);
    }
    
}; 
export default LoadCountriesTask;