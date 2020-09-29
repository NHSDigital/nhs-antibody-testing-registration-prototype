const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// Version 2 - Antigen Refer and Triage - Do you have a car route

router.post('/antigen/v2/action3/security-check', function (req, res) {



  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress !== "Yes" && postcode == "N0000"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/how-will-you-get-test')
  }

})


// Version 2 - Antigen Refer and Triage - How will you get test route

router.post('/antigen/v2/action3/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v2/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/antigen/v2/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/antigen/v2/refer-and-triage/order-home-test-kit')
  }
})

// Version 2 - Antigen Global Registration - people confirmed route

router.post('/antigen/v2/action3/people-confirmed', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  }

})

// Version 2 - Antigen Refer and Triage - How will you get test route

router.post('/antigen/v2/action3/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v2/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/antigen/v2/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/antigen/v2/refer-and-triage/order-home-test-kit')
  }

})

// Version 2 - Antigen Refer and Triage - How will you get test no car route

router.post('/antigen/v2/action3/how-will-you-get-test-no-car', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "walk-in"){
    res.redirect('/antigen/v2/refer-and-triage/visiting-walk-through')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/order-home-test-kit')
  }

})

// Version 2 - Antigen Refer and Triage - How will you get test no email route

router.post('/antigen/v2/action3/how-will-you-get-test-no-email', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v2/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/visiting-walk-through')
  }

})

// Version 2 - Antigen Refer and Triage - How will you get test wrong postcode route

router.post('/antigen/v2/action3/how-will-you-get-test-wrong-postcode', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v2/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/order-home-test-kit')
  }

})

// Version 2 - Antigen Refer and Triage - Order home test kit route

router.post('/antigen/v2/action3/order-home-test-kit', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress !== "Yes" && postcode == "N0000"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/how-will-you-get-test')
  }

})

// Version 2 - Antigen Site Appointment Booking - find a test site route

router.post('/antigen/v2/action3/please-wait', function (req, res) {

  let prototype = {} || req.session.data['prototype']

  // pull in JSON data file
  delete req.session.data['centres']
  let idvFile = 'test-centres.json'
  let path = 'app/data/'
  req.session.data['centres'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data['centres'].length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-walk-through-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-walk-through-site')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  }

})

// Version 2 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v2/action3/choose-time-drive', function (req, res) {
  let chosenType = req.session.data['type']
  if (chosenType == "Drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/confirm-appointment-drive')
  }

  // res.redirect('/antigen/v2/site-appointment-booking/vehicle-registration-number')

})

module.exports = router
