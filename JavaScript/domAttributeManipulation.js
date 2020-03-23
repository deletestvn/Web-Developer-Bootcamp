function changeLink(){
	var link = document.querySelector("a");
	console.log(link.getAttribute("href"));
	link.setAttribute("href", "https://www.udemy.com/");
	link.textContent = "This is now a link to Udemy!"
}

function changeImage(){
	var img = document.querySelector("img");
	img.setAttribute("src", "https://www.freelancinggig.com/blog/wp-content/uploads/2018/10/Programming-Language-used-for-Udemy-1280x720.jpg")
}

setTimeout(changeLink, 2000);
setTimeout(changeImage, 2000);