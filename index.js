const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();
const port = 8000;

const db = require('./config/mongoose') ;
// const User = require('./models/user') ;

app.use(express.urlencoded()) ;

app.use(cookieParser()) ;

app.use('/', require('./routes'));

app.set('view engine','ejs') ;
app.set('views','./views') ;



app.listen(port, function (err) {
  if (err) {
    console.log("Error in connecting to server");
    // return;
  }
  console.log("Server is running up on port :", port);
});
