//jshint esversion:6

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/*  Salting
    > This is used in conjunction with the hash function, which is simply a set of random characters that make the hash
    function more complex.
    > The salt is stored in the db together with the hash.
    > "bycrpt" is one of the algorithms that companies use.

    Salt Rounds
    Basically hashing a password with the same set of chars multiple times.
 */

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) =>
{
    res.render("home");
});

app.get("/login", (req, res) =>
{
    res.render("login");
});

app.get("/register", (req, res) =>
{
    res.render("register");
});

app.post("/register", (req, res) =>
{
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        .then((salt) =>
        {
            bcrypt.hash(req.body.password, salt)
                .then((hash) =>
                {
                    const newUser = new User({
                        email: req.body.username,
                        password: hash
                    });

                    newUser.save()
                        .then(() => res.render("secrets"))
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});


app.post("/login", (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username})
        .then((foundUser) =>
        {
            if (foundUser)
            {
                bcrypt.compare(password, foundUser.password)
                    .then((result) =>
                    {
                        if (result)
                        {
                            res.render("secrets");
                        }
                    })
                    .catch((err) => console.log(err));
                return;
            }

            res.redirect("/login");
        })
        .catch((err) => console.log(err));
});

app.listen(3000, function ()
{
    console.log("Server started on port 3000");
});