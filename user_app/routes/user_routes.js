const express=require('express');
const userController=require('../controllers/user_controller');

const router=express.Router();
//study:promise,prototypal inheritance

//user routes
router.get('/users',userController.getAllUsers.bind(userController));

router.get('/users/username',userController.getUserByUsername.bind(userController));


router.post('/users',userController.createUser.bind(userController));

router.post('/users/login',userController.loginUser.bind(userController));


//follow/unfollow routes

router.post('/users/:followingId/followerId',userController.followUser.bind(userController));

//router.delete('/users/:followedID/unfollow',userController.unfollowUser.bind(userController));

router.get('/users/:userID/followers',userController.getFollowers.bind(userController));

//router.get('/users/:userID/following',userController.getfollowing.bind(userController));


module.exports = router;