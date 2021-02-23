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
      res.redirect('/daily-contact-testing/v1/different-test')
    }

})

router.post('/daily-contact-testing/v1/action10/country', function (req, res) {
    let country = req.session.data['country']
    if (country == "England" ) {
      res.redirect('/daily-contact-testing/v1/daily-contact-testing')
    } else {
      res.redirect('/daily-contact-testing/v1/country-test-unavailable')
    }

})

router.post('/daily-contact-testing/v1/action10/email-address', function (req, res) {
    let emailAddress = req.session.data['email']
    if (emailAddress == "No" ) {
        res.redirect('/daily-contact-testing/v1/call-us')
    } else {
        res.redirect('/daily-contact-testing/v1/mobile-number')
    }

})

router.post('/daily-contact-testing/v1/action10/daily-contact-testing', function (req, res) {
    let DCT = req.session.data['daily-contact-testing']
    if (DCT == "Yes" ) {
        res.redirect('/daily-contact-testing/v1/dct-opt-in')
    } else {
        res.redirect('/daily-contact-testing/v1/household-bubble')
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

router.post('/daily-contact-testing/v1/action10/household-bubble', function (req, res) {
    let householdBubble = req.session.data['household-bubble']
    if (householdBubble == "Yes" ) {
        res.redirect('/daily-contact-testing/v1/local-test-site')
    } else {
        res.redirect('/daily-contact-testing/v1/dct-unavailable')
    }

})

router.post('/daily-contact-testing/v1/action10/local-test-site', function (req, res) {
    let ableToCollect = req.session.data['local-test-site']
    if (ableToCollect == "No" ) {
        res.redirect('/daily-contact-testing/v1/name')
    } else {
        res.redirect('/daily-contact-testing/v1/collect-your-tests')
    }

})

router.post('/daily-contact-testing/v1/action10/home-address-question', function (req, res) {
    let deliveryAddressSame = req.session.data['delivery-address-same']
    if (deliveryAddressSame == "No" ) {
        res.redirect('/daily-contact-testing/v1/order-home-test-kit/delivery-postcode')
    } else {
        res.redirect('/daily-contact-testing/v1/order-home-test-kit/confirm-email-address')
    }

})

module.exports = router
