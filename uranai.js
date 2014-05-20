window.onload = function(){
	var num = Math.floor(Math.random() * 5);
	var res = "";
	switch(num){
		case 0:
			res = "大吉";
			break;
		case 1:
			res = "末吉";
			break;
		case 2:
			res = "吉";
			break;
		case 3:
			res = "中吉";
			break;
		case 4:
			res = "大吉";
			break;
		default:
			
			break;
	}
	document.getElementById("result").innerText = res;

}