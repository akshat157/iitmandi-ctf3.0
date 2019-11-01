/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case 0:
			/* Sample hint for level 0 */
			var text = "";
			text += "Use the key in '' and run 'submit 0' (without '') command and put in the key.";
			return text;
		case 1:
			var text = "";
			text += "Inspect the elements! Even though there aren’t any. :P"
			return text;
		case 2:
			var text = "";
			text += "The pattern translates into a terminal command which might be useful for deciphering the string."
			return text;
		case 3:
			var text = "";
			text += "Is xxd -r even a filename?"
			return text;
		case 4:
			var text = "";
			text += "String has been encrypted using a cipher, but which one? Maybe there is a favorite cipher of the company."
			return text;
		case 5:
			var text = "";
			text += "Some files are necessary for website SEO and Facebook doesn’t let you upload malicious files."
			return text;
		case 6:
			var text = "";
			text += "This system of scalar representation may become obsolete in the near future."
			return text;
		case 7:
			var text = "";
			text += "Of course, the key won’t be in plain sight of the visitor. Perhaps, it is inside a box?"
			return text;
		case 8:
			var text = "";
			text += "Version control is a time machine! But somethings can be ignored."
			return text;
		case 9:
			var text = "";
			text += "The key is not in the image."
			return text;
		case 10:
			var text = "";
			text += "Unix's cat can do a lot of things. ;)"
			return text;
		case 11:
			var text = "";
			text += "RUSH B!"
			return text;
		default:
			return "Max Level is 11.";
	}
}
