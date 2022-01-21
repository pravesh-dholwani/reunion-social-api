const pool=require('../DB/db');
const jwt=require('jsonwebtoken')
var ob={
    "authenticate":(req,res)=>{
        var password=req.body.password;
        var email=req.body.email;
        console.log(email,password);
        //we can use hashing here for passwords
        // for now I am only doing basic way to check password
        pool.query("SELECT * FROM CREDENTIALS WHERE EMAIL_ID=$1 AND PASSWORD=$2",[email,password],(err,results)=>{
            if(err)
            {
                console.log(err);
                res.send(err);
            }
            if(results.rowCount==0)
            {
                res.json({"msg":"NO USER FOUND"})
            }
            else
            {
                const token = jwt.sign(
                    { user_id: email },
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                  );
                  console.log(token);
                  res.status(200).json(token);
            }
            
        })
    }
}

module.exports=ob;