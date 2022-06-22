GET STARTED
You'll need to have installed on your computer NodeJs.
Download from https://nodejs.org/en/

Download all folder roman-numerals.

On the terminal : (same folder where is package.json)
 npm install
 npm run start

You can access on the browser http://localhost:8080

This application converts an integer into a roman numeral entirely written on 
javascript , for the backend  NodeJs and frontend web browser

-----backend / frontend ---------
Based on NodeJs and Express as Server running on 8080 port by default
Front-end used handlebar (npm- hbs) as html / CSS and javascript
---------------------------------

---- tests ----------------------
Self made Test framework, running via URL http://localhost:8080/tests
--------------------------------

frontend -- backend
EndPoint fetch http://localhost:8080/romannumeral?query={integer}

-----front-end ---------------
/public
        /css
        /img
        /js
        /tests
/templates
        /partials
        /views

-------backend -------------
/src
        /config
        /middlewears
        /routers
        /services
   app.js 
   server.js 

----root folder ----
package.json
package-lock.json
readme.txt
   
Npm packages
    "chalk": "^4.0.0",
    "express": "^4.17.2",
    "hbs": "^4.2.0",
    "log4js": "^6.3.0",
    "path": "^0.12.7",
    "path-parse": "^1.0.7",
    "yargs": "^17.3.1"








