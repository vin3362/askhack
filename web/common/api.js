var http = require("http");


function fetchData(frag, callback) {
    var connection = http.createClient(8000, 'localhost'),
        request = connection.request(frag);
    
    connection.addListener('error', function(connectionException){
        console.log("Error: " + connectionException);
        callback(null);
    });

    request.addListener('response', function(response){
        var data = '';
        
        response.addListener('data', function(chunk){
            data += chunk;
        });
        
        response.addListener('end', function(){
            console.log("End request: " + data);
            var dataObj;
            
            if(data) {
                try{
                    dataObj = JSON.parse(data);
                } catch(e) {
                    console.log("Error parsing json: " + e + ", data: " + data);
                }
            }
            
            callback(dataObj ? dataObj : null);
        });
    });

    request.end();
}

exports.getTag = function(tagId, callback){
    fetchData('/tag/' + tagId, callback);
};

exports.getTopic = function(tagId, topicId, callback){
    fetchData('/tag/' + tagId + '/topic/' + topicId, callback);
};