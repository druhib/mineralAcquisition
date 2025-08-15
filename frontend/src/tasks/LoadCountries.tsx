import countries from "../data/countries.json";

class LoadCountriesTask{
    //const [ASMdata, setData] = useState([]);
    
    load = (setState) => {
        setState(countries); 
        console.log(countries);
    }
    
}; 
export default LoadCountriesTask;