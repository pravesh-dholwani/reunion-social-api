const pool=require('../DB/db');

var followob={
    "follow":(req,res)=>{
        id=req.params.id;
        user_id=req.user.user_id;
        pool.query("SELECT EMAIL_ID FROM USERS WHERE EMAIL_ID=$1",[id],(err,results)=>{
            if(err)
            {
                res.json({"msg":err.message});
            }
            else
            {
                //console.log(results);
                if(results.rowCount==0)
                {
                    
                    res.json({"msg":"INVALID USER ID"});
                }
                else
                {
                    //if user already following----
                    pool.query("SELECT * FROM FOLLOWERS WHERE USER_ID_FU=$1 AND USER_ID_TU=$2;",[user_id,id],(err2,result2)=>{
                        if(err2)
                        {
                            res.json({"msg":err.message});
                        }
                        else
                        {
                            if(result2.rowCount!=0)
                            {
                                res.json({"msg":"you already follow the user"});
                            }
                            else
                            {
                                //if not already following
                                pool.query("INSERT INTO FOLLOWERS VALUES($1,$2);",[user_id,id],(err,result)=>{
                                    if(err)
                                    {
                                        res.json({"msg":err.message});
                                    }
                                    else
                                    {
                                        console.log(result);
                                        res.status(200).json({"msg":"Successfully Followed"});
                                    }
                                })
                            }
                        }
                    })
                    
                }
            }
        });

        
    }
    
}
module.exports=followob;