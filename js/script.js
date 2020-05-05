
let currentValue = $("#progressbar").width() / $('#progressbar').parent().width() * 100; 

function onePercent() {
	
	currentValue = currentValue + 1;
	$("#progressbar").width(currentValue + "%");
	$("#progressbar").attr('aria-valuenow', currentValue);
	console.log(currentValue);
}

function threePercent() {
	
	currentValue = currentValue + 3;
	$("#progressbar").width(currentValue + "%");
	$("#progressbar").attr('aria-valuenow', currentValue);
	console.log(currentValue);
}
function sevenPercent() {
	
	currentValue = currentValue + 7;
	$("#progressbar").width(currentValue + "%");
	$("#progressbar").attr('aria-valuenow', currentValue);
	console.log(currentValue);
}

function restartProgress () {
	currentValue = 0;
	$("#progressbar").width(currentValue + "%");
	$("#progressbar").attr('aria-valuenow', currentValue);
	console.log(currentValue);
}




function init() { 

   $("#btn1").click(onePercent);
   $("#btn2").click(threePercent);
   $("#btn3").click(sevenPercent);
   $("#restart").click(restartProgress);



  console.log("Скрипт загружен");


}

$(document).ready(init); 