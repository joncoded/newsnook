# NewsNook

a web app that lists and links news headlines from [hacker news](https://news.ycombinator.com), along with additional user options: 

![screenshot of newsnook home page](./public/readme/screenshot1.png)

## Demo

Run the demo on

* [newsnook.joncoded.com](https://newsnook.joncoded.com)
* [newsnook.vercel.app](https://newsnook.vercel.app)

## Features

![screenshot of newsnook home page](./public/readme/screenshot3.png)

*   home page that shows the latest articles
    
*   "omni search page" that allows filtering by
    
    *   keyword
        
    *   vote count threshold
        
    *   date
        
*   "configuration page" 
      
    *  uses cookies to save a user's:
    
       *   home page "quick topic filter" menu
        
       *   vote count threshold

![screenshot of newsnook home page](./public/readme/screenshot4.png)
        
*   full screen menu 
   
![screenshot of newsnook home page](./public/readme/screenshot2.png)

*   dark mode

![screenshot of newsnook home page](./public/readme/screenshot3.png)

## Frameworks

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Hacker News API](https://hn.algolia.com/api)

## Setup

```
$ git clone https://github.com/jonchius/newsnook.git
$ npm install
$ npm run dev
```