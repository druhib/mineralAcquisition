import pandas as pd 
import json
from json import loads, dumps

file = 'lithium_ore_aggregated_file.csv'

df = pd.read_csv(file)

df.to_json('lithium_ore_aggregated_file.json', orient='records', indent=4)









