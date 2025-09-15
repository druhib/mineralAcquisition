import BAUXITEdata from "../../public/data/Bauxite_tonne_1913_2019_British_Geological_Survey.json";

class LoadASMdataTask{
    
    load = (setState) => {
        setState(BAUXITEdata); 
        // console.log("Loaded ASM data");
        //console.log(BAUXITEdata);
    }
    
}; 
export default LoadASMdataTask;