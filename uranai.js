window.onload = function(){
	var num = Math.random() * 5;
	num = Math.floor(num);
	switch(num){
		case 0:
			document.getelementById(result).innerText = "大凶";
			document.getelementById(note).innerText = "大凶";
			break;
		case 1:
			document.getelementById(result).innerText = "末吉";
			document.getelementById(note).innerText = "末吉";
			break;
		case 2:
			document.getelementById(result).innerText = "吉";
			document.getelementById(note).innerText = "吉";
			break;
		case 3:
			document.getelementById(result).innerText = "中吉";
			document.getelementById(note).innerText = "中吉";
			break;
		case 4:
			document.getelementById(result).innerText = "大吉";
			document.getelementById(note).innerText = "大吉";
			break;
		default:
			document.getelementById(result).innerText = "平";
			document.getelementById(note).innerText = "平";
			break;
	}

}