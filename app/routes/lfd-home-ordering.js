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

router.post('/lfd-home-ordering/v1/action10/do-you-have-symptoms', function (req, res) {
    let symptoms = req.session.data['do-you-have-symptoms']
    if (symptoms == "No" ) {
      res.redirect('/lfd-home-ordering/v1/country')
    } else {
      res.redirect('/lfd-home-ordering/v1/different-test')
    }

})

router.post('/lfd-home-ordering/v1/action10/country', function (req, res) {
    let country = req.session.data['country']
    if (country == "England" ) {
      res.redirect('/lfd-home-ordering/v1/work-from-home')
    } else {
      res.redirect('/lfd-home-ordering/v1/country-test-unavailable')
    }

})

router.post('/lfd-home-ordering/v1/action10/work-from-home', function (req, res) {
    let workFromHome = req.session.data['work-from-home']
    if (workFromHome == "No" ) {
      res.redirect('/lfd-home-ordering/v1/workplace-testing')
    } else {
      res.redirect('/lfd-home-ordering/v1/lft-unavailable')
    }

})

router.post('/lfd-home-ordering/v1/action10/workplace-testing', function (req, res) {
    let workplaceTesting = req.session.data['workplace-testing']
    if (workplaceTesting == "No" ) {
      res.redirect('/lfd-home-ordering/v1/name')
    } else {
      res.redirect('/lfd-home-ordering/v1/lft-unavailable')
    }

})

router.post('/lfd-home-ordering/v1/action10/email-address', function (req, res) {
    let emailAddress = req.session.data['email']
    if (emailAddress == "No" ) {
        res.redirect('/lfd-home-ordering/v1/call-us')
    } else {
        res.redirect('/lfd-home-ordering/v1/mobile-number')
    }

})

router.post('/lfd-home-ordering/v1/action10/contact-with-positive', function (req, res) {
    let contactWithPositive = req.session.data['contact-with-positive']
    if (contactWithPositive == "No" ) {
        res.redirect('/lfd-home-ordering/v1/dct-unavailable')
    } else {
        res.redirect('/lfd-home-ordering/v1/notified-how')
    }

})

router.post('/lfd-home-ordering/v1/action10/dct-opt-in', function (req, res) {
    let dctOptIn = req.session.data['dct-opt-in']
    if (dctOptIn == "No" ) {
        res.redirect('/lfd-home-ordering/v1/self-isolate')
    } else {
        res.redirect('/lfd-home-ordering/v1/name')
    }

})

router.post('/lfd-home-ordering/v1/action10/home-address-question', function (req, res) {
    let deliveryAddressSame = req.session.data['delivery-address-same']
    if (deliveryAddressSame == "No" ) {
        res.redirect('/lfd-home-ordering/v1/order-home-test-kit/delivery-postcode')
    } else {
        res.redirect('/lfd-home-ordering/v1/order-home-test-kit/confirm-email-address')
    }

})

module.exports = router
