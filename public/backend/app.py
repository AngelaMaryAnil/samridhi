import os
from flask import Flask, request, jsonify
from pymongo import MongoClient
import bcrypt
from flask_cors import CORS
from protonmail import ProtonMail
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection
MONGO_URI = os.environ.get("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["mydatabase"]  # Replace with your actual database name
users_collection = db["users"]

# SMTP configuration
SMTP_SERVER = "smtp.protonmail.com"
SMTP_PORT = 587
USERNAME = os.environ.get("PROTONMAIL_USERNAME")
PASSWORD = os.environ.get("PROTONMAIL_PASSWORD")

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

        # Remove password from user data before sending response
        user_data = {
            "name": user["name"],
            "phoneNumber": user["phoneNumber"],
            "email": user["email"],
            "farmer": user["farmer"],
            "state": user["state"],
            "district": user["district"]
        }
        print("User data:", user_data)
        return jsonify({"message": "Login successful", "user": user_data}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to handle contact form submission
@app.route("/contact", methods=["POST"])
def contact():
    try:
        data = request.json
        # Validate required fields
        required_fields = ["name", "email", "subject", "message"]
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"{field} is required"}), 400

        # Send email using ProtonMail
        proton = ProtonMail()
        proton.login(USERNAME, PASSWORD)
         # Send to your own email
        subject= data["subject"]

        body = f"Name: {data['name']}\nEmail: {data['email']}\n\nMessage:\n{data['message']}"

        new_message = proton.create_message(
            recipients=[USERNAME],
            subject=data["subject"],
            body=f"Name: {data['name']}\nEmail: {data['email']}\n\nMessage:\n{data['message']}"
        )

        sent_message = proton.send_message(new_message)
       

        return jsonify({"message": "Message sent successfully"}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)