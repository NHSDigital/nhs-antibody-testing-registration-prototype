const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

router.post('/lfd-collection-registration/v1/action10/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes") {
    res.redirect('/lfd-collection-registration/v1/different-test')
  } else {
    res.redirect('/lfd-collection-registration/v1/pharmacy-collection')
  }
})

router.post('/lfd-collection-registration/v1/action10/pharmacy-collection', function (req, res) {
  let pharmacyCollection = req.session.data['pharmacy-collection']
  if (pharmacyCollection == "Yes") {
    res.redirect('/lfd-collection-registration/v1/go-to-pharmacy')
  } else {
    res.redirect('/lfd-collection-registration/v1/nhs-account')
  }
})

router.post('/lfd-collection-registration/v1/action10/nhs-account', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-collection-registration/v1/user-account/login-email')
  } else {
    res.redirect('/lfd-collection-registration/v1/name')
  }
})

router.post('/lfd-collection-registration/v1/user-account/action10/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']
  if (loginEmail == "user@testing.co.uk"){
      res.redirect('/lfd-collection-registration/v1/user-account/enter-password')
  } else {
      res.redirect('/lfd-collection-registration/v1/user-account/create-password')
  }
})
    
router.post('/lfd-collection-registration/v1/action10/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
      res.redirect('/lfd-collection-registration/v1/user-account/create-password-error')
  } else {
      res.redirect('/lfd-collection-registration/v1/user-account/check-email')
  }
})

router.post('/lfd-collection-registration/v1/action10/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/lfd-collection-registration/v1/user-account/check-mobile-error')
  } else {
    res.redirect('/lfd-collection-registration/v1/user-account/agreement')
  }
})

router.post('/lfd-collection-registration/v1/user-account/action10/home-page', function (req, res) {
  let loginEmail = req.session.data['email-address']
  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/lfd-collection-registration/v1/check-your-answers')
  } else {
    res.redirect('/lfd-collection-registration/v1/name')
  }
})

router.post('/lfd-collection-registration/v1/action10/collecting-for', function (req, res) {
  let collectingFor = req.session.data['collecting-for']
  if (collectingFor == "Another household"){
    res.redirect('/lfd-collection-registration/v1/email-address-another')
  } else {
    res.redirect('/lfd-collection-registration/v1/country')
  }
})

router.post('/lfd-collection-registration/v1/action10/find-address', function (req, res) {
  let country = req.session.data['country']
  if (country == "England"){
    res.redirect('/lfd-collection-registration/v1/nhs-testing-programme')
  } else {
    res.redirect('/lfd-collection-registration/v1/check-your-answers')
  }
})

router.post('/lfd-collection-registration/v1/action10/manual-address', function (req, res) {
  let country = req.session.data['country']
  if (country == "England"){
    res.redirect('/lfd-collection-registration/v1/nhs-testing-programme')
  } else {
    res.redirect('/lfd-collection-registration/v1/check-your-answers')
  }
})

router.post('/lfd-collection-registration/v1/action10/nhs-testing-programme', function (req, res) {
  let programme = req.session.data['nhs-testing-programme']
  if (programme == "Yes" ) {
      res.redirect('/lfd-collection-registration/v1/work-area')
  } else {
      res.redirect('/lfd-collection-registration/v1/check-your-answers')
  }
})

router.post('/lfd-collection-registration/v1/action10/work-area', function (req, res) {
  let workArea = req.session.data['work-area']
  if (workArea == "Community pharmacy" || workArea == "Dentistry" || workArea == "General practice" || workArea == "Optometry" || workArea == "Other" ) {
      res.redirect('/lfd-collection-registration/v1/work-postcode')
  } else {
      res.redirect('/lfd-collection-registration/v1/trust')
  }
})

router.post('/lfd-collection-registration/v1/action10/check-your-answers', function (req, res) {
  let signin = req.session.data['coronavirus-account']
  if (signin == "Yes") {
    res.redirect('/lfd-collection-registration/v1/confirmation')
  } else {
    res.redirect('/lfd-collection-registration/v1/security-check')
  }
})

module.exports = router