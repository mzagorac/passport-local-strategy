const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const db = require("../db");

passport.use(
  new Strategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) return cb(err);
      if (!user) return cb(null, false);
      if (user.password !== password) return cb(null, false);
      return cb(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.users.findById(id, function (err, user) {
    if (err) return done(err);
    return done(null, user);
  });
});

module.exports = {
  passport,
};
