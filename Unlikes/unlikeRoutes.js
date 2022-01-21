const auth=require('../middleware/auth.js')
var router=require('express').Router();
const unlikes=require('../Unlikes/unlikes.js');
router.post('/:id',auth,unlikes.unlike);
module.exports=router;