import pandas as pd 
file = "./data/Silver_1493-1900.csv"

#large file with many entries 
df1 = pd.read_csv(file)



#sum them
group_by_frame = df1.groupby('ISO3').sum(min_count=1)
print(group_by_frame)

group_by_frame.to_csv('Silver_1493-1900_10_22_25.csv')



