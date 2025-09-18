import pandas as pd 

file1 = "./data/Copper_tonne_1801_1900_from_us_department_of_commerce_bureau_of_mines.csv"

file2 = "./data/Copper_tonne_1913_2019_British_Geological_Survey.csv"

#large file with many entries 
df1 = pd.read_csv(file2)
#sum them
group_by_frame = df1.groupby('ISO3').sum()
group_by_frame.replace(0.0, "NaN")

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

final_df.to_csv('Copper_tonne_complete_British_Geological_Survey.csv')




















