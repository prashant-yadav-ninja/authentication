module.exports.profile = function(req,res)
{
     // return res.end('<h1>You are seeing profile section</h1>')
     return res.render('user_profile',{
          title: 'Users Profile'
     });
}