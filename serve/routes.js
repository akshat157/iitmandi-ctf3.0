var levels = require('../config/levels.js');
var hints = require('../config/hints.js');
var evaluate = require('../config/evaluate.js');
var User = require('../model/user.js');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		/*
			Comment the next three lines and uncommennt the 4th line to shutdown the contest
		*/ 
		if(contestEnded()) {
				res.send('Contest Ended, reload page.');
				return;

		}
		res.render('index', {
			user: req.user
		});
		// res.redirect('scoreboard');
	});
	 app.get('/signup', function(req, res) {
    	/*
			Comment in this part to close signup.
		*/ 
	
        // render the page and pass in any flash data if it exists
        if(!req.isAuthenticated()){
	        res.render('signup', { errors: req.session.messages || [] });
    	    req.session.messages = [];
    	}
    	else{
    		res.redirect('/');
    	}
    });
	app.post('/signup',passport.authenticate('local-signup',{
		successRedirect: '/',
		failureRedirect: '/signup',
		failureMessage: 'Email already exists or you aren\'t using IIT Mandi email.  '
	}));

	app.post('/login', function(req, res, next) {
		
		if(req.body.email != 'guest@students.iitmandi.ac.in'){
			res.send('0');
			return;
		}
		
		if (!req.isAuthenticated()){
			passport.authenticate('local-login', function(err, user, info) {
				if(err)
					return next(err);
				if(!user)
					return res.send('0');
				/*
					Email verification emails have to send manually as of now, so in you comment the next if condition if you don't 
					want to send verification emails manually
				*/ 
				if(!user.local.verified){
					return res.send({ value : '2'});
				}
				req.login(user, function(err){
	 			   if(err){
	   					return next(err);
	 				}
					return res.send({ value : '1', name : user.local.name });
				});
			})(req, res, next);
		}
		else{
			res.send('0');
		}
	});

	app.post('/execute', isLoggedIn, function(req, res) {
		// render the page and pass in any flash data if it exists
        if(contestEnded()) {
				res.send('Contest Ended, reload page.');
				return;

		}
        if(req.isAuthenticated()){
			/* Comment next two lines post signup starts and before contest starts. You can uncomment the third line after this. */
			console.log(contestStarted());
			if(contestStarted() || req.user.local.email == "test@test") {
				var detail = levels(Number(req.body.level));
	        	res.send(detail);
	        } 
	        else {
	        	res.send("This will work only after email validation happens (2nd November) and CTF starts!");
   			}
    	}
    	else{
    		res.send("You aren't logged in.");
    	}
    });

		app.post('/hints', isLoggedIn, function(req, res) {
	        // render the page and pass in any flash data if it exists
	        
	        if(!contestStarted() && req.user.local.email != "test@test") {
	        	res.send("This will work only after email validation happens (2nd November) and CTF starts!");
	        	return;
	        }
        	if(contestEnded()) {
				res.send('Contest Ended, reload page.');
				return;

 			}
	        if(req.isAuthenticated()){
						var detail = hints(Number(req.body.level));
						if(req.user.local.hints.includes(Number(req.body.level))){
							res.send(detail);
							return;
						}
						// if(req.user.local.hints>=3){
						// 	res.send("Maximum 3 hints allowed. Sorry.");
						// 	return;
						// }
						else{
							User.findOneAndUpdate({'local.email': req.user.local.email}, {$push: {'local.hints' : req.body.level} }, {multi: false }, function(err, user){
					    		if(err || !user){
					        		res.send("Something went wrong.");
						    			console.log(err);
						    	}
					    		else{
											res.send(detail);
											req.user.local.hints.push(req.body.level);
					    		}
					    	});
						}
	    	}
	    	else{
	    		res.send("You aren't logged in.");
	    	}
	    });

	app.post('/evaluate', isLoggedIn, function(req, res) {
    	if(!contestStarted() && req.user.local.email != "test@test") {
	    	res.send("This will work only after email validation happens (2nd November) and CTF starts!");
	    	return;
	    }
        // render the page and pass in any flash data if it exists
        if(contestEnded()) {
			res.send('Contest Ended, reload page.');
			return;

 		}
        if(req.isAuthenticated()){
        					if(req.user.local.levels.includes(Number(req.body.level) )) {
        						res.send("Already accepted.");
        						return;
        					}
							var response = evaluate((req.body.key).trim(), Number(req.body.level));
							if(response){
									//Updating level of user
									var d = new Date();
									// var inc_hint = 0;
									// if(req.user.local.hint_taken) inc_hint = 1;
									var level_score = response;
									console.log(req.user.local.hints);
									if(req.user.local.hints.includes(Number(req.body.level))) level_score-= 0.2*response;
									User.findOneAndUpdate({'local.email': req.user.local.email}, {$push: {'local.levels' : req.body.level}, $set: {'local.time' : d}, $inc: {'local.score': level_score} }, {multi: false }, function(err, user){
										if(err || !user){
												res.send("Something went wrong.");
											console.log(err);
										}
										else{
												res.send("Correct key.<br> You earn a score of " + level_score);
												req.user.local.score += level_score;
												req.user.local.time=new Date();
												req.user.local.levels.push(req.body.level);
										}
									});
								}
							else
								res.send("Incorrect key");
					}
    	else{
    		res.send("You aren't logged in.");
    	}
    });


	app.get('/verify',function(req, res) {
        var key = req.query.key;
				email = key.split(' ')[0];
				hash = key.split(' ')[1];
				User.find({"local.email": email}, function(err, users){
					if(err)
						return next(err);
					if(users[0].local.password.substring(30)==hash){
						User.update({"local.email": email},{$set : {"local.verified": 1}}, function(err, users){
							res.send('Email Verified. <a href="/">Click here.</a>');
					});
				}
					else{
						res.send("Wrong verification!");
					}
				});

  });

	app.get('/level2', isLoggedIn, function(req, res) {
    	res.render('level2');

    });

	app.get('/level1', isLoggedIn, function(req, res) {
        res.render('level1');
    });


    /* 
    	Sample routes for custom levels in separate pages (from 2017 contest).
    	The associated ejs files are availbable in views folder. 
    	Feel free tp remove them. 
	*/
	app.get('/lvl8', isLoggedIn, function(req, res) {
    	res.cookie('admin','false');
    	res.render('lvl8');
    });
	app.post('/l6', function(req, res) {
		if(req.cookies['admin'] == "true") {
			data = []
			data.push(1);
			data.push("Congrats! Flag is wtf{missed_party_yesterday}");
			res.send(data);
		}
		else if(req.body.user != 'admin') {
			data = []
			data.push(1);
			data.push("Logged in! But flag reserved for admin only.");
			res.send(data);
		}
		else {
			data = []
			data.push(0);
			data.push("Sorry wrong admin credentials.");
			res.send(data);
		}
	});

 //   	app.post('/l3', function(req, res) {
 //    	res.send('1');
 //   	});

 //   	app.post('/lvl3', function(req, res) {
 //    	res.send('The key to is level 3 is -> abhigyanrocks');
 //   	});

	// app.get('/l6',function(req, res) {
	// 		res.render('l6');
	// });

	// app.post('/l6', function(req, res) {
	// 	if(req.body.user == "admin"){
	// 		str = req.body.password;
	// 		if(!isNaN(parseFloat(str)) && isFinite(str)){
	// 			data = [];
	// 			data.push(0);
	// 			data.push("Wrong username, password combination.");
	// 			res.send(data);
	// 			return;
	// 		}
	// 		try{
	// 			val = eval("'" + str + "'");
	// 			if(Number(val)){
	// 				data = []
	// 				data.push(1);
	// 				data.push("Logged in.")
	// 				data.push("The key is : securityisamyth")
	// 				res.send(data);
	// 			}
	// 			else{
	// 				data = [];
	// 				data.push(0);
	// 				data.push("Wrong username, password combination.");
	// 				res.send(data);
	// 			}
	// 		}
	// 		catch(e){
	// 			data = [];
	// 			data.push(0);
	// 			data.push("Wrong username, password combination.");
	// 			res.send(data);
	// 		}

	// 	}
	// });

    /* 
    	Sample routes for custom levels ends. 
	*/

	app.get('/scoreboard', function(req, res) {
		// User.find().sort({"local.level":-1, "local.time":1}).exec(function(err, users){
		User.find({}, null, {sort: {"local.score":-1, "local.time":1}}, function(err, users){
			if(err) throw(err);
			else{
		        res.render('scoreboard', {
		        	users: users
		        });
			}
		}).sort({'local.score': -1});
    });

	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
/* 08:30 for November 2 contest. Change after tests are complete! */
function contestStarted() {
	let d = new Date();
	if(d.getUTCDate() == 2) {
		if(d.getUTCHours() == 08) {
			if(d.getUTCMinutes() >= 30) {
				return true;
			}
			else {
				return false;
			}
		}
		else if( d.getUTCHours() > 08) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}

function contestEnded() {
	let d = new Date();
	if(d.getUTCDate() == 2) {
		if(d.getUTCHours() == 16) {
			if(d.getUTCMinutes() >= 30) {
				return true;
			}
			else {
				return false;
			}
		}
		else if( d.getUTCHours() > 16 ) {
			return true;
		}
		else {
			return false;
		}
	}
	else if(d.getUTCDate() > 3) {
		return true;
	}
	else {
		return false;
	}
}

function isLoggedIn(req, res, next) {
	if(contestEnded()) {
	    	res.redirect('/');
	    	return;
	}

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated() && req.user.local.verified) {
		return next();
	}

    // if they aren't redirect them to the home page
    res.redirect('/');
}
