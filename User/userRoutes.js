const router=require('express').Router();
const user=require("./user.js");

router.post('/authenticate',user.authenticate);

module.exports=router;
