#Matthew Ming
#SoftDev1 pd6
#K #13: Echo Echo Echo
#2018-09-27

#import flask, template, request necessities
from flask import Flask, render_template, request
#import functions and dictionary from ErlenmeyerFlasks.py
app = Flask(__name__)

#home page
@app.route("/", methods=["GET"])
def main_page():
    #loads html template
    return render_template("home.html")

@app.route("/auth")
def authenticate():
    #loads html template with username and method data
    return render_template("auth.html",
                           username=request.args["username"],
                           method=request.method
                           )

if __name__ == "__main__":
    app.debug = True
    app.run()
