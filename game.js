(function() {
	let head = document.getElementsByTagName('head')[0];
	let script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "words-nl.js";
	head.insertBefore(script, head.childNodes[3]);

	head.innerHTML += "<style>table, th, td {border: 1px solid black; border-collapse: collapse;} .correct {background-color: orange;} .place {border-radius: 50%;background-color: yellow;}input {width: 50px;height: 50px;font-size: 40px;text-align: center;}button {height: 56px;font-size: 30px;}</style>"
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
		document.body.innerHTML += "<table id=\"" + self.name + "\"><tr id=\"" + self.name + "-1.0\"><th><input id=\"" + self.name + "-1.1\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-1.2\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-1.3\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-1.4\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-1.5\" maxlength=\"1\" disabled></th><th><button id=\"" + self.name + "-1.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-2.0\"><th><input id=\"" + self.name + "-2.1\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-2.2\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-2.3\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-2.4\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-2.5\" maxlength=\"1\" disabled></th><th><button id=\"" + self.name + "-2.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-3.0\"><th><input id=\"" + self.name + "-3.1\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-3.2\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-3.3\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-3.4\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-3.5\" maxlength=\"1\" disabled></th><th><button id=\"" + self.name + "-3.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-4.0\"><th><input id=\"" + self.name + "-4.1\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-4.2\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-4.3\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-4.4\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-4.5\" maxlength=\"1\" disabled></th><th><button id=\"" + self.name + "-4.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-5.0\"><th><input id=\"" + self.name + "-5.1\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-5.2\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-5.3\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-5.4\" maxlength=\"1\" disabled></th><th><input id=\"" + self.name + "-5.5\" maxlength=\"1\" disabled></th><th><button id=\"" + self.name + "-5.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr></table>";
		
		let firstLetter = document.getElementById(self.name + "-1.1");
		firstLetter.setAttribute("value", this.wordArray[0]);
		self.setDisable(1, false);
		self.set(self.name + "-1.1", "correct");
		document.getElementById(this.name + "-1.6").onclick = function(){
			self.setDisable(1, true);
			self.setDisable(2, false);
			self.check(1);
		};
		document.getElementById(this.name + "-2.6").onclick = function(){
			self.setDisable(2, true);
			self.setDisable(3, false);
			self.check(2);
		};
		document.getElementById(this.name + "-3.6").onclick = function(){
			self.setDisable(3, true);
			self.setDisable(4, false);
			self.check(3);
		};
		document.getElementById(this.name + "-4.6").onclick = function(){
			self.setDisable(4, true);
			self.setDisable(5, false);
			self.check(4);
		};
		document.getElementById(this.name + "-2.6").onclick = function(){
			self.setDisable(5, true);
			self.check(5);
		};
	}
	this.check = function(id) {
		let fields = [
		self.name + "-" + id + ".1", self.name + "-" + id + ".2", self.name + "-" + id + ".3", self.name + "-" + id + ".4", self.name + "-" + id + ".5"]
		for (i = 0; i < fields.length; i++) {
			if (debug == true || word == true) {console.log("Word field (" + i + "): " + document.getElementById(fields[i]).value)};
			if (document.getElementById(fields[i]).value == self.wordArray[i]) {
				self.set(fields[i], "correct");
			}else if (self.wordArray.indexOf(document.getElementById(fields[i]).value) != -1) {
				self.set(fields[i], "place")
			}
		}
	}
	this.set = function(idId, action) { // Example: 3.4 (First attempt, fourth word), action: Correct: The letter is at the correct place, place: the letter is in the word.
		// let id = self.name + "-" + idId;
		let id = idId;
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