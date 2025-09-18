import { data } from "react-router";
import ASMdata from "../../public/data/ASM_Workers.json";
import BAUXITEdata from "../../public/data/Bauxite_tonne_1913_2019_British_Geological_Survey.json";
// import COBALTdata from "../../public/data/Cobalt_tonne_1913_2019_British_Geological_Survey.json";

export const dataConfig = {

  //   ASM: {
  //   label: "ASM Workers",
  //   data: ASMdata,
  //   checked: false
  // },
  BAUXITE:{
    label: "Bauxite",
    data: BAUXITEdata,
    checked: false
  }
  // COBALT:{
  //   label: "Cobalt",
  //   data: COBALTdata,
  //   checked: false
  // }

};