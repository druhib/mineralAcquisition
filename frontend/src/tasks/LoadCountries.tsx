import { features } from "../data/countries.json";

class LoadCountriesTask{
    //const [ASMdata, setData] = useState([]);
    load = (setState) => {
        setState(features); 
        //console.log(features);
    }
    
}; 
export default LoadCountriesTask;