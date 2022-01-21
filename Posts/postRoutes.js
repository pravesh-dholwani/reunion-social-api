var auth=require('../middleware/auth.js');
var router=require('express').Router();
var posts=require('../Posts/posts.js')

router.post('/add',auth,posts.addPost);
router.delete('/delete/:id',auth,posts.deletePost);
router.get('/get/:id',auth,posts.getPost);
router.get('/all',auth,posts.allposts);

module.exports=router;