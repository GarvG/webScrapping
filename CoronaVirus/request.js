//const request=require("request");
const request = require('request');
const cheerio=require("cheerio");
request('https://www.worldometers.info/coronavirus/', cb);



function cb (error, response, html) {
    if(error)
    {
        console.error('error:', error); // Print the error if one occurred
    }
    else{
        htmlHandler(html);
    }    
   
  }
  function htmlHandler(html)
  {
    let selectortool=cheerio.load(html);
    let array=selectortool("#maincounter-wrap span");
   // console.log(h1s.length);
    for(let i=0;i<array.length;i++)
    {
        let data=selectortool(array[i]).text();
        console.log("data for the coronaVirus:"+data);
    }

  }