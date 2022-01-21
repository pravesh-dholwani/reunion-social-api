const pool=require('../DB/db.js');

var postsob={
    "addPost":(req,res)=>{
        var title=req.body.title;
        var description=req.body.description;
        var user_id=req.user.user_id;
        var time=new Date(new Date().toUTCString());
        pool.query("INSERT INTO POSTS(TITLE,DESCRIPTION,USER_ID,C_TIME) VALUES($1,$2,$3,$4) RETURNING POST_ID",[title,description,user_id,time],(err,result)=>{
            if(err)
            {
                res.json({"msg":err.message});
            }
            else
            {
                console.log(result);
                res.json({"post_id":result.rows[0].post_id,"title":title,"description":description,"time":time});
            }
        })

    },
    "deletePost":(req,res)=>{
        id=req.params.id;
        pool.query("DELETE FROM POSTS WHERE POST_ID=$1",[id],(err,result)=>{
            if(err)
            {
                res.json({"msg":err.message});
            }
            else
            {
                res.json({"msg":"Post delete successfully"});
            }
        })

    },
    "getPost":(req,res)=>{
        id=req.params.id;
        pool.query("SELECT * FROM LIKES WHERE POST_ID=$1",[id],(err,result)=>{
            if(err)
            {
                res.json({"msg":err.message});
            }
            else
            {
                pool.query("SELECT USER_ID,COMMENT FROM COMMENTS WHERE POST_ID=$1",[id],(err2,result2)=>{
                    if(err2)
                    {
                        res.json({"msg":err2.message});
                    }
                    else
                    {
                        res.json({"likes":result.rowCount,"comments":result2.rows})
                    }
                })
            }

        })

    },
    "allposts":(req,res)=>{
        user_id=req.user.user_id;
        var posts=[];
        pool.query("SELECT * FROM POSTS WHERE USER_ID=$1",[user_id],(err,result)=>{
            if(err)
            {
                res.json({"msg":err.message});
            }
            else
            {
                var likes;
                console.log(result.rows);
                result.rows.forEach(d=>{
                    console.log(d);
                    pool.query("SELECT * FROM LIKES WHERE POST_ID=$1",[d.post_id],(err1,result1)=>{
                        if(err1)
                        {
                            //res.json({"msg":err1.message});
                        }
                        else
                        {
                            likes=result1.rowCount;
                            pool.query("SELECT * FROM COMMENTS WHERE POST_ID=$1",[d.post_id],(err2,result2)=>{
                                if(err2)
                                {
                                    //res.json({"msg":err2.message});
                                }
                                else
                                {
                                    console.log(result2);
                                    var post={
                                        id:d.post_id,
                                        title:d.title,
                                        description:d.description,
                                        time:d.c_time,
                                        likes:likes,
                                        comments:result2.rows
                                    }
                                    posts.push(post);
                                }
                            });
                        }
                    });
                })
                res.json({"posts":posts});
            }
        })

    }
}
module.exports=postsob;