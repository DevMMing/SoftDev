f=open("stuff.csv")
data=f.read()
data=data.split("\n")
size=len(data)
newDict=dict()
for x in range(1,size -1):
  lastComma=data[x].rindex(",")
  key=data[x][:lastComma]
  value=data[x][lastComma +1:]
  newDict[key]=value
print (newDict)
f.close()


