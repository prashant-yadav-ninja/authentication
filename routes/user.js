const express = require('express') ;
const router = express.Router() ;


// const homeController = require('../controller/home_controller') ;
const profileController = require('../controller/profile_controller') ;
// const userController = require('../controller/user_Controller') ;
const userController = require('../controller/user_controller')

router.get('/signin',userController.signin) ;
router.get('/signup',userController.signup) ;

router.post('/create',userController.create) ;





router.get('/profile',profileController.profile) ;


module.exports = router ;