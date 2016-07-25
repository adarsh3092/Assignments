 var express=require('express');
var router=express.Router();
var data=[];
var mongoose=require('mongoose');
var requestify=require('requestify');
var movieSchema = require("./movieSchema");
mongoose.connect('localhost:27017/movie');
var db=mongoose.connection;
var movieSchemaModel=mongoose.model('movie',movieSchema);

router.get("/insert/:name",function(req,res){
var name=req.params.name;

  requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=full&r=json").then(function(res1){
    var moviedata=res1.getBody();
    if(moviedata.Response=="True"){
     db.collection('movie').insert(moviedata,function(err,doc){
       console.log("save");
     if(doc)
       res.send("Inserted!!!");
     });
}
else{
  res.send("Movie does not exit ");
}
});

});
router.get("/show",function(req,res){
  db.on("error",console.error.bind(console,"connection Error:"));
db.open('open',function(){
movieSchemaModel.find(function(error,docs){
  res.end(JSON.stringify(docs));

});

});

});

router.put("/update/:name/:year",function(req,res){
var name=req.params.name;
var year=req.params.year;
movieSchemaModel.update({Title:name},{$set:{Year:year}},function(err,rst){
console.log(rst);
res.end("Updated!!");

});
});
router.delete('/delete/:name',function(req,res){
var name= req.params.name;
movieSchemaModel.remove({Title:name}, function(err){
    if(err) throw err;
    res.end("deleted sucessfully");
});
});
module.exports=router;
