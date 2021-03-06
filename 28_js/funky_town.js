// team quaffpost -- Matthew Ming, Tianrun Liu
// SoftDev pd6
// K28 -- sequential progression
// 2018-12-18
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