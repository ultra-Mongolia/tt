var span = document.getElementsByTagName('span')[0];
// ++ -> code ajlah bolgond 1 -eer nemegduuleh code
// -- -> code ajlah bolgond 1 -eer bagasah code
var count=0;
function nemeh(){
	count++;
	// count = count + 10;
	span.innerText=count;
	span.style.color = "green";
}
function hasah(){
	count--;
	// count = count + 10;
	span.innerText=count;
	span.style.color = "red";
}
function reset(){
	count=0;
	span.innerText=0;
}