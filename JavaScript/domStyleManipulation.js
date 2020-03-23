console.log("CONNECTED!");
var tag = document.querySelector("h1");

function styleManipulation(){
	setTimeout(function(){tag.classList.add("style-manipulations");}, 1000);
	setTimeout(function(){tag.classList.remove("style-manipulations");}, 2000);
	setTimeout(function(){tag.classList.toggle("style-manipulations");}, 3000);
	setTimeout(function(){tag.classList.toggle("style-manipulations");}, 4000);
}

setInterval(styleManipulation, 4000);