import { data } from "react-router";
import ASMdata from "../../public/data/ASM_Workers.json";
import BAUXITEdata from "../../public/data/Bauxite_tonne_1913_2019_British_Geological_Survey.json";
import COBALTdata from "../../public/data/Cobalt_tonne_1913_2019_British_Geological_Survey.json";
import COPPERdata from "../../public/data/Copper_tonne_newcomplete_British_Geological_Survey.json"

import MANGANESEdata from "../../public/data/Manganese_tonne_1913_2019_Complete_british_geological_survey.json"
import MONAZITEdata from "../../public/data/Monazite_tonne_1913_2019_complete_british_geological_survey.json"
import NICKELdata from "../../public/data/Nickel_tonne_1913_2019_complete_british_geological_survey.json"
import PHOSPHATEdata from "../../public/data/Phosphate_tonne_1913_2019_complete_british_geological_survey.json"
import LITHIUMdata from "../../public/data/Lithium/lithium_ore_aggregated_file.json"
import GOLDdata from "../../public/data/Gold_complete.json"
import IRONdata from "../../public/data/Iron_tonne_complete_1913_2019_british_geological_survey.json"
import SILVERdata from "../../public/data/Silver_Complete.json"


interface MineralConfig {
    label: string 
    data :any 
    colors: string[]
}

export const dataConfig : Record< string,MineralConfig> = {

  //   ASM: {
  //   label: "ASM Workers",
  //   data: ASMdata,
  //   checked: false
  // },
  BAUXITE:{
    label: "Bauxite",
    data: BAUXITEdata,
    colors: ["#53351d", "#684121", "#7c4d23", "#905925", "#a36326", "#b76d24", "#ca7720", "#dc811b", "#ed8b12", "#ff9500"]
    
  },
  // color scale turns blue --> red --> brown 
  COBALT:{
    label: "Cobalt",
    data: COBALTdata,
    colors:["#53351d", "#5f2f1f", "#6a292a", "#71223d", "#761a58", "#780f79", "#7500a0", "#6c00c8", "#560aea", "#0033ff"]
    
  },
  COPPER:{
    label: "Copper",
    data: COPPERdata,
    colors: [ "#53351d", "#663915", "#793b10", "#8d3c07", "#a03c00", "#b33900", "#c63500", "#d92d00", "#ec2000", "#ff0000"]
    
  },
  MANGANESE:{
    label: "Manganese",
    data: MANGANESEdata,
    colors:["#53351d", "#63351e", "#733327", "#823036", "#902d49", "#9b2866", "#a42285", "#ab1aaa", "#ae0fd3", "#ae00ff"]
    
  },
  MONAZITE:{
    label: "Monazite",
    data: MONAZITEdata,
    colors:["#53351d", "#6b4624", "#835728", "#99672a", "#ad772b", "#c08729", "#d29726", "#e2a720", "#f1b715", "#ffc800"]
    
  },
  // blue --> red --> brown 
  NICKEL:{
    label: "Nickel",
    data: NICKELdata,
    colors: ["#53351d", "#62301f", "#6d2c29", "#772739", "#7f214f", "#841a6b", "#870f8d", "#8600b3", "#8000da", "#7300ff"]
  },
  PHSOPHATE:{
    label: "Phosphate",
    data: PHOSPHATEdata,
    colors:["#53351d", "#61481e", "#695c23", "#687230", "#5f8744", "#4b9c5f", "#27af81", "#00bfa8", "#00ccd3", "#00d5ff"]
    
  }, 
  LITHIUM:{
    label: "Lithium",
    data: LITHIUMdata,
    colors: ["#53351d", "#663915", "#793b10", "#8d3c07", "#a03c00", "#b33900", "#c63500", "#d92d00", "#ec2000", "#ff0000"]
  }, 
  GOLD:{
    label: "Gold", 
    data: GOLDdata,
    colors: ["#53351d", "#704a23", "#8c5f25", "#a37524", "#b78a20", "#c8a019", "#d4b70d", "#ddce01", "#e2e600", "#e1ff00"]
      
    }, 
    IRON:{
      label: "Iron",
      data: IRONdata,
     colors: ["#53351d", "#684121", "#7c4d23", "#905925", "#a36326", "#b76d24", "#ca7720", "#dc811b", "#ed8b12", "#ff9500"]
    }, 
    // need to add all iron data 

    // change color scale 
    SILVER: 
    {
      label: "Silver",
      data: SILVERdata,
      colors:["#53351d", "#62301f", "#6d2c29", "#772739", "#7f214f", "#841a6b", "#870f8d", "#8600b3", "#8000da", "#7300ff"]
    }

};