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
};
var add_item = document.getElementById("b");
	add_item.addEventListener('click',function(){
	var newItem = document.createElement("LI");
	var newContent = document.createTextNode("WORD");
	newItem.appendChild(newContent);
	var currentList = document.getElementById("thelist");
	currentList.appendChild(newItem);
});
var show_item_list = document.getElementById("thelist");
	show_item_list.addEventListener('mouseover',function(e){
	let item = e['target'];
	let header=document.getElementById("h");
	header.innerHTML=item.lastChild.data;
	});
	show_item_list.addEventListener('mouseout',function(){
	let header= document.getElementById("h");
	header.innerHTML="Hello World!";
	});
	show_item_list.addEventListener('click',function(e){
	let item = e['target'];
	item.remove();
	});
var add_fib = document.getElementById("fb");
	add_fib.addEventListener('click',function(){
	let currentList = document.getElementById("fiblist");	
	let fibCounter = currentList.childElementCount;
	let newItem = document.createElement("LI");
	var fibResult=fibonacci(fibCounter);
	var newContent = document.createTextNode("fib("+fibCounter.toString()+")="+fibResult.toString());
	newItem.appendChild(newContent);
	currentList.appendChild(newItem);
});
