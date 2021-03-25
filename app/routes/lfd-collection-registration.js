const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

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

router.post('/lfd-collection-registration/v1/action10/email-address', function (req, res) {
    let loginEmail = req.session.data['email-address']
    
    if (loginEmail){
      res.redirect('/lfd-collection-registration/v1/check-your-answers')
    } else {
      res.redirect('/lfd-collection-registration/v1/mobile-number')
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