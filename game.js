(function() {
	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'words-nl.js';
	head.appendChild(script);
})() // Initializing

function LingoGame (word, debug) {
	if (word == undefined || word == true) {
		this.word = words[Math.floor(Math.random() * words.length)];
		if (debug == true || word == true) {console.log(this.word)};
	} else if (word != undefined || word != true) {
		this.word = word;
		if (debug == true || word == true) {console.log(this.word)};
	};
	this.wordArray = this.word.split("", 5);
	if (debug == true || word == true) {console.log(this.wordArray)};
	document.body.innerHTML += "<input id=\"" + this + "\">";
	console.log(this);
	console.log(this.constructor.name);
};