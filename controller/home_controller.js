module.exports.home = function(req,res)
{
     // console.log(req.cookies) ;
     res.cookie('user_id',35) ;
//     return res.end('<h1>Welcome to Codeial home </h1>');
return res.render('home',{
     title : 'home'
});
   
}