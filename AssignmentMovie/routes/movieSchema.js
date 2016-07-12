var mongoose=require('mongoose');
var movieSchema=mongoose.Schema({"_id":String,"Title":String ,"Year":String,"Rated":String,
"Released":String,"Runtime":String,"Genre":String,
"Writer":String,
"Actors":String,
"Language":String,
"Country":String,
"Poster":String,
"Metascore":String,
"imdbRating":String,"imdbVotes":String,"imdbID":String,"Type":String,"Response":String}
,{collection:'movie'});
module.exports=movieSchema;
