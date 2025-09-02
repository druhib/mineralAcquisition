import pandas as pd 
from json import loads, dumps

file = './data/Bauxite_tonne_1913_2019_British_Geological_Survey.csv'  # Specify your CSV file path

df = pd.read_csv(file)

df = df.fillna(0)
print(df.head())
data = df.to_json('Bauxite_tonne_1913_2019_British_Geological_Survey.json', orient='records', indent=4)


# print(jsonify(data))




# print(data)
