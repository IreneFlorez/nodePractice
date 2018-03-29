var fs = require('fs');

var project1 = {
    name: "Vytality Health",
    type1: "website, blog",  //mobile app, website, feature
    type2: "company", //xyz
    url: "http://vytality.co",
    github: "none",
    language: "html",  //python, js, node(back-end), jquery(library)
    mvc: "spacecraft"  //flask, expressJS, Django, Jinja2, Ruby on Rails, asp.net(web), bootstrap (front-end), wordpress (theme)
    };

var project2 = {
    name: "Love Performs",
    type1: "blog",  //mobile app, website, blog, feature
    type2: "company", //etc
    url: "http://loveperforms.com",
    github: "none",
    language: "html",  //python, js, node(back-end), jquery(library)
    mvc: "wordpress",  //flask, expressJS, Django, Jinja2, Ruby on Rails, asp.net(web), bootstrap (front-end), wordpress (theme)
    };

var project3 = {
    name: "Quotes",
    type1: "feature",  //mobile app, website, feature
    type2: "randomization", //xyz
    url: "http://www.sfsdatascience.com/quotes.html",
    github: "none",
    language: "js",  //python, js, node(back-end), jquery(library)
    mvc: "none"  //flask, expressJS, Django, Jinja2, Ruby on Rails, asp.net(web), bootstrap (front-end)
    };

var project4 = {
    name: "Stock Recommender",
    type1: "webapp",  //mobile app, website, feature
    type2: "heroku",
    url: "http://elliotrec.herokuapp.com",
    github: "http://www.github.com/aguhob/stockApp",
    language: "python",  //python, js, node(back-end), jquery(library)
    mvc: "flask"  //flask, expressJS, Django, Jinja2, Ruby on Rails, asp.net(web), bootstrap (front-end)
    };

var project5 = {
    name: "Chakras",
    type1: "feature",  //mobile app, website, feature
    type2: "accordian, fade", //xyz
    url: "http://minan.thehiddenweb.com.chakras",
    github: "https://github.com/aguhob/chakras1",
    language: "js, jquery",  //python, js, node(back-end), jquery(library)
    mvc: "none"  //flask, expressJS, Django, Jinja2, Ruby on Rails, asp.net(web), bootstrap (front-end)
    };

var project6 = {
    name: "Email validator",
    type1: "feature",  //mobile app, website, feature
    type2: "validation", //xyz
    url: "http://minan.thehiddenweb.net/email/",
    github: "https://github.com/aguhob/emailValidator",
    language: "js, jquery",  //python, js, node(back-end), jquery(library)
    mv: "none"  //flask, expressJS, Django, Jinja2, Ruby on Rails, asp.net(web), bootstrap (front-end)
    };

var project7 = {
    name: 'Depression AI',
    type1: 'webapp',
    type2: 'heroku',
    url: 'http://vytality.herokuapp.com',
    github: 'https://github.com/aguhob/depressionAI',
    language: 'js',
    mvc: 'flask'
    };


var master = {
    data: [project1, project2, project3, project4, project5, project6, project7],
    favoriteFunction: function () {console.log("Hello");}
}

master = JSON.stringify(master);


fs.writeFileSync('database.json', master);
  

//Read text from database and stores it as a string into text variable.
var text = fs.readFileSync('database.json', 'utf8');

var actualObject = JSON.parse(text);

console.log(actualObject.data[0].name);

//var actualObject = JSON.parse(master, 'utf8');

//console.log(actualObject);