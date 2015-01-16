// Your code here
function start() {
	replaceText();
	changeBackgrdcolor();
	getListItems();
	panic();
}

function replaceText () {
var title = document.getElementById("greeting");
console.log(title.innerHTML);
title.innerHTML = "Hello, Planet Earth!";	
}

window.onload = start


function changeBackgrdcolor () {
	var listItem = document.getElementsByTagName("li");
	for (var i = 0; i < listItem.length; i++) {
listItem[i].style.backgroundColor = "yellow";
	}
}


function getListItems () {
var listItem = document.getElementsByTagName("li");
for (var i = 0; i< listItem.length; i++) {
	listItem[i].addEventListener("click",strikeout);
}
}
function strikeout (event) {
	console.log(event.target);
	event.target.setAttribute("class", "selected");
	var pic = document.getElementsByTagName("img");
	console.log("pic-" +  pic);
	pic[0].setAttribute("src", "./images/"+ event.target.innerHTML + ".jpeg"); 
}

function panic () {
	var button = document.getElementById("reset");
	button.addEventListener("click", reset )

}

function reset () {
	var listItem = document.getElementsByTagName("li");
for (var i = 0; i< listItem.length; i++) {
	listItem[i].setAttribute("class","");
	var pic = document.getElementsByTagName("img");
	pic[0].setAttribute("src", "./images/panic.jpeg");
}
}