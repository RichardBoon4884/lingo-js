(function() {
	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "words-nl.js";
	head.insertBefore(script, head.childNodes[3]);

	head.innerHTML += "<style>table, th, td {border: 1px solid black; border-collapse: collapse;} .correct {background-color: orange;}</style>"
})() // Initializing

var gameId = 0;
var game1;

function LingoGame (name, word, debug) {
	this.id = ++gameId;
	this.name = name;
	var self = this;

	if (debug == true || word == true) {console.log("Game ID:" + self.id)};

	if (word == undefined || word == true) {
		this.word = wordsNL[Math.floor(Math.random() * wordsNL.length)];
		if (debug == true || word == true) {console.log("Random word: " + self.word)};
	} else if (word != undefined || word != true) {
		this.word = word;
		if (debug == true || word == true) {console.log("Own chosen word: " + self.word)};
	};
	this.wordArray = self.word.split("", 5);
	if (debug == true || word == true) {console.log(self.wordArray)};
	
	this.setDisable = function(id, boolean) { // false = Remove attribute disabled, true = Set attribute disabled
		let fields = [self.name + "-" + id + ".0", self.name + "-" + id + ".1", self.name + "-" + id + ".2", self.name + "-" + id + ".3", self.name + "-" + id + ".4", self.name + "-" + id + ".5", self.name + "-" + id + ".6"]
		for (i = 0; i < fields.length; i++) {
			if (boolean == false) {
				document.getElementById(fields[i]).removeAttribute('disabled');
			} else if (boolean == true) {
				document.getElementById(fields[i]).setAttribute('disabled', '');
			}
		}
	}

	this.start = function() {
		document.body.innerHTML += "<table id=\"" + self.name + "\"><tr id=\"" + self.name + "-1.0\"><th><input id=\"" + self.name + "-1.1\" disabled></th><th><input id=\"" + self.name + "-1.2\" disabled></th><th><input id=\"" + self.name + "-1.3\" disabled></th><th><input id=\"" + self.name + "-1.4\" disabled></th><th><input id=\"" + self.name + "-1.5\" disabled></th><th><button id=\"" + self.name + "-1.6\" onclick=\"\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-2.0\"><th><input id=\"" + self.name + "-2.1\" disabled></th><th><input id=\"" + self.name + "-2.2\" disabled></th><th><input id=\"" + self.name + "-2.3\" disabled></th><th><input id=\"" + self.name + "-2.4\" disabled></th><th><input id=\"" + self.name + "-2.5\" disabled></th><th><button id=\"" + self.name + "-2.6\" onclick=\"\" disabled>Check</button></th></tr>   <tr><th></th><th></th><th></th><th></th><th></th></tr>   <tr><th></th><th></th><th></th><th></th><th></th></tr>   <tr><th></th><th></th><th></th><th></th><th></th></tr></table>";
		
		let firstLetter = document.getElementById(self.name + "-1.1");
		firstLetter.setAttribute("value", this.wordArray[0]);
		self.setDisable(1, false);
		self.set(1.1, "correct");
		document.getElementById(this.name + "-1.6").onclick = function(){
			self.setDisable(1, true);
			self.setDisable(2, false);
		};

	}
	this.check = function(id) {
		let fields = [self.name + "-" + id + ".0", self.name + "-" + id + ".1", self.name + "-" + id + ".2", self.name + "-" + id + ".3", self.name + "-" + id + ".4", self.name + "-" + id + ".5", self.name + "-" + id + ".6"]
		
	}
	this.set = function(idId, action) { // Example: 3.4 (First attempt, fourth word), action: Correct: The letter is at the correct place, place: the letter is in the word.
		let id = self.name + "-" + idId;
		if (action == "correct") {
			document.getElementById(id).setAttribute("class", "correct");
		} else if (action == "place") {
			document.getElementById(id).setAttribute("class", "place");
		}
	}

	if (debug == true || word == true) {console.log(self)};
};

window.onload = function() {
	game1 = new LingoGame("game1", true);
	game1.start();
};