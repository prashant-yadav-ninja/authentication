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

console.log(User.count);

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
        console.log(User.count);

        return res.redirect("/user/signin");
      });
    } else {
      return res.redirect("back");
    }
  });
};

// module.exports.create = function (req, res) {
//   User.create(
//     {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     },
//     function (err, newUser) {
//       if (err) {
//         console.log("errror in creating user");
//         return;
//       }

//       console.log("*******", newUser);
//       return res.redirect("back");
//     }
//   );
// };

// module.exports.create = function (req, res) {
// if (req.body.password != req.body.confirm_password) {
//   return res.redirect("back");
// }

// User.findOne({ email: req.body.email }, function (err, user) {
// if (err) {
//   console.log("error in finding user in signing up");
//   return;
// }

// if (!user) {
//   User.create(
//     {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     },
//     function (err, user) {
// if (err) {
//   console.log("error in creating user while sign up");
//   return;
// }
//         return res.redirect("/user/signin");
//       }
//     );
//   } else {
//     return res.redirect("back");
//   }
// });

// User.findOne({ email: req.body.email }, function (err, user) {
//   if (err) {
//     console.log("error in finding user in signing up");
//     return;
//   }

// });
// };

module.exports.login = function (req, res) {
  // To do later
};
