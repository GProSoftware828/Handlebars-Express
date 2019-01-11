var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

var people = [
  { name: 'Person1' },
  { name: 'Person2' },
  { name: 'Person3' }
];

app.get('/examples', function (req, res) {
  res.render('home', {
    content: 'This is really somethin',
    published: true,
    people: people,
    reviewQuestion: 'Was my book quality or not?',
    comments: [
      {
        author: "Mike Davids",
        authorComment: "Yes, rounded paragraphs and linked topic flows.",
      },
      {
        author: "Wendy Davis",
        authorComment: "Yes, interesting fictional representation of life."
      }]
  });
});

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});