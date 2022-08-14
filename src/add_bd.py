import sqlalchemy
import pandas as pd

engine = sqlalchemy.create_engine('mysql+pymysql://cl200147:cl*24032005@143.106.241.3/cl200147')
# ("server=143.106.241.3;port=3306;User ID=cl200147; database=cl200147; password=cl*24032005; SslMode = none");

data = {ia: []}
pd.read_sql_table('psicopatoLog', engine)
# print(df)

df.to_sql(
    
)


""" import pyodbc

ConnectionString  = "DRIVER={SQL Server}; SERVER=143.106.241.3; DATABASE=cl200147; OPTION=3;"


cone = pyodbc.connect(ConnectionString) """