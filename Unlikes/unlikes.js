const pool=require('../DB/db')

var unlikesob={
    "unlike":(req,res)=>{
        id=req.params.id;
        user_id=req.user.user_id;
        pool.query("DELETE FROM LIKES USER_ID=$1 AND POST_ID=$2)",[user_id,id],(err1,result1)=>{
            if(err1)
            {
                res.json({"msg":err1.message});
            }
            else
            {
                res.json({"msg":"Post unLiked"});
            }
        })
    }
}

module.exports=unlikesob;