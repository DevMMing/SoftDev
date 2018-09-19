from flask import Flask
app = Flask(__name__)
@app.route("/")
def homepage():
    return "Hello"
@app.route("/snake")
def snake():
    return '<img src="https://cdn2.vectorstock.com/i/thumb-large/46/86/snake-icon-in-modern-minimalist-style-flat-trend-vector-8484686.jpg">'
@app.route("/dog")
def dog():
    return '<img src="https://www.awesomeinventions.com/wp-content/uploads/2015/08/named-dog-breeds-laura-palumbo.jpg">'
if __name__=="__main__":
    app.debug = True
    app.run()
