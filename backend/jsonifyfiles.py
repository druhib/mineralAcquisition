import pandas as pd 
import json
from json import loads, dumps

file = 'Silver_complete_10_11_25.csv'

df = pd.read_csv(file)

df.to_json('Silver_complete_10_11_25.json', orient='records', indent=4)









