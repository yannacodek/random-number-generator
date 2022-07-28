let btn=document.getElementById('btn');
		let result=document.getElementById('result');
		let minimum=document.getElementById('min').value;
		let maximum=document.getElementById('max').value;

		function randomNumber(){
			let random=Math.floor(Math.random()*maximum);
			if(random<maximum&&random>=minimum){
				result.innerHTML=random;
			}else{
				random=Math.floor(Math.random()*n);
			}
		}