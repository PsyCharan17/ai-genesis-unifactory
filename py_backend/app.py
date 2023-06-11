import json
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from story import main_story,create_pdf_of_story

app=Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return {"new server":"active"}


@app.route('/storygen',methods=['POST'])
@cross_origin()
def addProduct():
    resp = request.get_json()
    return main_story(resp['prompt'])


@app.route('/storypdf',methods=['POST'])
@cross_origin()
def makestory():
    resp = request.get_json()
    return create_pdf_of_story(resp['storyname'])


if __name__=="__main__":
    app.run(debug=True)
