import ASMdata from "../data/ASMdata.json";

class LoadASMdataTask{
    
    load = (setState) => {
        setState(ASMdata); 
        // console.log("Loaded ASM data");
        // console.log(ASMdata);
    }
    
}; 
export default LoadASMdataTask;