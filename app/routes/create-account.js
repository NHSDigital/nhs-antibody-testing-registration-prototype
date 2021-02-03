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

router.post('/create-account/v1/action12/login-email', function (req, res) {
    let emailAddress = req.session.data['email-address']
    if (emailAddress == "user@testing.co.uk" ) {
      res.redirect('/create-account/v1/nhs-login/create-password')
    } else {
      res.redirect('/create-account/v1/nhs-login/create-password')
    }

})

router.post('/create-account/v1/action12/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode) {
    res.redirect('/create-account/v1/nhs-login/agreement')
  } else {
    res.redirect('/create-account/v1/nhs-login/check-mobile-error')
  }

})

router.post('/create-account/v1/action12/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes") {
    res.redirect('/create-account/v1/nhs-number')
  } else {
    res.redirect('/create-account/v1/email-address-results')
  }

})

module.exports = router
