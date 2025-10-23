// import { data } from "react-router";
// import ASMdata from "../../public/data/ASM_Workers.json";
// import BAUXITEdata from "../../public/data/Bauxite_10_11_25.json";
// import COBALTdata from "../../public/data/Cobalt_tonne_10_11_25.json";
// import COPPERdata from "../../public/data/Copper_complete_10_11_25.json"
// import GOLDdata from "../../public/data/Gold_complete_10_11_25.json"

// import MANGANESEdata from "../../public/data/Manganese_10_11_25.json"
// import MONAZITEdata from "../../public/data/Monazite_checked_10_11_25.json"
// import NICKELdata from "../../public/data/Nickel_tonne_10_22_25.json"
// import PHOSPHATEdata from "../../public/data/Phosphate_10_11_25.json"
// import LITHIUMdata from "../../public/data/lithium_ore_aggregated_10_22_25.json"

// import IRONdata from "../../public/data/Iron_checked_10_11_25.json"
// import SILVERdata from "../../public/data/Silver_complete_10_22_25.json"


import { MineralConfig } from "./types";

export const dataConfig : Record< string,MineralConfig> = {

 
  BAUXITE:{
    label: "Bauxite",
    file_name: "Bauxite_10_11_25.json",
    
  },
  // color scale turns blue --> red --> brown 
  COBALT:{
    label: "Cobalt",
    file_name: "Cobalt_tonne_10_11_25.json",
    
  },
  COPPER:{
    label: "Copper",
    file_name: "Copper_complete_10_11_25.json",
    
  },
  MANGANESE:{
    label: "Manganese",
    file_name:"Manganese_10_11_25.json"

    
  },
  MONAZITE:{
    label: "Monazite",
    file_name: "Monazite_checked_10_11_25.json"
    
  },
  NICKEL:{
    label: "Nickel",
    file_name: "Nickel_tonne_10_22_25.json"
  },
  PHSOPHATE:{
    label: "Phosphate",
    file_name: "Phosphate_10_11_25.json"
  }, 
  LITHIUM:{
    label: "Lithium",
    file_name: "lithium_ore_aggregated_10_22_25.json"
  }, 
  GOLD:{
    label: "Gold",
    file_name: "Gold_complete_10_11_25.json"
    }, 
    IRON:{
      label: "Iron",
      file_name:"Iron_checked_10_11_25.json"
    }, 
   
    SILVER: 
    {
      label: "Silver",
      file_name: "Silver_complete_10_22_25.json"
    }

};