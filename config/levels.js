/*
Level text goes in this file
*/
module.exports = function(num){
	switch(num){
		case -1:
			var text = "Use execute <level_no> to view each level separately<br><br>";
			text += "Welcome to level 0 - Points- 13<br>\
			Here is your key 'ctf3iitmandi{level0_flag}' <br>\
			Always Run 'submit &lt;level&gt;'<br><br>\
			\
			Welcome to level 1 - Points- 20<br>\
			<a href='/level1' target='_blank'>This page</a>\
			has some hidden message which is one of the most fundamental truth of computer science [A web developer may disagree].\
			Find out the full key to move to the next level. All you have to do is read between the lines.<br><br>\
			\
			Welcome to level 2 - Points- 50<br>\
			Helen was fond of ciphers and puzzles. One day she came across a pattern \
			in a book that her mother had gifted her. The pattern looked like <a href='img/level2.jpg'>this</a>.\
			Apart from that, while giving her that book, her mother had also given her a string \
			of jumbled letters which did not make any sense then but now Helen had figured them out. This is the string:<br> \
			wnz3ccnguhxc{ZuwyNiNbyMohmbchy}<br>\
			Can you figure out what her mother wanted to say?<br><br>\
			\
			Welcome to level 3 - Points- 120<br>\
			An easy one. The key is inside the file inside this <a href='/lvl3.zip' download>zip file</a> \
			(I guess) at least that is the correct filename I’m \
			not sure about the extension though :P\
			Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}<br><br>\
			\
			Welcome to level 4 - Points- 110<br>\
			Varun was very happy considering the fact that he got an internship in a renowned company called 'Four-Square'. \
			However in order to crack the selection interview he had to solve some really hard puzzles. \
			Also he had to answer the questions without using the letter j as the interviewers hated that letter as well as \
			the company that created j-phones, j-pads, j-pods etc. In one of the puzzles, they gave him a string “SBSBQNQZMAOTLO”, \
			and 2 5X5(i.e. 25 elements) arrays.<br>\
			A:<br>\
			NMVFK<br>\
			XWEGP<br>\
			BDOAS<br>\
			QTZRY<br>\
			CILHU<br>\
			<br>\
			B:<br>\
			XBPDZ<br>\
			KILRG<br>\
			VUFWH<br>\
			QENAS<br>\
			YMOTC<br><br>\
			\
			They said that each of the first letters in the pairs was taken from the first array \
			and the second ones from the other array. Also these letters represent something very abstract and pious. \
			Can you find out what it is? Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}<br><br>\
			\
			Welcome to level 5 - Points- 170<br>\
			A Poster is a great way to advertise an event! \
			And seo machines resembling a human being which are able to \
			replicate certain human movements and functions automatically are going to destroy this website soon.<br><br>\
			\
			Welcome to level 6 - Points- 180<br>\
			On a fine day in January of 1970 Dennis received a message from Ken. \
			The message is in this <a href='l6/stamps.txt' download>file</a>. It contains some data which is in the form of a scalar \
			representation of a very special data type in computers. The 0th elements(or maybe the 1th or the -1th element, \
			if you’re not in India) of  the representation of these values in that data type has a secret message. \
			Can you decode it? [Note: All the letters in the key would be upper-case.].\
			Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}<br><br>\
			\
			Welcome to level 7 - Points- 130<br>\
			Have you seen the website of Akshat Malviya (<a href='https://students.iitmandi.ac.in/~b17003'>https://students.iitmandi.ac.in/~b17003</a> ), \
			One of the other authors have HIDDEN the key on his website somewhere. Can you find it?<br><br>\
			\
			Welcome to level 8 - Points- 160<br>\
			<a href='level-8.zip' download>This zip</a> looks fishy. But it contains something useful for you. \
			The key to this level. Not so easy though. Not so easy though. B1-B7 are in the South Campus. \
			Many other B’s are in the North. But the solution lies in B64. I like hex.<br><br>\
			\
			Welcome to level 9 - Points- 80<br>\
			This is an easy one. Details can be found at /level-nine. \
			Note that you have to enter the key in UPPERCASE LETTERS. Beware, not every element is always useful.. \
			Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}<br><br>\
			\
			Welcome to level 10 - Points- 300<br>\
			Someone has blocked Shreyas' access to EinsteinPy Github repository. \
			Fortunately, the hacker sent him a way to regain access.<br>\
			<a href='img/l-10.png'>This image</a> file has the key. Encryption has been done using OTP.<br>\
			Can you help Shreyas out?<br><br>\
			\
			Welcome to level 11 - Points- 42<br>\
			You recently came to know about 2 malicious servers and hence decided to plant explosive \
			viruses on one of them. You have 1.55 minutes \
			to do so with the help 4 other friends (or strangers). It takes 3 seconds to plant the viruses. \
			There are 5 sys-admins guarding the 2 servers,\
			and the viruses require a password to be planted. What password will you use?<br>\
			The viruses only accept numeric input in the standard flag format of this CTF.<br><br>";
			return text;
		case 0:
			var text = "Welcome to level 0 - Points- 13<br>";
			text += "Here is your key 'ctf3iitmandi{level0_flag}'.<br>\
			Always Run 'submit &lt;level&gt;'";
			return text;
		case 1:
			var text = "Welcome to level 1 - Points- 20<br>";
			text += "This <a href='/level1' >page</a>\
			has some hidden message which is one of the most fundamental truth of computer science [A web developer may disagree].\
			Find out the full key to move to the next level. All you have to do is read between the lines.";
			return text;
		case 2:
			var text = "Welcome to level 2 - Points- 50<br>";
			text += "Helen was fond of ciphers and puzzles. One day she came across a pattern \
			in a book that her mother had gifted her. The pattern looked like <a href='img/level2.jpg'>this</a>.\
			Apart from that, while giving her that book, her mother had also given her a string \
			of jumbled letters which did not make any sense then but now Helen had figured them out. This is the string:<br> \
			wnz3ccnguhxc{ZuwyNiNbyMohmbchy}<br>\
			Can you figure out what her mother wanted to say?";
			return text;
		case 3:
			var text = "Welcome to level 3 - Points- 120<br>";
			text += "An easy one. The key is inside the file inside this <a href='/lvl3.zip' download>zip file</a>. \
			(I guess) at least that is the correct filename I’m \
			not sure about the extension though :P\
			Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}";
			return text;
		case 4:
			var text = "Welcome to level 4 - Points 110<br>";
			text += "Varun was very happy considering the fact that he got an internship in a renowned company called 'Four-Square'. \
			However in order to crack the selection interview he had to solve some really hard puzzles. \
			Also he had to answer the questions without using the letter j as the interviewers hated that letter as well as \
			the company that created j-phones, j-pads, j-pods etc. In one of the puzzles, they gave him a string “SBSBQNQZMAOTLO”, \
			and 2 5X5(i.e. 25 elements) arrays.<br>\
			A:<br>\
			NMVFK<br>\
			XWEGP<br>\
			BDOAS<br>\
			QTZRY<br>\
			CILHU<br>\
			\
			B:<br>\
			XBPDZ<br>\
			KILRG<br>\
			VUFWH<br>\
			QENAS<br>\
			YMOTC<br><br>\
			\
			They said that each of the first letters in the pairs was taken from the first array \
			and the second ones from the other array. Also these letters represent something very abstract and pious. \
			Can you find out what it is? Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}";
			return text;
		case 5:
			var text = "Welcome to level 5 - Points- 170<br>";
			text += "A Poster is a great way to advertise an event! \
			And seo machines resembling a human being which are able to \
			replicate certain human movements and functions automatically are going to destroy this website soon.";
			return text;
		case 6:
			var text = "Welcome to level 6 - Points- 180<br>";
			text += "On a fine day in January of 1970 Dennis received a message from Ken. \
			The message is in this <a href='l6/stamps.txt' download>file</a>. It contains some data which is in the form of a scalar \
			representation of a very special data type in computers. The 0th elements(or maybe the 1th or the -1th element, \
			if you’re not in India) of  the representation of these values in that data type has a secret message. \
			Can you decode it? [Note: All the letters in the key would be upper-case.].\
			Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}";
			return text;
		case 7:
			var text = "Welcome to level 7 - Points- 130<br>";
			text += "Have you seen the website of Akshat Malviya (<a href='https://students.iitmandi.ac.in/~b17003'>https://students.iitmandi.ac.in/~b17003</a> ), \
			One of the other authors have HIDDEN the key on his website somewhere. Can you find it?</a>"
			return text;
		case 8:
			var text = "Welcome to level 8 - Points- 160<br>";
			text += "<a href='level-8.zip' download>This zip</a> looks fishy. But it contains something useful for you. \
			The key to this level. Not so easy though. Not so easy though. B1-B7 are in the South Campus. \
			Many other B’s are in the North. But the solution lies in B64. I like hex.";
			return text;
		case 9:
			var text = "Welcome to level 9 - Points- 80<br>";
			text += "This is an easy one. Details can be found at /level-nine. \
			Note that you have to enter the key in UPPERCASE LETTERS. Beware, not every element is always useful.. \
			Submit the key in the following format (replace &lt;KEY&gt; with the one you found):<br> \
			ctf3iitmandi{&lt;KEY&gt;}";
			return text;
		case 10:
			var text = "Welcome to level 10 - Points- 300<br>";
			text += "Someone has blocked Shreyas' access to EinsteinPy Github repository. \
			Fortunately, the hacker sent him a way to regain access.<br>\
			<a href='img/l-10.png'>This image</a> file has the key. Encryption has been done using OTP.<br>\
			Can you help Shreyas out?";
			return text;
		case 11:
			var text = "Welcome to level 11 - Points- 42<br>";
			text += "You recently came to know about 2 malicious servers and hence decided to plant explosive \
			viruses on one of them. You have 1.55 minutes \
			to do so with the help 4 other friends (or strangers). It takes 3 seconds to plant the viruses. \
			There are 5 sys-admins guarding the 2 servers, \
			and the viruses require a password to be planted. What password will you use? \
			The viruses accept numeric input in the standard flag format of this CTF only.";
			return text;
		default:
			return "Max Level is 11.";
	}
}
