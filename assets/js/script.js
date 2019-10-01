window.onload = function() {
	var myElement = document.getElementById("text");
	myElement.onmouseover = function () {
		myElement.innerHTML = "New text";
	}
}