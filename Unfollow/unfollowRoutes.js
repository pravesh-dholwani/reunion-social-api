const router=require('express').Router();
const unfoll=require("./unfollow");
const auth=require('../middleware/auth.js')

router.post('/:id',auth,unfoll.unfollow);

module.exports=router;