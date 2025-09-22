import pandas as pd 
import json
from json import loads, dumps

file = 'Phosphate_tonne_1913_2019_complete_british_geological_survey.csv'

df = pd.read_csv(file)

df.to_json('Phosphate_tonne_1913_2019_complete_british_geological_survey.csv.json', orient='records', indent=4)









