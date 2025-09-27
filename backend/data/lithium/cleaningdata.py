import pandas as pd 

file1 = "amblygonite_(tonne)_lithium_ore.csv"
file2 = "eucryptite_lithium_ore.csv"
file3 = "lepidolite_lithium_ore.csv"
file4 = "lithium_minerals_lithium_ore.csv"
file5 = "petalite_lithium_ore.csv"
file6 = "phyllite_lithium_ore.csv"
file7 = "spudomene_lithium_ore.csv"
file8 = "lithium_ore_aggregated_file.csv"
file9 = "single_line_lithium_ore_aggregated_file.csv"

df1 =  pd.read_csv(file1)
df2 = pd.read_csv(file2)
df3 = pd.read_csv(file3)
df4 =  pd.read_csv(file4)
df5 =  pd.read_csv(file5)
df6 = pd.read_csv(file6)
df7 = pd.read_csv(file7)

df8 = pd.read_csv(file8)
df9 = pd.read_csv(file9)
group_by_frame = df8.groupby('ISO3').sum(min_count=1)


df9.to_json('lithium_ore_aggregated_file.json', orient='records', indent=4)






# df5.to_json('petalite_lithium_ore.json', orient='records', indent=4)

# df6.to_json('phyllite_lithium_ore.json', orient='records', indent=4)
# df7.to_json('spudomene_lithium_ore.json', orient='records', indent=4)


#large file with many entries 
#df1 = pd.read_csv(file2)


# print("org frame: ")

# df1.to_csv("output.csv")

'''
#sum them
group_by_frame = df1.groupby('ISO3').sum(min_count=1)
print(group_by_frame)

#group_by_frame.to_csv('Phosphate_tonne_1913_2019_complete_british_geological_survey.csv')




# group_by_frame.replace(0.0, "NaN")

#reset index 
group_by_frame = group_by_frame.reset_index().set_index('ISO3')

#new column 
group_by_frame["1801-1900"] = ''



# print(group_by_frame.head())



#small files 
df2 = pd.read_csv(file1)
print(df2.head())


#check same type 
df2['ISO3'] = df2['ISO3'].astype(str)
group_by_frame.index = group_by_frame.index.astype(str)



# merge 
merged_df = pd.merge(group_by_frame, df2[['ISO3', '1801-1900']], 
                     left_index=True, right_on='ISO3', how='left')

# Update the 1801-1900 column
merged_df['1801-1900_final'] = merged_df['1801-1900_y'].fillna(merged_df['1801-1900_x'])

# Clean up columns
result_df = merged_df.drop(['1801-1900_x', '1801-1900_y'], axis=1)
result_df = result_df.rename(columns={'1801-1900_final': '1801-1900'})



# Save to CSV
final_df= result_df.reset_index(drop=True)
column_to_move = final_df.pop("ISO3")

print(column_to_move)
final_df.insert(0, "IS03", column_to_move)
column2_to_move = final_df.pop("1801-1900")
print("moving 1800")
print("moving 1800", column2_to_move)
final_df.insert(2, "1801", column2_to_move)



final_df.to_csv('Copper_tonne_complete1_British_Geological_Survey.csv', index=False)



'''
















