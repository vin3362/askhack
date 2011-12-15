
/*
 * GET home page.
 */

exports.tag = function(req, res){
  res.render('tag', {
    locals: {
        title: "Snap'n'Ask",
        name: 'Mike',
        tag_id: req.params.id
    }
});
};