import pandas as pd 
import json
from json import loads, dumps

file = 'Gold_Complete_02_09_26.csv'

df = pd.read_csv(file)

df.to_json('Gold_Complete_02_09_26.json', orient='records', indent=4)








