import gspread
import pandas as pd 
from oauth2client.service_account import ServiceAccountCredentials
import json


# define the scopecd python_
scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']

# add credentials to the account
creds = ServiceAccountCredentials.from_json_keyfile_name("serviceAccount.json",scope)

# authorize the clientsheet 
client = gspread.authorize(creds)

# get the instance of the Spreadsheet
sheet = client.open('Sri Lanka Robotics Competition- 2021 (Responses)')

# get the first sheet of the Spreadsheet
sheet_instance = sheet.get_worksheet(0)

# get all the records of the data
records_data = sheet_instance.get_all_records()
records_data.reverse()
mails = set()
user_data=[]

for team in records_data:
    if team['Contact Number of the team captain'] not in mails:
        mails.add(team['Contact Number of the team captain'])
        user_data.append(team)

with open('data.json', 'w') as f:
    json.dump(user_data, f)
print(len(user_data))