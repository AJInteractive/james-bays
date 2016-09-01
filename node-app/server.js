require('dotenv').config();
var express = require('express');
var app = express();
var request = require('request');
var parseString = require('xml2js').parseString;
var cheerio = require('cheerio');

var arr = [];

app.get("/trending-links", function(req, res) {
    request("http://www.aljazeera.com/", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('#nav-topics ul li.top-topics-origin').remove();
            links = $('#nav-topics'); //jquery get all hyperlinks
            // var elements = [];
            // $(links).each(function(i, link) {
            //     elements.push({
            //         title: $(link).text(),
            //         link: $(link).attr('href')
            //     });
            // });
            console.log(links.html());
            res.json({"html":links.html()});
        }
    });
});



app.get("/feed", function(req, res) {
    request(process.env.feed_url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function(err, result) {
                if (err) console.log(err);
                var items = result.rss.channel[0].item;
                console.log(items[1].title[0]);
                console.log(items[1].link[0]);
                console.log(cheerio.load(items[1]['content:encoded'][0])('header figure img').attr('src'));
                console.log(timeSince(new Date(items[1].pubDate[0])));
                for (var i = 0; i < items.length; i++) {
                    arr.push({
                        "title": items[i].title[0],
                        "link": items[i].link[0],
                        "img": cheerio.load(items[i]['content:encoded'][0])('header figure img').attr('src'),
                        "since": timeSince(new Date(items[i].pubDate[0]))
                    });
                }
                res.charset = 'UTF-8';
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(arr));
            });
        }
    });
});
app.listen(8000);

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
