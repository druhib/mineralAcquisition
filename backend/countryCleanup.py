import pandas as pd
import json


#file is used to check if ISO3 are valid countries in the countries geojsonfile
file = "./data/countries.json"
mineralFile = "./data/lithium/lithium_ore_aggregated_file.csv"

with open(file, 'r') as f:
    data = json.load(f)

# Then convert to DataFrame
df = pd.DataFrame(data) 
ISO_CODE_list = []
for i in range(len(df.features)):
    ISO_CODE_list.append(df.features[i]['properties']['ISO_A3'])

print(f'ISO_CODE_list:{ISO_CODE_list}' )
bauxite_df = pd.read_csv(mineralFile,)
# print(bauxite_df['ISO3'])

for element in bauxite_df['ISO3']: 
    if element not in ISO_CODE_list: 
        print(f" not found for {element}\n")
# if bauxite_df['ISO3'].str not in ISO_CODE_list: 
#     print(f" not found for {bauxite_df['ISO3']}/n")




    
