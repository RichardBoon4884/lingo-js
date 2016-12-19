(function() {
	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "words-nl.js";
	head.insertBefore(script, head.childNodes[3]);
})() // Initializing

var gameId = 0

function LingoGame (name, word, debug) {
	this.id = ++gameId;
	this.name = name;

	if (debug == true || word == true) {console.log("Game ID:" + this.id)};

	if (word == undefined || word == true) {
		this.word = wordsNL[Math.floor(Math.random() * wordsNL.length)];
		if (debug == true || word == true) {console.log("Random word: " + this.word)};
	} else if (word != undefined || word != true) {
		this.word = word;
		if (debug == true || word == true) {console.log("Own chosen word: " + this.word)};
	};
	this.wordArray = this.word.split("", 5);
	if (debug == true || word == true) {console.log(this.wordArray)};
	
	this.start = function() {
		document.body.innerHTML += "<input class=\"" + this.name + "\">";
	}

	if (debug == true || word == true) {console.log(this)};
};

window.onload = function() {
	LingoGame.prototype.global = this;
	var game1 = new LingoGame("game1", true);
	game1.start();
};