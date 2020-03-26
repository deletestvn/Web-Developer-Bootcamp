var body = document.querySelector("body");
var button = document.querySelector("button");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(){
	if(button.textContent === "Pink") button.textContent = "White";
	else button.textContent = "Pink";
	body.classList.toggle("color-changer");
}