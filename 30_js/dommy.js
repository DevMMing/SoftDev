var fibonacci = function(x){
	var a = 1;
	var b = 0;
	var c = 0;
	if(x==a){
		return a;
	}
	else if(x==b){
		return b;
	}
	else {
		c=a+b;
		b=a;
		a=c;
		return fibonacci(x-1) + fibonacci(x-2);
		
	}
}
var add_item = document.getElementById("b");
	add_item.addEventListener('click',function(){
	var newItem = document.createElement("LI");
	var newContent = document.createTextNode("WORD");
	newItem.appendChild(newContent);
	var currentList = document.getElementById("thelist");
	currentList.appendChild(newItem);
});
/*var show_item = document.getElementsByTagName("LI");
	show_item.addEventListener('mouseover',function(){
	var header= document.getElementById("h");
	header.innerHTML="Hello";
	});*/
//var remove_item = document.getElementsByTagName("LI");
var currentList = document.getElementById("thelist");
	currentList.addEventListener('click',function(){
	//var newItem = document.createElement("LI");
	//var newContent = document.createTextNode("WORD");
	//newItem.appendChild(newContent);
	//var currentList = document.getElementById("thelist");
	currentList.removeChild(remove_item);
});
var add_item = document.getElementById("fb");
	add_item.addEventListener('click',function(){
	var newItem = document.createElement("LI");
	var fibber=Math.floor(Math.random()*35);
	var fibResult=fibonacci(fibber);
	var newContent = document.createTextNode("fib("+fibber.toString()+")="+fibResult.toString());
	newItem.appendChild(newContent);
	var currentList = document.getElementById("thelist");
	currentList.appendChild(newItem);
});
