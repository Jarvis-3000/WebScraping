const request=require("request-promise")
const cheerio=require("cheerio")
const fs=require("fs")
const json2csv=require("json2csv").Parser


const site="https://shoping3000.web.app";   //here don't forget to put semicolon

//we can do this for multiple sites just using const sites=[]

//here i have used IFFE so that this function gets called immediately by itself
(async()=>{
    //this response will give the whole html page data
    const response=await request({
        uri:site,
        headers:{   //headers must be given for security purpose
            accept: 
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9"
        },
        gzip:true
    })

    //load the html into $ to access the DOM
    const $=cheerio.load(response)

        const len=$('body > div.footer > div.products > div').length

        let products=[]

        //for accessing the names and prices
        for(let i=1;i<=len;i++){
            let name=$(`body > div.footer > div.products > div:nth-child(${i}) > p.pro_name`).text().trim()
            let price=$(`body > div.footer > div.products > div:nth-child(${i}) > p.price`).text().trim()
           
            products.push({
                name,
                price
            })
        }

        //creating a json2csv object
        const j2cp=new json2csv()
        //parsing the products and inserting in csv variable
        const csv=j2cp.parse(products)

        //creating a csv file
        fs.writeFileSync("products.csv",csv,"utf-8")
})()

