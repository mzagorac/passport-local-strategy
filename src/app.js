const express = require("express");
const authRoute = require("./routes/auth");
const session = require("express-session");
const cors = require("cors");
const port = process.env.PORT || 8080;
const app = express();
const { passport } = require("./middlewares/passport");

// console.log(passport);

app.use(cors());

app.use(express.json());
app.use(
  session({ secret: "some secret", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", authRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
