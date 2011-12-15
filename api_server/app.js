var app = require('express').createServer();
app.use(require('express').bodyParser());

//GET
app.get('/', function(req, res){
  res.send('API Server');
});

//GET topics for a particular tag id
app.get('/tags/:id/topics', function(req, res){
    res.send('topic ' + req.params.id);
});

//GET commentary for a particular topic within a tag
app.get('/tags/:id/topic/:topicId', function(req, res){
	var max= req.param('max')||5;
    res.send('topic ' + req.params.id + ' ' + req.params.topicId + ' '+max);
});

//GET all topics associated with a particular tag
app.get('/tag/:id', function (req,res){
res.send({ name: 'Doug Leeds' , topics_count: 4,date: 1323987766000, user:{name:'vinodh',avatar:'http://sp.ask.com/sh/i/a14/ja/avatars/football.png'}});
 });
	//res.send('tag id ' + req.params.id);


//POST - Adding topics for a particular tag
app.post('/tag/:id/topics/create', function(req, res){
  res.send(req.body);
});

//POST - Adding comment for a particular topic
app.post('/tag/:id/topic/:topicId/create', function(req, res){
  res.send(req.body);
});

app.listen(8000);