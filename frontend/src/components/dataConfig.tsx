import { data } from "react-router";
import ASMdata from "../../public/data/ASM_Workers.json";
import BAUXITEdata from "../../public/data/Bauxite_10_11_25.json";
import COBALTdata from "../../public/data/Cobalt_tonne_10_11_25.json";
import COPPERdata from "../../public/data/Copper_complete_10_11_25.json"
import GOLDdata from "../../public/data/Gold_complete_10_11_25.json"

import MANGANESEdata from "../../public/data/Manganese_10_11_25.json"
import MONAZITEdata from "../../public/data/Monazite_checked_10_11_25.json"
import NICKELdata from "../../public/data/Nickel_10_11_25.json"
import PHOSPHATEdata from "../../public/data/Phosphate_10_11_25.json"
import LITHIUMdata from "../../public/data/Lithium/lithium_ore_aggregated_file.json"

import IRONdata from "../../public/data/Iron_checked_10_11_25.json"
import SILVERdata from "../../public/data/Silver_complete_10_11_25.json"


import { MineralConfig } from "./types";

export const dataConfig : Record< string,MineralConfig> = {

  //   ASM: {
  //   label: "ASM Workers",
  //   data: ASMdata,
  //   checked: false
  // },
  BAUXITE:{
    label: "Bauxite",
    data: BAUXITEdata,
    colors: ['#010903ff', "#53351d", "#684121", "#7c4d23", "#905925", "#a36326", "#b76d24", "#ca7720", "#dc811b", "#ff9500", "#32a74fff"]
    
  },
  // color scale turns blue --> red --> brown 
  COBALT:{
    label: "Cobalt",
    data: COBALTdata,
    colors:['#010903ff', "#53351d", "#5f2f1f", "#6a292a", "#71223d", "#761a58", "#780f79", "#7500a0", "#6c00c8", "#560aea", "#32a74fff"]
    
  },
  COPPER:{
    label: "Copper",
    data: COPPERdata,
    colors: ['#010903ff',  "#53351d", "#663915", "#793b10", "#8d3c07", "#a03c00", "#b33900", "#c63500", "#d92d00", "#ec2000", "#32a74fff"]
    
  },
  MANGANESE:{
    label: "Manganese",
    data: MANGANESEdata,
    colors:['#010903ff', "#53351d", "#63351e", "#733327", "#823036", "#902d49", "#9b2866", "#a42285", "#ab1aaa", "#ae0fd3", "#32a74fff"]
    
  },
  MONAZITE:{
    label: "Monazite",
    data: MONAZITEdata,
    colors:['#010903ff', "#53351d", "#6b4624", "#835728", "#99672a", "#ad772b", "#c08729", "#d29726", "#e2a720", "#f1b715", "#32a74fff"]
    
  },
  // blue --> red --> brown 
  NICKEL:{
    label: "Nickel",
    data: NICKELdata,
    colors: ['#010903ff', "#53351d", "#62301f", "#6d2c29", "#772739", "#7f214f", "#841a6b", "#870f8d", "#8600b3", "#8000da", "#32a74fff"]
  },
  PHSOPHATE:{
    label: "Phosphate",
    data: PHOSPHATEdata,
    colors:['#010903ff', "#53351d", "#62301f", "#6d2c29", "#772739", "#7f214f", "#841a6b", "#870f8d", "#8600b3", "#8000da", "#32a74fff"]
    
  }, 
  LITHIUM:{
    label: "Lithium",
    data: LITHIUMdata,
    colors: ['#010903ff', "#53351d", "#663915", "#793b10", "#8d3c07", "#a03c00", "#b33900", "#c63500", "#d92d00", "#ec2000", "#32a74fff"]
  }, 
  GOLD:{
    label: "Gold", 
    data: GOLDdata,
    colors: ['#010903ff', "#53351d", "#704a23", "#8c5f25", "#a37524", "#b78a20", "#c8a019", "#d4b70d", "#ddce01", "#e2e600", "#32a74fff"]
      
    }, 
    IRON:{
      label: "Iron",
      data: IRONdata,
     colors: ['#010903ff', "#53351d", "#684121", "#7c4d23", "#905925", "#a36326", "#b76d24", "#ca7720", "#dc811b", "#ed8b12", "#32a74fff"]
    }, 
    // need to add all iron data 

    // change color scale 
    SILVER: 
    {
      label: "Silver",
      data: SILVERdata,
      colors:['#010903ff', "#53351d", "#62301f", "#6d2c29", "#772739", "#7f214f", "#841a6b", "#870f8d", "#8600b3", "#8000da", "#32a74fff"]
    }

};