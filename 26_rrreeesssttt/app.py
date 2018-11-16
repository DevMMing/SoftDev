'''
Matthew Ming 
SoftDev1 pd6
K25 Getting More REST
2018-11-14
'''
from flask import Flask, render_template
from urllib import request, parse
import json

app=Flask(__name__)

@app.route("/")
def root():
    randomdog="https://dog.ceo/api/breeds/image/random"
    #text="https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=40.78834006798032%2C-73.8226318359375%2C40.637925243274374%2C-74.19170379638672&key="
    #key="kRAtgnsgZTOsTguZs5C7s5rw3wnAM1Mi"
    #textkey=text+key
    dogresp =request.urlopen(randomdog)
    html = dogresp.read()
    doginfo =json.loads(html)
    xkcd="https://xkcd.com/info.0.json"
    xkcdresp=request.urlopen(xkcd)
    html=xkcdresp.read()
    xkcdinfo=json.loads(html)
    joke="http://api.icndb.com/jokes/random"
    jokeresp = request.urlopen(joke)
    html= jokeresp.read()
    jokeinfo=json.loads(html)
    return render_template("index.html",img=doginfo['message'],tlt=xkcdinfo['title'],img2=xkcdinfo['img'],descrip=xkcdinfo['alt'],text=jokeinfo['value']['joke'])
if __name__ == "__main__":
  app.debug = True
  app.run()
