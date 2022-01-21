const auth=require('../middleware/auth.js')
var router=require('express').Router();
const likes=require('../Likes/likes.js');


router.post('/:id',auth,likes.like);

module.exports=router;