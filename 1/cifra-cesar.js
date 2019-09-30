let alphabetDown = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabetUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lengthReplace = 3;

class CifraCesar {

		constructor() {
			this.cript = this.cript.bind(this);
			this.decript = this.decript.bind(this);
			this.convertLetter = this.convertLetter.bind(this);
			this.convertLetter = this.convertLetter.bind(this);
			this.reduceLetterPosition = this.reduceLetterPosition.bind(this);
		}

		cript(msg) {
			if (msg === undefined) {
				return null;
			}
		
			var array = msg.split('');
			var response = '';
			for (var index in array) {
				response += this.convertLetter(array[index]);
			}
		
			return response + lengthReplace;
		}

		decript() {
			return null;
		}

		convertLetter(letter) {
			if (letter === ' ') {
				return ' ';
			}
			var alphabet = alphabetDown;
			var letterPosition = alphabet.indexOf(letter);
	
			if (letterPosition === -1) {
				alphabet = alphabetUp;
				letterPosition = alphabet.indexOf(letter);
			}
			return alphabet[this.reduceLetterPosition(letterPosition)];
		}
		
		reduceLetterPosition(position) {
			var alphabetLength = alphabetUp.length;
			var response = position + lengthReplace;
	
			if (response > alphabetLength) {
				response = response - alphabetLength;
			}
			return response;		
		}
}

module.exports = new CifraCesar();