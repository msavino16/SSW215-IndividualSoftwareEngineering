import pandas as pd
df = pd.read_csv('Exam file_2-2.csv', names=['customer_ID', 'gender', 'age', 'annual_income', 'spending_score'])
print(df)

dfspending_score = df.sort_values(by='spending_score')
print(dfspending_score)
dfGenAnn = df.loc[:,['gender','annual_income']]
print(dfGenAnn)
dfGenAnnStats = df.groupby('gender').annual_income.agg(['max','std','mean'])
print(dfGenAnnStats)

df.plot.scatter(x='annual_income', y='age')



