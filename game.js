(function() {
	let head = document.getElementsByTagName('head')[0];
	let headScript = document.getElementsByTagName('script')[0];
	let script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "words-nl.js";
	headScript.insertBefore(script, headScript.childNodes[3]);
	headScript.parentNode.insertBefore(script, headScript.nextSibling);

	head.innerHTML += "<style>table, th, td {border: 1px solid black; border-collapse: collapse;} .correct {background-color: orange;} .place {border-radius: 50%;background-color: yellow;}input {width: 50px;height: 50px;font-size: 40px;text-align: center;}button {height: 56px;font-size: 30px;}.field {width: 56px;}.button {width: 103.317px;}</style>"
})() // Initializing

var gameId = 0;
var game1;

function LingoGame (name, word, debug) {
	this.id = gameId++;
	this.name = name;
	var self = this;

	if (debug == true || word == true) {console.log("Game ID: " + self.id)};

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
		document.body.innerHTML += "<table id=\"" + self.name + "\"><tr id=\"" + self.name + "-1.0\"><th class=\"field\"><input id=\"" + self.name + "-1.1\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-1.2\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-1.3\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-1.4\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-1.5\" maxlength=\"1\" disabled></th><th class=\"button\"><button id=\"" + self.name + "-1.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-2.0\"><th class=\"field\"><input id=\"" + self.name + "-2.1\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-2.2\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-2.3\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-2.4\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-2.5\" maxlength=\"1\" disabled></th><th class=\"button\"><button id=\"" + self.name + "-2.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-3.0\"><th class=\"field\"><input id=\"" + self.name + "-3.1\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-3.2\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-3.3\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-3.4\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-3.5\" maxlength=\"1\" disabled></th><th class=\"button\"><button id=\"" + self.name + "-3.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-4.0\"><th class=\"field\"><input id=\"" + self.name + "-4.1\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-4.2\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-4.3\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-4.4\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-4.5\" maxlength=\"1\" disabled></th><th class=\"button\"><button id=\"" + self.name + "-4.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr>   <tr id=\"" + self.name + "-5.0\"><th class=\"field\"><input id=\"" + self.name + "-5.1\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-5.2\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-5.3\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-5.4\" maxlength=\"1\" disabled></th><th class=\"field\"><input id=\"" + self.name + "-5.5\" maxlength=\"1\" disabled></th><th class=\"button\"><button id=\"" + self.name + "-5.6\" onclick=\"\" maxlength=\"1\" disabled>Check</button></th></tr></table>";
		
		let firstLetter = document.getElementById(self.name + "-1.1");
		firstLetter.setAttribute("value", this.wordArray[0]);
		self.setDisable(1, false);
		self.set(self.name + "-1.1", "correct");
		document.getElementById(this.name + "-1.6").onclick = function(){
			self.setDisable(1, true);
			let result = self.check(1);
			if (result == self.word) {
				if (debug == true || word == true) {console.log("Word correct!")};
				self.endGame("correct");
			} else if (result != self.word) {
				self.setDisable(2, false);
			}
		};
		document.getElementById(this.name + "-2.6").onclick = function(){
			self.setDisable(2, true);
			let result = self.check(2);
			if (result == self.word) {
				if (debug == true || word == true) {console.log("Word correct!")};
				self.endGame("correct");
			} else if (result != self.word) {
				self.setDisable(3, false);
			}
		};
		document.getElementById(this.name + "-3.6").onclick = function(){
			self.setDisable(3, true);
			let result = self.check(3);
			if (result == self.word) {
				if (debug == true || word == true) {console.log("Word correct!")};
				self.endGame("correct");
			} else if (result != self.word) {
				self.setDisable(4, false);
			}
		};
		document.getElementById(this.name + "-4.6").onclick = function(){
			self.setDisable(4, true);
			let result = self.check(4);
			if (result == self.word) {
				if (debug == true || word == true) {console.log("Word correct!")};
				self.endGame("correct");
			} else if (result != self.word) {
				self.setDisable(5, false);
			}
		};
		document.getElementById(this.name + "-5.6").onclick = function(){
			self.setDisable(5, true);
			let result = self.check(5);
			if (result == self.word) {
				if (debug == true || word == true) {console.log("Word correct!")};
				self.endGame("correct");
			} else if (result != self.word) {
				if (debug == true || word == true) {console.log("Word incorrect!")};
				self.endGame("incorrect");
			}
		};
	}
	this.check = function(id) {
		let fields = [self.name + "-" + id + ".1", self.name + "-" + id + ".2", self.name + "-" + id + ".3", self.name + "-" + id + ".4", self.name + "-" + id + ".5"];
		let result;
		for (i = 0; i < fields.length; i++) {
			if (debug == true || word == true) {console.log("Word field (" + id + "." + i + "): " + document.getElementById(fields[i]).value)};
			if (document.getElementById(fields[i]).value == self.wordArray[i]) {
				self.set(fields[i], "correct");
			}else if (self.wordArray.indexOf(document.getElementById(fields[i]).value) != -1) {
				self.set(fields[i], "place")
			}
			if (result == undefined) {
				result = document.getElementById(fields[i]).value;
			} else if (result != undefined) {
				result = result + document.getElementById(fields[i]).value;
			}
		}
		return result;
	}
	this.set = function(idId, action) { // Example: 3.4 (First attempt, fourth word), action: Correct: The letter is at the correct place. Place: the letter is in the word.
		var id = idId;
		if (action == "correct") {
			document.getElementById(id).setAttribute("class", "correct");
		} else if (action == "place") {
			document.getElementById(id).setAttribute("class", "place");
		}
	}
	this.endGame = function(condition) {
		var game = document.getElementById(self.name);
		var element = document.createElement("h2");
		if (condition == "correct") {
			element.innerHTML = "Je hebt het woord geraden!";
			game.parentNode.insertBefore(element, game.nextSibling);
			
		} else if (condition == "incorrect") {
			element.innerHTML = "Helaas, je hebt het woord niet weten te raden.";
			var element1 = document.createElement("p");
			element1.innerHTML = "Het woord was: '" + self.word + "'.";
			game.parentNode.insertBefore(element, game.nextSibling);
			element.parentNode.insertBefore(element1, element.nextSibling);
		}
	}
	if (debug == true || word == true) {console.log(self)};
};

window.onload = function() {
	game1 = new LingoGame("game1", false);
	game1.start();
};