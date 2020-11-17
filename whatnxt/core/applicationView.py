from serviceController import WhatNxtService
from models import Schema
from flask import Flask, request, jsonify
import json

app = Flask(__name__)


@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = "Content-Type, Access-Control-Allow-Headers, Authorization, " \
                                                       "X-Requested-With "
    response.headers['Access-Control-Allow-Methods'] = "POST, GET, PUT, DELETE, OPTIONS"
    return response


@app.route("/")
def hello():
    return "What Nxt!"


@app.route("/whatnxt", methods=["GET"])
def list_whatnxt():
    return jsonify(WhatNxtService().list())


@app.route("/whatnxt", methods=["POST"])
def create_whatnxt():
    return jsonify(WhatNxtService().create(request.get_json()))


@app.route("/whatnxt/<item_id>", methods=["PUT"])
def update_item(item_id):
    return jsonify(WhatNxtService().update(item_id, request.get_json()))


@app.route("/whatnxt/<item_id>", methods=["DELETE"])
def delete_item(item_id):
    return jsonify(WhatNxtService().delete(item_id))


if __name__ == "__main__":
    Schema()
    app.run(debug=True, host='127.0.0.1', port=5000)
