interface MapProps {
  countries: any; // Replace 'any' with the actual GeoJSON type if available
  map_data: any;  // Replace 'any' with the actual data type if available
  colors: string[];
}



export interface MineralConfig {
    label: string 
    data :any 
    colors: string[]
}

// export type DatasetKey = 'BAUXITE' | 'COBALT' | 'COPPER' | 'MANGANESE' | 'MONAZITE' | 'NICKEL' | 'PHOSPHATE';


// export interface CountryData {
//   Country: string;
//   ISO3: string;
//   Years: Record<string, number>; // list of years {"1913": 0.0}
// }
// export interface MineralConfig {
//   label: string;
//   //data: CountryData[] | null; // Array of CountryData objects, or null if not loaded
//   url: string; // S3 URL to fetch data from
// }

// // export interface MineralConfig {
// //   label: string;
// //   data: 
// // }


// // Optional: If you want to type the entire config object
// export type DataConfigMap = Record<DatasetKey, MineralConfig>;