var mongoose=require('mongoose');
var inboxSchema=mongoose.Schema(
{  "id":Number ,
  "snippet": String,
  "raw":String },
  {collection:'myMail'}
  );
module.exports=inboxSchema;
