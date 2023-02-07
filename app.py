from flask import Flask, jsonify, render_template
import pymongo
from pymongo import MongoClient
import smtplib

# # Connect to MongoDB
# client = MongoClient("mongodb://username:password@host:port/")
# db = client.mydatabase

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('./index.html')

def test(): #0
    pass
def show_menu(): #1
    pass
def show_how(): #2
    pass
# def battle_short(): #3
#     pass
def clear_scr(): #3
    pass
def submit(): #4
    pass

functions = {
    0: test,
    1: show_menu,
    2: show_how,
    3: clear_scr,
    4: submit
    # 5: battle_short,
}

def main():
    show_menu()
    
    pass
if __name__ == '__main__':
    app.run(debug=True)

# @app.route("/get_data", methods=["GET"])
# def get_data():
#     # Get data from MongoDB
#     data = db.mycollection.find_one({"tail_number": "ABC123"})
#     return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

# db.mycollection.update_one(
#     {"tail_number": "ABC123"},
#     {"$inc": {"amount": -1}}
# )
# db.mycollection.update_one(
#     {"tail_number": "ABC123"},
#     {"$set": {"status": "maintenance"}}
# )
# to = "projhangarmanager@gmail.com"
# subject = "Plane Maintenance"
# body = "The plane with tail number ABC123 is now in maintenance mode."

# email_text = f"Subject: {subject}\n\n{body}"

# with smtplib.SMTP("smtp.gmail.com", 587) as server:
#     server.ehlo()
#     server.starttls()
#     server.login("hangarmaintenancesoftware@gmail.com", "proj123456")
#     server.sendmail("hangarmaintenancesoftware@gmail.com", to, email_text)