const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', {useNewUrlParser: true});

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

app.get('/articles', (req, res) =>
{
    Article.find((err, articles) =>
    {
        if (err)
        {
            res.send("Couldn't get the articles: " + err);
            return;
        }

        res.send(articles);
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
