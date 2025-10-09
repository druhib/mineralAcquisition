import pandas as pd 
import json
from json import loads, dumps

file = 'Cobalt_tonne_1913_2019_British_Geological_Survey_complete.csv'

df = pd.read_csv(file)

df.to_json('Cobalt_tonne_1913_2019_British_Geological_Survey_complete.json', orient='records', indent=4)









