console.log("behavior.js is running");



const shoutButton = document.getElementById("say-hello");
const title = document.querySelector(".page-title");

function sayHello() {
	title.textContent = "Hello, nice to meet you!";
}

shoutButton.addEventListener("click", sayHello);


const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

function copyEmail() {
	navigator.clipboard.writeText(email.textContent);
	copyButton.textContent = "Copied!";

	setTimeout(function () {
		copyButton.textContent = "Copy";
	}, 2000);
}

copyButton.addEventListener("click", copyEmail);
