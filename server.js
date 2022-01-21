const express=require('express');
const dotenv=require('dotenv');
const bodyp=require('body-parser');
const app=express();
const PORT=3000;

var routes=require("./Routes/routes");
app.use(bodyp.json());
app.use(
    bodyp.urlencoded({
      extended: true,
    })
  );
  dotenv.config();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
  });
app.listen(PORT,()=>{
    console.log("RUNNING ON POrt ${PORT}");
})
app.use('/',routes);
