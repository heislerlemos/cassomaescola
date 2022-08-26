const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')


const User = require('./server/model/user');
  


 function initialize(passport , getUserByEmail, getUserById) {
	global.authenticateUser = async(email, password, done) => {
		
		global.user = getUserByEmail(email)

		if (user == null) {
			return done (null, false, {message: 'Não existe utilizador com este email'})
		}

		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user)

			} else {
				return done(null, false, {message: 'A password esta incorrecta '})
			}

		 } catch (e) {
		 	return done(e)

		 }
	}

//passport.use(new LocalStrategy({ use	authenticateUser))
//passport.use(new LocalStrategy({  UsernameField: 'email'}, r.authenticate()));


//passport.serializeUser((user, done) => done (null, user.id))

//passport.deserializeUser((id, done) => {
//	return	done(null, getUserById(id))
	

 //})
  passport.use(new LocalStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


}


module.exports = initialize