const router=require('express').Router();

var user_routes=require('../User/userRoutes.js');
var follow_routes=require('../Follow/followRoutes.js');
var unfollow_routes=require('../Unfollow/unfollowRoutes.js');
var posts_routes=require('../Posts/postRoutes.js');
var likes=require('../Likes/likesRoutes.js');
var unlikes=require('../Unlikes/unlikeRoutes.js');
var comments=require('../Comments/commentRoutes.js');
router.use('/user',user_routes);
router.use('/follow',follow_routes);
router.use('/unfollow',unfollow_routes)
router.use('/posts',posts_routes)
router.use('/like',likes);
router.use('/unlike',unlikes);
router.use('/comment',comments);
module.exports=router;