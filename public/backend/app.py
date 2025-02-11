import os
from flask import Flask, request, jsonify
from pymongo import MongoClient
import bcrypt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection
MONGO_URI = os.environ.get("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["mydatabase"]  # Replace with your actual database name
users_collection = db["users"]

# Route to handle user registration
@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.json
        # Validate required fields
        required_fields = ["name", "phoneNumber", "email", "farmer", "state", "district", "password"]
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"{field} is required"}), 400

        # Check if user already exists
        if users_collection.find_one({"email": data["email"]}):
            return jsonify({"error": "User with this email already exists"}), 400

        # Hash the password
        hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'), bcrypt.gensalt())

        # Save user to MongoDB with hashed password
        user_data = data.copy()
        user_data["password"] = hashed_password.decode('utf-8')
        users_collection.insert_one(user_data)
        
        return jsonify({"message": "User registered successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to handle user login
@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.json
        # Validate required fields
        required_fields = ["identifier", "password"]
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"{field} is required"}), 400

        # Find user by email or phone number
        user = users_collection.find_one({"$or": [{"email": data["identifier"]}, {"phoneNumber": data["identifier"]}]})
        if not user:
            return jsonify({"error": "Invalid email/phone number or password"}), 400

        # Check password
        if not bcrypt.checkpw(data["password"].encode('utf-8'), user["password"].encode('utf-8')):
            return jsonify({"error": "Invalid email/phone number or password"}), 400

        return jsonify({"message": "Login successful"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)