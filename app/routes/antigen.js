const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}



// Version 2 - Antigen Refer and Triage - Mobile number route

router.post('/antigen/v2/action3/mobile-number', function (req, res) {
  let mobilePhoneNumber = req.session.data['mobile-number']
  if (mobilePhoneNumber == "No"){
    res.redirect('/antigen/v2/refer-and-triage/call-us')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/email-address')
  }

})

// Version 2 - Antigen Refer and Triage - Do you have symptoms route

router.post('/antigen/v2/action3/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/follow-up-test')
  }

})

router.post('/antigen/v2/action3/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v2/global-registration/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/mobile-number-person-1')
  }

})

// Version 2 - Antigen Refer and Triage - Follow up test route

router.post('/antigen/v2/action3/follow-up-test', function (req, res) {
  let followUpTest = req.session.data['follow-up-test']
  if (followUpTest == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/follow-up-test-reason')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/government-pilot')
  }

})

// Version 2 - Antigen Refer and Triage - Government pilot route

router.post('/antigen/v2/action3/government-pilot', function (req, res) {
  let governmentPilot = req.session.data['government-pilot']
  let symptoms = req.session.data['do-you-have-symptoms']
  let followUpTest = req.session.data['follow-up-test']
  if (governmentPilot == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/which-pilot')
  } else if (followUpTest == "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/')
  } else if (governmentPilot == "No" && symptoms == "No" || followUpTest == "No") {
    res.redirect('/antigen/v2/refer-and-triage/reason-for-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/')
  }

})

// Version 2 - Antigen Refer and Triage - Reason for test route

router.post('/antigen/v2/action3/reason-for-test', function (req, res) {
  let reason = req.session.data['reason-for-test']
  if (reason == "None of the above"){
    res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/')
  }

})

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

// Version 2 - Antigen Refer and Triage - Do you have a car route

router.post('/antigen/v2/action3/landline-number', function (req, res) {

  let emailAddress = req.session.data['email']
  if (emailAddress == "Yes" ){
    res.redirect('/antigen/v2/global-registration/gender')
  } else {
    res.redirect('/antigen/v2/global-registration/email-address')
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

// Version 2 - Antigen Global Registration - Ethnic group route

router.post('/antigen/v2/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antigen/v2/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-another')
  } else {
    res.redirect('/antigen/v2/global-registration/currently-in-work')
  }

})

router.post('/antigen/v2/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/antigen/v2/global-registration/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-another-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/currently-in-work-person-1')
  }
})

// Version 2 - Antigen Global registration - Currently in work

router.post('/antigen/v2/action3/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v2/global-registration/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v2/global-registration/study-grade')
  } else {
    res.redirect('/antigen/v2/global-registration/country')
  }
})

router.post('/antigen/v2/action3/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v2/global-registration/industry-person-1')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v2/global-registration/study-grade-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/country-person-1')
  }
})

// Version 2 - Antigen Global Registration - NHS number known route

router.post('/antigen/v2/action3/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/nhs-number')
  } else {
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine')
  }
})

router.post('/antigen/v2/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/nhs-number-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine-person-1')
  }
})

// Version 2 - Antigen Global Registration - Coronavirus vaccine route

router.post('/antigen/v2/action9/coronavirus-vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  } else {
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine-date')
  }
})

router.post('/antigen/v2/action9/coronavirus-vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine-date-person-1')
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

router.post('/antigen/v2/action3/people-confirmed-person-1', function (req, res) {
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

// Version 2 - Antigen Site Appointment Booking - find a test site route

router.post('/antigen/v2/action3/find-test-site', function (req, res) {
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
  let chosenType = req.session.data['way-to-test']
  if (chosenType == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/confirm-appointment-drive')
  }

})

// Version 1 - Antigen Order Home Test Kit - Confirm identity route

router.post('/antigen/v2/action5/confirm-identity', function (req, res) {
  let confirmIdentity = req.session.data['confirm-identity']
  if (confirmIdentity == "Yes"){
    res.redirect('/antigen/v2/order-home-test-kit/order-summary')
  } else {
    res.redirect('/antigen/v2/govuk/get-coronavirus-test')
  }

})

// Version 1 - Antigen Order Home Test Kit - Home address question route

router.post('/antigen/v2/action5/home-address-question', function (req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "Yes"){
    res.redirect('/antigen/v2/order-home-test-kit/confirm-email-address')
  } else {
    res.redirect('/antigen/v2/order-home-test-kit/delivery-postcode')
  }

})

// Version 2 - Antigen Home Registration - Kit return way known route
router.post('/antigen/v2/action3/kit-return-way-known', function (req, res) {
  let returnWayKnown = req.session.data['kit-return-way-known']

  if (returnWayKnown == "Yes"){
    res.redirect('/antigen/v2/home-testing/order-id')
  } else {
    res.redirect('/antigen/v2/home-testing/check-instructions')
  }

})

module.exports = router
