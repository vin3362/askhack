
/*
 * GET home page.
 */

exports.hello = function(req, res){
  res.render('hello', {
    locals: {
        title: 'Hello',
        name: 'Mike'
    }
});
};