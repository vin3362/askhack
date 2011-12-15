var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('API Server');
});

app.get('/tags/:id/topics', function(req, res){
    res.send('topic ' + req.params.id);
});

app.get('/tags/:id/topic/:commentId', function(req, res){
	var max= req.param('max');
    res.send('topic ' + req.params.id + ' ' + req.params.commentId + ' '+max);
});

app.listen(3000);