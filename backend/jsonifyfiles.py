import pandas as pd 
import json
from json import loads, dumps

file = 'Copper_tonne_complete_British_Geological_Survey.csv'

df = pd.read_csv(file)

df.to_json('Copper_tonne_complete_British_Geological_Survey.json', orient='records', indent=4)









