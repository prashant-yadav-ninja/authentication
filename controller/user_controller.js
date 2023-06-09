module.exports.signup = function (req, res) {
  return res.render("user_signup", {
    title: "Sign-up",
  });
};

module.exports.signin = function (req, res) {
  return res.render("user_signin", {
    title: "Sign-in",
  });
};

const User = require("../models/user");

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }

        return res.redirect("/user/signin");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.login = function (req, res) {
  // find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding the user in Signing in ");
    }

    //  handle session creation
    if (user) {
      if (user.password != req.body.password) {
        return res.redirect("back");
      }

      res.cookie("user_id", user.id);

      // return res.redirect("/user/profile");
      return res.render("user_profile", {
        name: user.name,
        email: user.email,
      });
    } else {
      //  handle user found
      console.log("Not exist user");
      return res.redirect("back");
    }
  });

  //  handle password which don't match

  //  handle user not found
};
