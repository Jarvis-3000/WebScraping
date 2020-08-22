# PRECAUTION

>__Web scraping is not llegal as long as you are scraping your own website.__

>__If you try to scrap another website, your IP can be blocked.__

# What is Web-Scraping

>__Web scraping, also known as web data extraction, is the process of retrieving or “scraping” data from a website.__

>When you want some data from a site then you just copy and paste in your file, but if the needed data is in too large amount to train a ___Machine learning Algrotihm__ then copy-paste will not be the optimized solution.
So, here __Web-Scraping__ comes into the picture.



## Web-scraping consists of two things
***
>1. **web-crawler**
![](https://www.scrapinghub.com/wp-content/uploads/2019/05/crawler.png)
>      * The crawler is an artificial intelligence algorithm that browses the web to search the particular data required by following the links across the internet.

>2. **web-scraper**
>     * A web scraper is a specialized tool designed to accurately and quickly extract data from a web page. Web scrapers vary widely in design and complexity, depending on the project.



***
***

# Implementation

>By sending HTTP request to a particular URL and then by extracting HTML of that web page for getting useful information is known as crawling or web scraping.

### **Modules to be used for crawling in Nodejs:**

```Javascript
request-promise: "For sending HTTP request to the URL"
```
```Javascript  
cheerio: "For parsing DOM and extracting HTML of web page"
```
```Javascript  
fs: "For reading or writing the data into the file"
```
```Javascript
json2csv: "For converting the object into csv file/table"
```
