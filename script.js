let operator;

	let result="";

let main=document.getElementById('btns')
main.onclick=function(e){
	// console.log("yes")


				if(e.path[0].value!="clear" && e.path[0].value!="="){
					result=result+(e.path[0].value)
					document.getElementById('res').innerHTML=result;

					if(e.path[0].value==='+'||e.path[0].value==='-'|| e.path[0].value==='*'||e.path[0].value==='/'){
				 		operator=e.path[0].value;
				 }
				}
				else if((e.path[0].value)==="="){
					Main();

				}
				else if((e.path[0].value)==="clear"){
					clear();
				}
				else{
					alert("Enter Again")
				}




				 
				 

				 
				 


}


function clear(){
	result="";
	document.getElementById('res').innerHTML=result;
}

// function add(v1,v2){


// }
// function subtract(v1,v2) {
// 	// body...
// }
// function multiply(v1,v2){

// }
// function divide(v1,v2) {
// 	// body...
// }

//Convert Binary To decimal

function toDec(value){
  let s=value;
  let n=0;
  
   let p=0;
  for(var i=s.length-1;i>=0;i--){
   
    n=n+ parseInt(s[i])*Math.pow(2,p)
    p++;
  }


  return n;

 
}


//Convert Decimal to Binary 

function toBi(value){
 		let t=value;
 		let s="";
 		while(t!=0){
 			let r=t%2;
 			s=r+s
 			t=Math.floor(t/2);
 		}
  	return s
}


function Main(){

		// body...
		let t=result;

		
		let opindex=result.indexOf(operator);
		let v1=result.slice(0,opindex);
		let v2=result.slice(opindex+1);


		let v1_dec=toDec(v1);
		let v2_dec=toDec(v2);

		let answer;

		switch(operator){
			case '+':
			answer=v1_dec+v2_dec;
			break;

			case '-':
			answer=v1_dec-v2_dec;
			break;

			case '*':
			answer=v1_dec*v2_dec;
			break;

			case '/':
			answer=v1_dec/v2_dec;
			break;
		}

		console.log(answer)
		result=toBi(answer)
		

	
	document.getElementById('res').innerHTML=result;
	result="";
	
}







// console.log(toBi(21));

