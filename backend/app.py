from flask import Flask, request, jsonify
# from flask_cors import CORS
import json
# from flaskext.mysql import MySQL
from dotenv import load_dotenv
import pandas as pd 

load_dotenv()

app = Flask(__name__)
# CORS(app)
# mysql = MySQL()


@app.route('/data_from_csv_pandas', methods=['POST', 'OPTIONS'])
def get_csv_data_pandas():
    file = './data/ASM_Workers.csv'  # Specify your CSV file path
    df = pd.read_csv(file)
    data = df.to_dict(orient='records') # Converts DataFrame to a list of dictionaries
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)