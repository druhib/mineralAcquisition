# for the years 2015,2016,2017 and 2028, the values in gold_complete_10_11_25.cvs are in kilogram
#  and must be divided by 1000 to repersent metric tonnnage 


# for the years 1493, 1600, 1700, 1800, 1900, 
# check if the values are in metric tonnage or not


import pandas as pd 

df = pd.read_csv('UpdatedData_10_11_25/Gold_complete_10_11_25.csv')
print(df.head())


print(df.columns)
print('year og')
# print(df["2015"].head())
# print(df["2016"].head())
# print(df["2017"].head())
# print(df["2018"].head())
print(df["1801"].head())



for value in df["2015"]:
    df["2015"] = df["2015"].replace(value, value / 1000)

for value in df["2016"]:
    df["2016"] = df["2016"].replace(value, value / 1000)

for value in df["2017"]:
    df["2017"] = df["2017"].replace(value, value / 1000)

for value in df["2018"]:
    df["2018"] = df["2018"].replace(value, value / 1000)
for value in df["2019"]:
    # print(float(value))
    
    if value != "NaN" or value != '     ':
        df["2019"] = df["2019"].replace(float(value), float(value) / 1000)

for value in df["1493"]:
    df["1493"] = df["1493"].replace(value, value / 1000)
for value in df["1601"]:
    df["1601"] = df["1601"].replace(value, value / 1000)
for value in df["1701"]:
    df["1701"] = df["1701"].replace(value, value / 1000)
for value in df["1801"]:
    df["1801"] = df["1801"].replace(value, value / 1000)

print('year after conversion')
# print(df["2015"].head())
# print(df["2016"].head())
# print(df["2017"].head())
# print(df["2018"].head())
print(df["1801"].head())





df.to_csv('Gold_Complete_02_09_26.csv', index=False)



