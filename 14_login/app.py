'''
Firefoxes
Addison Huang Matthew Ming 
SoftDev1 pd6
K14 Do I know you?
2018-10-02
'''
import os
from flask import Flask, render_template, session, request,url_for,redirect

app=Flask(__name__)
app.secret_key=os.urandom(32)

@app.route("/", methods=["POST"])
def root():
  #checks if you tried logging out
    try:
        if request.form["submit"] == "logout":
            session.pop("username")
            redirect(url_for(root()))
    except:
        pass
  #if there is a logged in session
    if (("username" in session)):
        print(session["username"])
        return render_template("welcome.html",
                           greeting = "Successful login,",
                           username = session["username"])
  #if there is no logged in session
    else: 
        return render_template("login.html")

@app.route("/auth", methods= ["POST"])
def authenticate():
    username = request.form["username"] #username the user gave
    password = request.form["password"] #password the user gave
    if username != "username": #checks if the username is correct
        return render_template("error.html", 
                               error = "Username not found") #username error if the username is incorrect
    elif password != "password": #checks if the password is correct
        return render_template("error.html",
                             error = "Password not found") #password error if the password is incorrect
    else:
        session["username"] = username
        return render_template("welcome.html",
                           greeting = "Successful login,",
                           username = username) #login if the user and password match

if __name__ == "__main__":
  app.debug = True
  app.run()
