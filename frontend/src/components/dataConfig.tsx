import { data } from "react-router";
import ASMdata from "../../public/data/ASM_Workers.json";
import BAUXITEdata from "../../public/data/Bauxite_tonne_1913_2019_British_Geological_Survey.json";
import COBALTdata from "../../public/data/Cobalt_tonne_1913_2019_British_Geological_Survey.json";
import COPPERdata from "../../public/data/Copper_tonne_complete_British_Geological_Survey.json"

import MANGANESEdata from "../../public/data/Manganese_tonne_1913_2019_Complete_british_geological_survey.json"
import MONAZITEdata from "../../public/data/Monazite_tonne_1913_2019_complete_british_geological_survey.json"
import NICKELdata from "../../public/data/Nickel_tonne_1913_2019_complete_british_geological_survey.json"
import PHOSPHATEdata from "../../public/data/Phosphate_tonne_1913_2019_complete_british_geological_survey.json"

export const dataConfig = {

  //   ASM: {
  //   label: "ASM Workers",
  //   data: ASMdata,
  //   checked: false
  // },
  BAUXITE:{
    label: "Bauxite",
    data: BAUXITEdata,
    
  },
  COBALT:{
    label: "Cobalt",
    data: COBALTdata,
    
  },
  COPPER:{
    label: "Copper",
    data: COPPERdata,
    
  },
  MANGANESE:{
    label: "Manganese",
    data: MANGANESEdata,
    
  },
  MONAZITE:{
    label: "Monazite",
    data: MONAZITEdata,
    
  },
  
  NICKEL:{
    label: "Nickel",
    data: NICKELdata,
    
  },
  CPHSOPHATE:{
    label: "Phosphate",
    data: PHOSPHATEdata,
    
  }

};