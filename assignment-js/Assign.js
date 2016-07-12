var fs = require('fs');
var readline=require('readline');
var objFemale=[0,0,0,0,0,0,0,0,0,0,0,0];
var objMale=[0,0,0,0,0,0,0,0,0,0,0,0];
inputCvsFilePath="indicators.csv";
outputfile1="asiaFM.json";
outputfile2="top5.json";
var csvFileRead=readline.createInterface({

  input:fs.createReadStream(inputCvsFilePath)

});
var MAP_COUNTRIES_ASIA = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
"Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
var Years = [1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015];
var result2=[];

csvFileRead.on('line',function(line){
var data=line.split('/r/n');
var row=data[0].split(',');
var country=row[0];
var year=row[row.length-2];
var value =row[row.length-1];
var indicator=row[row.length-3];
var obj1={};

switch(indicator){

  case "SP.DYN.LE00.IN":
       if(year==1960)
           {
             obj1.country = country ;
             obj1.value = value ;
             result2.push(obj1);
           }
       break;
case "SP.DYN.LE00.FE.IN":

var x= parseInt(year);
if(Years.indexOf(x)>-1){

var index=Years.indexOf(x);
if(MAP_COUNTRIES_ASIA.indexOf(country)>0){
  objFemale[index]=objFemale[index]+parseInt(value);
        }

            }
            break;

            case "SP.DYN.LE00.MA.IN":
            var x= parseInt(year);
            if(Years.indexOf(x)>-1){
            var index=Years.indexOf(x);
            if(MAP_COUNTRIES_ASIA.indexOf(country)>-1){

              objMale[index]=objMale[index]+parseInt(value);
                    }

                        }
                        break;
default:

        }
});
csvFileRead.on('close',function(line){
var result=[];
var obj2={};
for (var i = 0; i < Years.length; i++) {
  objMale[i]=objMale[i]/MAP_COUNTRIES_ASIA.length;
  objFemale[i]=objFemale[i]/MAP_COUNTRIES_ASIA.length;

obj2.year=Years[i];
obj2.Fvalue=objFemale[i];
obj2.Mvalue=objMale[i];
result.push(obj2);
obj2={};


}
var outputRst=JSON.stringify(result);
var newArr = result2.sort(function(a, b) {
     return b.value - a.value;
   });
result2 = [];
   for(i=0;i<5;i++)
       result2[i]=newArr[i];
   result2 =JSON.stringify(result2);
   fs.appendFile(outputfile2, result2);
fs.appendFile(outputfile1, outputRst);
console.log("The End");



});
