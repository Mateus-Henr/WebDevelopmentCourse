//jshint esversion:6

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.set("strictQuery", true);

// This initialization code has to be placed correctly to work properly.
app.use(session({
    secret: process.env.SECRET_STRING, // used to sign the session ID cookie
    resave: false, // forces session to be saved even when unmodified
    saveUninitialized: false // don't save a new, but unmodified session
}));

app.use(passport.initialize(null));
app.use(passport.session(null));

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    facebookId: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser((user, cb) =>
{
    process.nextTick(() =>
    {
        return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
        });
    });
});

passport.deserializeUser((user, cb) =>
{
    process.nextTick(() =>
    {
        return cb(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secrets"
    },
    (accessToken, refreshToken, profile, cb) =>
    {
        console.log(profile);
        User.findOrCreate({googleId: profile.id, username: profile.id}, (err, user) =>
        {
            return cb(err, user);
        });
    }
));

passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/secrets"
    },
    (accessToken, refreshToken, profile, cb) =>
    {
        User.findOrCreate({facebookId: profile.id, username: profile.id}, (err, user) =>
        {
            return cb(err, user);
        });
    }
));

app.get("/", (req, res) =>
{
    res.render("home");
});

app.get("/auth/google",
    passport.authenticate("google", {scope: ["profile", "email"]}));

app.get("/auth/google/secrets",
    passport.authenticate("google", {failureRedirect: "/login"}),
    (req, res) =>
    {
        // Successful authentication, redirect to secrets page.
        res.redirect("/secrets");
    });

app.get("/auth/facebook",
    passport.authenticate("facebook"));

app.get("/auth/facebook/secrets",
    passport.authenticate("facebook", {failureRedirect: "/login"}),
    (req, res) =>
    {
        // Successful authentication, redirect to secrets page.
        res.redirect("/secrets");
    });

app.get("/login", (req, res) =>
{
    res.render("login");
});

app.get("/register", (req, res) =>
{
    res.render("register");
});

app.get("/secrets", (req, res) =>
{
    if (!req.isAuthenticated())
    {
        res.redirect("/login");
        return;
    }

    res.render("secrets");
});

app.get("/logout", (req, res) =>
{
    req.logout((err) =>
    {
        if (err)
        {
            console.log(err);
            return;
        }

        res.redirect('/');
    });
});

app.post("/register", (req, res) =>
{
    User.register({username: req.body.username}, req.body.password)
        .then(() =>
        {
            passport.authenticate("local")(req, res, () =>
            {
                res.redirect("/secrets");
            });
        })
        .catch((err) =>
        {
            console.log(err);
            res.redirect("/register");
        });
});


app.post("/login", passport.authenticate("local", {failureRedirect: '/login'}), (req, res) =>
{
    res.redirect("/secrets");
});

app.listen(3000, () => console.log("Server started on port 3000"));