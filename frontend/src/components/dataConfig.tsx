import { MineralConfig } from "./types";

export const dataConfig : Record< string,MineralConfig> = {

 
  Bauxite:{
    label: "Bauxite",
    file_name: "Bauxite_10_11_25.json",
    year_interval: "(1913-2019)"
    
  },
  Cobalt:{
    label: "Cobalt",
    file_name: "Cobalt_tonne_10_11_25.json",
    year_interval: "(1913-2019)"
    
  },
  Copper:{
    label: "Copper",
    file_name: "Copper_complete_10_11_25.json",
    year_interval: "(1493-1900) (1913-2019)"
    
  },
  Manganese:{
    label: "Manganese",
    file_name:"Manganese_10_11_25.json",
    year_interval: "(1913-2019)"
  },
  Nickel:{
    label: "Nickel",
    file_name: "Nickel_tonne_10_22_25.json",
    year_interval: "(1913-2023)"
  },
  Phosphate:{
    label: "Phosphate",
    file_name: "Phosphate_11_6_25.json",
    year_interval: "(1913-2019)"
  }, 
  Lithium:{
    label: "Lithium",
    file_name: "lithium_ore_aggregated_10_22_25.json", 
    year_interval: "(1938-2019)"
  }, 
  Gold:{
    label: "Gold",
    file_name: "Gold_complete_10_11_25.json",
    year_interval: "(1493-1900) (1913-2019)"
    
    }, 
  Iron:{
    label: "Iron",
    file_name:"Iron_checked_10_11_25.json",
    year_interval: "(1913-2019)"
  }, 
  
  Silver: 
  {
    label: "Silver",
    file_name: "Silver_complete_10_22_25.json",
    year_interval: "(1493-1900) (1913-2019)"
  }

};