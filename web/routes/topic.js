var api = require("../common/api.js")

exports.topic = function(req, res){
    api.getTag(req.params.tag, function(tag){
        console.log("Tag: " + tag);
        if(tag) {
            api.getTopic(req.params.tag, req.params.topic, function(topic){
                console.log("Topic: " + topic);
                if(topic) {
                    res.render('topic', {
                        locals: {
                            title: "Snap'n'Ask: " + tag.name,
                            tag_name: tag.name,
                            topic_name: topic.name,
                            date: new Date(topic.date),
                            username: topic.user.name
                        }
                    });
                } else {
                    res.render('topic', {
                        locals: {
                            title: "Couldn't find topic for " + req.params.topic
                        }
                    });
                }
            });
        } else {
            res.render('topic', {
                locals: {
                    title: "Couldn't find tag for " + req.params.tag
                }
            });
        }
    });
};