import {useState, useEffect} from 'react';

const LoadASMdata = () => {

    const [data, setASMdata] = useState([]);
    
    useEffect(() => {   
        fetch('http://localhost:5000/data_from_csv_pandas'). then(
                    data => {
                        setASMdata(data);
                        console.log(data)
                    }
                )
             
            }
          
        , []); 
}

export default LoadASMdata;