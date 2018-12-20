// team unknown -- Britni Canale, Matthew Ming
// SoftDev pd6
// K28 -- Sequential Progression II: Electric Boogaloo
// 2018-12-19
var fact = function(x){
    if(x < 2){
        return 1;
        }
    else{
        return x * fact(x - 1);
        }
}
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
var gcd = function(a,b){
	if(a%b!=0 && b%a!=0){
		if(a>b){
			return gcd(a%b,b);
		}
		else{
			return gcd(a,b%a);
		}
	}
	else{
		if(a>b){
			return b;
		}
		else{
			return a;
		}
	}

}
var randomStudent=function(x){
	var students=["Shelly","Nelson","Raymond","Yang","Julia","Garfield"];
	return students[parseInt(Math.random()*students.length)];
}
var fibclick = function(){
var fibbut = document.getElementById("fib");
var fibber=Math.floor(Math.random()*35)
var fibResult=fibonacci(fibber)
fibbut.innerHTML="fib("+fibber.toString()+")="+fibResult.toString();
console.log(fibbut.innerHTML);
}
fibbut.addEventListener("click",fibclick);
var gcdclick = function(){
var gcdbut = document.getElementById("gcd");
var num1=Math.floor(Math.random()*99);
var num2=Math.floor(Math.random()*99);
var gcdResult=gcd(num1,num2);
gcdbut.innerHTML="gcd of "+num1.toString()+" and "+num2+" is " +gcdResult.toString();
console.log(gcdbut.innerHTML);
}
gcdbut.addEventListener("click",gcdclick);
var randclick = function(){
var randbut=document.getElementById("rand");
randbut.innerHTML=randomStudent();
console.log(randbut.innerHTML);
}
randbut.addEventListener("click",randclick);
