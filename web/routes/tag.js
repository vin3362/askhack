var http = require("http")

function getTag(tagId, callback) {
    var connection = http.createClient(8000, 'localhost'),
        request = connection.request('/tag/' + tagId);
    
    connection.addListener('error', function(connectionException){
        console.log("Error: " + connectionException);
    });

    request.addListener('response', function(response){
        var data = '';
        
        response.addListener('data', function(chunk){
            data += chunk;
        });
        
        response.addListener('end', function(){
            // Do something with data.
            callback(JSON.parse(data));
        });
    });

    request.end();
}

exports.tag = function(req, res){
    getTag(req.params.id, function(tag){
        if(tag) {
            res.render('tag', {
                locals: {
                    title: "Snap'n'Ask: " + tag.name,
                    name: tag.name,
                    date: new Date(tag.date),
                    username: tag.user.name
                }
            }); 
        } else {
            res.render('tag', {
                    locals: {
                        title: "Couldn't find tag for " + req.params.id
                    }
                });
        }
    });
};