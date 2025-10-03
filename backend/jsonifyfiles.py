import pandas as pd 
import json
from json import loads, dumps

file = 'Silver_Complete.csv'

df = pd.read_csv(file)

df.to_json('Silver_Complete.json', orient='records', indent=4)









