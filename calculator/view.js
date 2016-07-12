var cal =require("./calc");
var http=require('http');
var url =require('url');
http.createServer(function(req,res){
var data = url.parse(req.url,true);
res.writeHead(200,{"content-type":"text/html"});
 var data1=data.pathname;
 var data2=data1.split("/");
if(data2[1]=="add"){
  res.write("   addition="+cal.add(parseInt(data2[2]),parseInt(data2[3])));

}
else if(data2[1]=="sub"){
res.write("   subtraction="+cal.sub(parseInt(data2[2]),parseInt(data2[3])));
}
else if(data2[1]=="multi"){
  res.write("   Mulitiply="+cal.multi(parseInt(data2[2]),parseInt(data2[3])));
}
else if(data2[1]=="devide"){
  res.write("   Devide="+cal.devide(parseInt(data2[2]),parseInt(data2[3])));
}
else{

  res.write("Hello");
}





}).listen(8080);
console.log("hello");

console.log("addition = "+cal.add(1,2));
console.log("substraction = "+cal.sub(6,2));
console.log("Muliply ="+cal.multi(6,2));
console.log("Devide = "+cal.devide(6,2));
