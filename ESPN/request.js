const request=require("request");
const cheerio=require("cheerio");

const url='https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard'
request(url, cb);

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
    let settool=cheerio.load(html);
    let text=settool(".ds-text-tight-m.ds-font-medium");
    
    let contentarr=settool(text[6]).text()
    console.log("THE MAIN OF THE MATCH FOR THE BEST PLAYER GOES TO --> "+contentarr);
    }