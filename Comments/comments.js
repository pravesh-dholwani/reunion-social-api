var pool=require('../DB/db');

var commentob={
    "comment":(req,res)=>{
        var user_id=req.user.user_id;
        var comment=req.body.comment;
        var post_id=req.params.id;
        pool.query("INSERT INTO COMMENTS(COMMENT,POST_ID,USER_ID) VALUES($1,$2,$3) RETURNING C_ID",[comment,post_id,user_id],(err,result)=>{
            if(err)
            {
                res.json({"msg":err.message});
            }
            else
            {
                res.json({"COMMENT_ID":result.rows[0].c_id});
            }
        })
    }
}
module.exports=commentob