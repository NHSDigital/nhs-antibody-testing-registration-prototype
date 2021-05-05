const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}


// VERSION 2

router.post('/logresults-web-service/v2/site-operative/action13/confirm-collect-code', function (req, res) {
  let transactionCount = req.session.data['transaction-count']
  if (transactionCount) {
    res.redirect('/logresults-web-service/v2/site-operative/lot-reference-same')
  } else {
    res.redirect('/logresults-web-service/v2/site-operative/enter-lot-reference')
  }

})

router.post('/logresults-web-service/v2/site-operative/action13/lot-reference-same', function (req, res) {
  let lotReferenceSame = req.session.data['lot-reference-same']
  if (lotReferenceSame == "Yes") {
    res.redirect('/logresults-web-service/v2/site-operative/how-many-test-packs-1')
  } else {
    res.redirect('/logresults-web-service/v2/site-operative/enter-lot-reference')
  }

})

router.post('/logresults-web-service/v2/site-operative/action13/more-test-packs', function (req, res) {
  let moreTestPacks = req.session.data['more-test-packs']
  let lotReference1 = req.session.data['lot-reference-1']
  if (moreTestPacks == "Yes" && lotReference1 ) {
    res.redirect('/logresults-web-service/v2/site-operative/enter-lot-reference-2')
  } else if (moreTestPacks == "Yes" && !lotReference1 ) {
    res.redirect('/logresults-web-service/v2/site-operative/lot-reference-2')
  } else {
    res.redirect('/logresults-web-service/v2/site-operative/check-your-answers-collection')
  }

})

router.post('/logresults-web-service/v2/site-operative/action13/more-test-packs-2', function (req, res) {
  let moreTestPacks = req.session.data['more-test-packs-2']
  let lotReference2 = req.session.data['lot-reference-2']
  if (moreTestPacks == "Yes" && lotReference2 ) {
    res.redirect('/logresults-web-service/v2/site-operative/enter-lot-reference-3')
  } else if (moreTestPacks == "Yes" && !lotReference2 ) {
    res.redirect('/logresults-web-service/v2/site-operative/lot-reference-3')
  } else {
    res.redirect('/logresults-web-service/v2/site-operative/check-your-answers-collection')
  }

})

router.post('/logresults-web-service/v2/site-operative/action13/more-test-packs-3', function (req, res) {
  let moreTestPacks = req.session.data['more-test-packs-3']
  let lotReference2 = req.session.data['lot-reference-3']
  if (moreTestPacks == "Yes" && lotReference2 ) {
    res.redirect('/logresults-web-service/v2/site-operative/check-your-answers-collection')
  } else if (moreTestPacks == "Yes" && !lotReference2 ) {
    res.redirect('/logresults-web-service/v2/site-operative/check-your-answers-collection')
  } else {
    res.redirect('/logresults-web-service/v2/site-operative/check-your-answers-collection')
  }

})




module.exports = router