import pandas as pd 


file4= "./data/Silver_tonnes_1913_2019_British_Geological_Survey.csv"
file5 = "Silver_1493_1900_10_22_25.csv"

file6 = "./data/Bauxite_tonne_1913_2019_British_Geological_Survey.csv"
file7 = "Gold_1493_1900_condesned_10_11_25.csv"
file8 = "./data/Gold_tonne_1913_2019_British_Geological_Survey.csv"




#large file with many entries 
df1 = pd.read_csv(file4)


# print("org frame: ")

# df1.to_csv("output.csv")


#sum them
group_by_frame = df1.groupby('ISO3').sum(min_count=1)
print(group_by_frame)

# group_by_frame.to_csv('Silver_tonne_1493_1900_reduced_us_bureau_of_commerce_of_mines.csv')




# group_by_frame.replace(0.0, "NaN")

#reset index 
group_by_frame = group_by_frame.reset_index().set_index('ISO3')
# group_by_frame.to_csv("Bauxite_10_11_25.csv")

#new column 
# group_by_frame["1493-1600"] = ''
# group_by_frame["1601-1700"] = ''
# group_by_frame["1701-1800"] = ''
# group_by_frame["1801-1900"] = ''



# print(group_by_frame.head())



#smaller file w/ years : 1493-1600,1601-1700,1701-1800,1801-1900
df2 = pd.read_csv(file5)
print( "smaller file")
print(df2.head())

# df2 = df2.groupby('ISO3').sum(min_count=1)
# # print(df3.head())
# df2 = df2.reset_index().set_index('ISO3')


# #check same type 
# # df3['ISO3'] = df3['ISO3'].astype(str)
# group_by_frame.index = group_by_frame.index.astype(str)



# merge 

merged_df = pd.merge(group_by_frame, df2[['ISO3', '1493-1600','1601-1700','1701-1800','1801-1900' ]], 
                     left_index=True, right_on='ISO3', how='left')

# copper merge b/c only has 1801-1900 data
# merged_df = pd.merge(group_by_frame, df2[['ISO3', '1801-1900']], 
#                      left_index=True, right_on='ISO3', how='left')


print(merged_df.head())

# Update the 1801-1900 column
# merged_df['1801-1900_final'] = merged_df['1801-1900_y'].fillna(merged_df['1801-1900_x'])

# # Clean up columns
# result_df = merged_df.drop(['1801-1900_x', '1801-1900_y'], axis=1)
# result_df = result_df.rename(columns={'1801-1900_final': '1801-1900'})

# new_group_by_frame = merged_df.groupby('ISO3').sum(min_count=1)

# Save to CSV
final_df= merged_df.reset_index(drop=True)


new_group_by_frame = final_df.groupby('ISO3').sum(min_count=1)





column_to_move = final_df.pop("ISO3")
print(column_to_move)
final_df.insert(0, "ISO3", column_to_move)


column2_to_move = final_df.pop("1801-1900")
print("moving 1800")
print(column2_to_move)
final_df.insert(2, "1801", column2_to_move)

column3_to_move = final_df.pop("1701-1800")
print("moving 1701")
print(column3_to_move)
final_df.insert(2, "1701", column3_to_move)

column4_to_move = final_df.pop("1601-1700")
print("moving 1601")
print(column4_to_move)
final_df.insert(2, "1601", column4_to_move)

column5_to_move = final_df.pop("1493-1600")
print("moving 1493")
print(column5_to_move)
final_df.insert(2, "1493", column5_to_move)


final_df.to_csv('Silver_complete_10_22_25.csv', index=False)

 


















