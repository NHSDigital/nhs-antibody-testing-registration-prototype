const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

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

router.post('/create-account/v1/action12/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/create-account/v1/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/create-account/v1/study-grade')
  } else {
    res.redirect('/create-account/v1/ethnic-group')
  }

})

router.post('/create-account/v1/action12/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/create-account/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/create-account/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/create-account/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/create-account/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/create-account/v1/ethnic-background-another')
  } else {
    res.redirect('/create-account/v1/check-your-answers')
  }

})

module.exports = router
