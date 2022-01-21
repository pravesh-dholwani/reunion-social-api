var router=require('express').Router();
var auth=require('../middleware/auth.js');
var comments=require('../Comments/comments.js');

router.post('/:id',auth,comments.comment);

module.exports=router;