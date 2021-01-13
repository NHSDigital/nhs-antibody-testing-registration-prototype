const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// Version 1 - Daily Contact Testing - do you have symptoms route

router.post('/daily-contact-testing/v1/action10/do-you-have-symptoms', function (req, res) {
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "No" ) {
      res.redirect('/daily-contact-testing/v1/country')
    } else {
      res.redirect('/antigen/v2/govuk/get-coronavirus-test')
    }

})

router.post('/daily-contact-testing/v1/action10/country', function (req, res) {
    let country = req.session.data['country']
    if (country == "England" ) {
      res.redirect('/daily-contact-testing/v1/email-address')
    } else {
      res.redirect('/antigen/v1/govuk/get-coronavirus-test')
    }

})

router.post('/daily-contact-testing/v1/action10/email-address', function (req, res) {
    let emailAddress = req.session.data['email']
    if (emailAddress == "No" ) {
        res.redirect('/daily-contact-testing/v1/call-us')
    } else {
        res.redirect('/daily-contact-testing/v1/contact-with-positive')
    }

})

router.post('/daily-contact-testing/v1/action10/contact-with-positive', function (req, res) {
    let contactWithPositive = req.session.data['contact-with-positive']
    if (contactWithPositive == "No" ) {
        res.redirect('/daily-contact-testing/v1/tests-unavailable')
    } else {
        res.redirect('/daily-contact-testing/v1/notified-how')
    }

})

router.post('/daily-contact-testing/v1/action10/dct-opt-in', function (req, res) {
    let dctOptIn = req.session.data['dct-opt-in']
    if (dctOptIn == "No" ) {
        res.redirect('/daily-contact-testing/v1/self-isolate')
    } else {
        res.redirect('/daily-contact-testing/v1/name')
    }

})

module.exports = router
