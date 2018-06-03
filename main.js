
var results = document.getElementById("results");
var num;
var input;
var button = document.getElementById("gen");
var numb = "";

function getvalue(){
	input = document.getElementById("user").value;
	return input;
}

function randomNumber(upper){
	return Math.floor(Math.random()*upper) + 1 ;
}



button.addEventListener('click' , function() {
	if(!getvalue() || getvalue() == 0){
	results.innerHTML="<p>Your Have not entered any Value or Length<p>";
    }
	else{
        var counter = 0;
	while(counter<getvalue()){
		num = randomNumber(getvalue());
		numb = numb + num.toString();
                counter += 1;		
	}
	results.innerHTML="<p>Your Password is :<p>" + numb;
	numb = "";
	}
});
