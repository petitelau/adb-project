/*
 Define routers that are handle
 */
const express = require("express");
const router = new express.Router();
const { hbsProperties } = require("../config/app.config");
const log4js = require("../services/log4j");
let logger = log4js.getLogger("roman-numbers");
const {romanize} = require("../services/numbers");


router.get("", (req, res) => {
  logger.info(`access to 'main' page`);
  res.render("home", { ...hbsProperties, title: "Adobe Test" });
});


const numRoman = (query, res) => {
  // inexistent parameter
  if(!query.query) {
    return res.status(400).send({ error: 'You must provide an query!' }); 
  }
  
  // validate is a number on the range
  const validateNum = Number(query.query)
  if (isNaN(validateNum) || validateNum > 255 || validateNum <=0) {
    return res.status(400).send({ error: 'Only a number between 1 and 255 allowed' }); 
  }

  try {
      let romanNumber = romanize(query.query);
      res.send({
        romanNumber: romanNumber});
  } catch(err) {
      res.send({ error: (err.message)?err.message:err })  
  }
}

router.post('/romannumeral', ({body:query}, res) => {  
  console.log(`access by post to 'romanNumber' page with query=${JSON.stringify(query)}`);
  numRoman(query, res);
})
router.get('/romannumeral', ({query}, res) => {  
  console.log(`access by get to 'romanNumber' page with query=${JSON.stringify(query)}`);
  numRoman(query, res);
})


router.get("/about", (req, res) => {
  logger.info(`access to 'about' page`);
  res.render("about", { ...hbsProperties, title: "About adobe test" });
});

router.get("/tests", (req,res) => {
  res.redirect("/tests/test.html");
})


module.exports = router;
