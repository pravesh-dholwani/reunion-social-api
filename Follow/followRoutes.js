const router=require('express').Router();
const foll=require("./follow");
const auth=require('../middleware/auth.js')

router.post('/:id',auth,foll.follow);
module.exports=router;