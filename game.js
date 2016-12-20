(function() {
	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "words-nl.js";
	head.insertBefore(script, head.childNodes[3]);

	head.innerHTML += "<style>table, th, td {border: 1px solid black; border-collapse: collapse;}</style>"
})() // Initializing

var gameId = 0;
var game1;

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
	
	this.setDisable = function(id, boolean) { // false = Remove attribute disabled, true = Set attribute disabled
		let fields = [this.name + "-" + id + ".0", this.name + "-" + id + ".1", this.name + "-" + id + ".2", this.name + "-" + id + ".3", this.name + "-" + id + ".4", this.name + "-" + id + ".5", this.name + "-" + id + ".6"]
		for (i = 0; i < fields.length; i++) {
			if (boolean == false) {
				document.getElementById(fields[i]).removeAttribute('disabled');
			} else if (boolean == true) {
				document.getElementById(fields[i]).setAttribute('disabled', '');
			}
		}
	}

	this.start = function() {
		document.body.innerHTML += "<table id=\"" + this.name + "\"><tr id=\"" + this.name + "-1.0\"><th><input id=\"" + this.name + "-1.1\" disabled></th><th><input id=\"" + this.name + "-1.2\" disabled></th><th><input id=\"" + this.name + "-1.3\" disabled></th><th><input id=\"" + this.name + "-1.4\" disabled></th><th><input id=\"" + this.name + "-1.5\" disabled></th><th><button id=\"" + this.name + "-1.6\" onclick=\"\" disabled>Check</button></th></tr>   <tr id=\"" + this.name + "-2.0\"><th><input id=\"" + this.name + "-2.1\" disabled></th><th><input id=\"" + this.name + "-2.2\" disabled></th><th><input id=\"" + this.name + "-2.3\" disabled></th><th><input id=\"" + this.name + "-2.4\" disabled></th><th><input id=\"" + this.name + "-2.5\" disabled></th><th><button id=\"" + this.name + "-2.6\" onclick=\"\" disabled>Check</button></th></tr>   <tr><th></th><th></th><th></th><th></th><th></th></tr>   <tr><th></th><th></th><th></th><th></th><th></th></tr>   <tr><th></th><th></th><th></th><th></th><th></th></tr></table>";
		
		let firstLetter = document.getElementById(this.name + "-1.1");
		firstLetter.setAttribute("value", this.wordArray[0]);
		this.setDisable(1, false);
	}
	this.check = function(id) {
		let fields = [this.name + "-" + id + ".0", this.name + "-" + id + ".1", this.name + "-" + id + ".2", this.name + "-" + id + ".3", this.name + "-" + id + ".4", this.name + "-" + id + ".5", this.name + "-" + id + ".6"]
		
	}
	this.set = function(idId, action) { // Example: 3.4 (First attempt, fourth word)
		let id = this.name + "-" + id;
	}

	if (debug == true || word == true) {console.log(this)};
};

window.onload = function() {
	game1 = new LingoGame("game1", true);
	game1.start();
};