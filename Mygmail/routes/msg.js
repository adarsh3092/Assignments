var express=require('express');
var router=express.Router();
var requestify=require('requestify')
var mongoose=require('mongoose');
var inboxSchema = require("./inboxSchema");
mongoose.connect('localhost:27017/myMail');
var db=mongoose.connection;
var movieSchemaModel=mongoose.model('myMail',inboxSchema);

router.get("/",function(req,res,next){
  res.end("helllo");
});
router.post("/",function(req,res,next){
  var data=req.body;
  db.collection('myMail').insert(data,function(err,doc){
    console.log("save in database");
  if(doc)
    res.send("Inserted!!!");
  });
});
module.exports=router;
