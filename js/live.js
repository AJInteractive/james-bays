$.ajax({
    url: 'https://api.myjson.com/bins/3eugk',
    dataType: "json",
    success: function(data) {
      var element = "";
        for (var i = 0; i < data.length; i++) {
            element += "<div class=\"latest-news-topic \">";
            element += "<a href=\"" + data[i].link + "\">";
            element += "   <h4 class=\"latest-news-topic-link\">" + data[i].title + "<\/h4>";
            element += " <\/a>";
            element += " <p>" + data[i].since + "<\/p>";
            element += " <\/div>";
        }
        $("#home").html(element);
    },
    error: function(err) {
        console.log(err);
    }
});

$.ajax({
    url: '',
    success: function(data) {
        $("nav-topics").html(data.html);
    },
    error: function(err) {
        console.log(err);
    }
});
