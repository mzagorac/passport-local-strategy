const { Router } = require("express");
const router = new Router();
const { passport } = require("../middlewares/passport");
const { login } = require("../controllers/auth");

router.get("/", login);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    // res.redirect("/");
    res.json({ message: "user logged in" });
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.json({ message: "user logged out" });
});

router.get(
  "/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function (req, res) {
    res.json({ user: req.user });
  }
);

module.exports = router;
