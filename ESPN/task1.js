const request=require("request");
const cheerio=require("cheerio");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
request(url,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log("error"+error);
    }
    else
    {
        extractHtml(html);
    }
}
function extractHtml(html)
{
    let $=cheerio.load(html);
    let text=$(".ci-html-content ");
    let contentarr=$(text[10]).text()
    console.log("The Last Commentary is --> "+contentarr);
}