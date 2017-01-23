var request = require('request');
var util=require("util");
var fs = require('fs');

for (i=0; i < 7; i++) {
    var startTime = Date.now();
    var startDate = new Date(startTime);
    var endTime = new Date(Date.now()).setDate(startDate.getDate()+i);
    var endDate = new Date(endTime);

    var url = 'https://api.meetup.com/2/concierge?key=var request = require('request');
var util=require("util");
var fs = require('fs');

for (i=0; i < 7; i++) {
    var startTime = Date.now();
    var startDate = new Date(startTime);
    var endTime = new Date(Date.now()).setDate(startDate.getDate()+i);
    var endDate = new Date(endTime);

    var url = 'https://api.meetup.com/2/concierge?key=2f5e1d6512231504721f4a535f955&' + 
            'sign=true&photo-host=public&country=us&city=Boston&state=MA&category_id=15&radius=50&' +
            'time=' + startTime + ',' + endTime;

    var html = "";

    request(url, function(err,res,body)
    {
        if (err) {
            //throw err;
        }
        else {
            var events = JSON.parse(body).results;
            html = "<li>" + startDate + "\n";
            for (i = 0; i < events.length; i++)
            {
                var event = events[i];
                html += "<b>" + event.name + "</b>\n";
                if (typeof(event.venue) != "undefined" && event.venue)
                {
                   html += event.venue.city +  ", " + event.venue.address_1 +  "\n"; 
                }
                html += event.description + "\n\n";
            }

            html += "<br/>";
        }

        fs.writeFileSync("events.html", html);
    })
}' + 
            'sign=true&photo-host=public&country=us&city=Boston&state=MA&category_id=34&radius=10&' +
            'time=' + startTime + ',' + endTime;

    var html = "";

    request(url, function(err,res,body)
    {
        if (err) {
            //throw err;
        }
        else {
            var events = JSON.parse(body).results;
            html = "<li>" + startDate + "\n";
            for (i = 0; i < events.length; i++)
            {
                var event = events[i];
                html += "<b>" + event.name + "</b>\n";
                if (typeof(event.venue) != "undefined" && event.venue)
                {
                   html += event.venue.city +  ", " + event.venue.address_1 +  "\n"; 
                }
                html += event.description + "\n\n";
            }

            html += "<br/>";
        }

        fs.writeFileSync("events.html", html);
    })
}