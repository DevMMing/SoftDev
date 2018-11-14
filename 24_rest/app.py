'''
Matthew Ming 
SoftDev1 pd6
K24 A RESTful Journey Skyward
2018-11-13
'''
from flask import Flask, render_template
from urllib import request, parse
import json

app=Flask(__name__)

@app.route("/")
def root():
    with request.urlopen('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') as response:
        html = response.read()
    info =json.loads(html)
    return render_template("index.html",img=info['url'],text=info['explanation'])
if __name__ == "__main__":
  app.debug = True
  app.run()
