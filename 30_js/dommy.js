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
let show_item_list = document.getElementsByTagName("LI");
	for(var i = 0 ; i< show_item_list.length;i++){
	let string = show_item_list[i].innerHTML;
	show_item_list[i].addEventListener('mouseover',function(){
	var header= document.getElementById("h");
	header.innerHTML=string;
	});
	show_item_list[i].addEventListener('mouseout',function(){
	var header= document.getElementById("h");
	header.innerHTML="Hello World!";
	});
	show_item_list[i].addEventListener('click',function(e){
		let item = e['target'];
		item.remove();
	//})
	})};
//var remove_item = document.getElementsByTagName("LI");
//var currentList = document.getElementById("thelist");
//	currentList.addEventListener('click',function(){
	//var newItem = document.createElement("LI");
	//var newContent = document.createTextNode("WORD");
	//newItem.appendChild(newContent);
	//var currentList = document.getElementById("thelist");
//	currentList.removeChild(remove_item);
//});
var add_item = document.getElementById("fb");
	add_item.addEventListener('click',function(){
	var newItem = document.createElement("LI");
	var fibber=Math.floor(Math.random()*35);
	var fibResult=fibonacci(fibber);
	var newContent = document.createTextNode("fib("+fibber.toString()+")="+fibResult.toString());
	newItem.appendChild(newContent);
	var currentList = document.getElementById("thelist2");
	currentList.appendChild(newItem);
});
