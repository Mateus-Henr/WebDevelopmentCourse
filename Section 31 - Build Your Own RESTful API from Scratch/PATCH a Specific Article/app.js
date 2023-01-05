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

app.route("/articles")
    .get((req, res) =>
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
    })
    .post((req, res) =>
    {
        Article.create(
            {
                title: req.body.title,
                content: req.body.content
            }, (err, article) =>
            {
                if (err)
                {
                    res.send("Couldn't create article: " + err);
                    return;
                }

                res.redirect("/articles");
            });
    })
    .delete((req, res) =>
    {
        Article.deleteMany((err) =>
        {
            if (err)
            {
                res.send("Couldn't delete article: " + err);
                return;
            }

            res.redirect("/articles");
        });
    });

app.route("/articles/:articleTitle")
    .get((req, res) =>
    {
        Article.findOne({title: req.params.articleTitle}, (err, article) =>
        {
            if (!article)
            {
                res.send("Couldn't find the specified article.");
                return;
            }

            res.send(article);
        });
    })
    .put((req, res) =>
    {
        Article.update({title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            {strict: true},
            (err) =>
            {
                if (err)
                {
                    res.send("Couldn't update the article: " + err);
                }

                res.redirect("Successfully updated article.");
            }
        );
    })
    .patch((req, res) =>
    {
        Article.update({title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            {$set: req.body},
            (err) =>
            {
                if (err)
                {
                    res.send("Couldn't update the article: " + err);
                }

                res.redirect("Successfully updated article.");
            }
        );
    })
    .delete((req, res) =>
    {

    });
app.listen(3000, () => console.log('Server listening on port 3000'));
