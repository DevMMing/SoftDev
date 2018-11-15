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
    text="https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=40.78834006798032%2C-73.8226318359375%2C40.637925243274374%2C-74.19170379638672&key="
    key="kRAtgnsgZTOsTguZs5C7s5rw3wnAM1Mi"
    textkey=text+key
    response =request.urlopen(textkey)
    html = response.read()
    info =json.loads(html)
    access=info['incidents'][0]#currently only shows the first problem
    imgstuff="https://www.mapquestapi.com/traffic/v2/flow?key="+key+"&mapLat="+str(access['lat'])+"&mapLng="+str(access['lng'])+"&mapHeight=400&mapWidth=400&mapScale=108335"
    description=access['fullDesc']+"It started from " + access['startTime'][11:] + " on " + access['startTime'][:10]+" and is planned to end " + access['endTime'][11:]+" on "+access['endTime'][:10]
    return render_template("index.html",img=imgstuff,text=description)
if __name__ == "__main__":
  app.debug = True
  app.run()
