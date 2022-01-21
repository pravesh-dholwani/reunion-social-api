const pool=require('../DB/db');

var unfollowob={
    "unfollow":(req,res)=>{
        id=req.params.id;
        user_id=req.user.user_id;
        pool.query("SELECT EMAIL_ID FROM USERS WHERE EMAIL_ID=$1",[id],(err,results)=>{
            if(err)
            {
                res.send(err);
            }
            else
            {
                if(results.rowCount==0)
                {
                    res.status(400).json({"msg":"INVALID USER ID"});
                }
            }
        })
        pool.query("SELECT * FROM FOLLOWERS WHERE USER_ID_FU=$1 AND USER_ID_TU=$2",[user_id,id],(err,result)=>{
            if(err)
            {
                res.status(400).json({"msg":err.message});
            }
            else
            {
                if(result.rowCount==0)
                {
                    res.status(400).json({"msg":"You does not follow the user"});
                }
                else
                {
                    pool.query("DELETE FROM FOLLOWERS WHERE USER_ID_FU=$1 AND USER_ID_TU=$2",[user_id,id],(error,result)=>{
                        if(error)
                        {
                            res.status(400).json({"msg":error.message});
                        }
                        else
                        {
                            res.status(200).json({"msg":"Successfully unfollowed"});
                        }
                    })
                }
            }
        })

    }
}
module.exports=unfollowob;