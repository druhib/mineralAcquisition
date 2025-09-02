from flask import Flask, request, jsonify
from flask_cors import CORS
from json import loads, dumps
# from flaskext.mysql import MySQL
from dotenv import load_dotenv
import pandas as pd 



load_dotenv()

app = Flask(__name__)
CORS(app)
# mysql = MySQL()


@app.route('/data_from_csv_pandas', methods=['GET'])
def get_csv_data_pandas():
    file = './data/Bauxite_tonne_1913_2019_British_Geological_Survey.csv'  # Specify your CSV file path
    
    df = pd.read_csv(file)
    df = df.fillna(0)
    data = df.to_dict( orient='index')

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)