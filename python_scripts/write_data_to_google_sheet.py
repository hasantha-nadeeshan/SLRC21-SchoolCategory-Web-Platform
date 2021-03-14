import gspread
import pandas as pd 
from oauth2client.service_account import ServiceAccountCredentials
import json
from oauth2client.service_account import ServiceAccountCredentials


# define the scopecd python_
scope = ["https://spreadsheets.google.com/feeds",'https://www.googleapis.com/auth/spreadsheets',"https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"]
# add credentials to the account
creds = ServiceAccountCredentials.from_json_keyfile_name('serviceAccount.json',scope)

# authorize the clientsheet 
client = gspread.authorize(creds)

# get the instance of the Spreadsheet
sheet = client.open('Users Details').sheet1

# Opening JSON file 
f = open('data.json',) 
  
# returns JSON object as  
# a dictionary 
data = json.load(f)

datakeys= [ 'Name of the School', 'Team Name',"Email address of the team captain"]
userData=[[ 'Name of the School', 'Team Name',"Email address of the team captain"]]
for j in data:
    temp=[]
    for i in datakeys:
        temp.append(j[i])
    userData.append(temp)
print(len(data))
print(len(userData))
sheet.insert_rows(userData)

