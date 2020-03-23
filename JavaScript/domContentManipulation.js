function showContentMans(){
	var ul = document.querySelector("ul");
	console.log("********************");
	console.log("textContent: " + ul.textContent);
	console.log("********************");
	console.log("********************");
	console.log("innerHTML: " + ul.innerHTML);
	console.log("********************");	
}

function textContentMan(){
	var tc = document.querySelector("#tc");
	tc.textContent = "<h2>textContent <strong>only</strong> returns the text</h2>"	;
}

function innerHTMLMan(){
	var ih = document.querySelector("#ih");
	ih.innerHTML = "<h2>innerHTML returns the <strong>entire</strong> html</h2>";
}

function main(){
	showContentMans();
	setTimeout(textContentMan, 2000);
	setTimeout(innerHTMLMan, 2000);
}

main();
