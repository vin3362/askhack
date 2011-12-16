var api = require("../common/api.js")

exports.tag = function(req, res){
    api.getTag(req.params.tag, function(tag){
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
                        title: "Couldn't find tag for " + req.params.tag
                    }
                });
        }
    });
};