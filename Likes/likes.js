const pool=require('../DB/db')

var likesob={
    "like":(req,res)=>{
        id=req.params.id;
        user_id=req.user.user_id;
        pool.query("INSERT INTO LIKES(USER_ID,POST_ID) VALUES($1,$2)",[user_id,id],(err1,result1)=>{
            if(err1)
            {
                res.json({"msg":err1.message});
            }
            else
            {
                res.json({"msg":"Post Liked"});
            }
        })
    }
}

module.exports=likesob;