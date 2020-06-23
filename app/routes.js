const express = require('express')
const router = express.Router()

// Version 1 - Is your delivery address the same as your home address?
router.post('/v1/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/v1/order/order-summary')
  } else {
    res.redirect('/v1/order/home-address')
  }

})
// Version 2 - Is your delivery address the same as your home address?
router.post('/v2/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/v2/order/order-summary')
  } else {
    res.redirect('/v2/order/home-address')
  }

})


// Version 1 - Teacher registration - Get consent data for the Comfortable doing test route
let consent = "";
router.post('/v1/action/consent', function (req, res) {
  consent = req.session.data['consent'];
  res.redirect('/v1/teacher-registration/comfortable-doing-test');

})
// Version 2 - Teacher registration - Get consent data for the Comfortable doing test route
let consent = "";
router.post('/v2/action/consent', function (req, res) {
  consent = req.session.data['consent'];
  res.redirect('/v2/teacher-registration/comfortable-doing-test');

})

// Version 1 - Teacher registration - Comfortable doing test route
router.post('/v1/action/comfortable-doing-test', function (req, res) {
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/v1/teacher-registration/not-eligible')
  } else {
    res.redirect('/v1/teacher-registration/do-you-have-symptoms')
  }
})
// Version 2 - Teacher registration - Comfortable doing test route
router.post('/v2/action/comfortable-doing-test', function (req, res) {
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/v2/teacher-registration/not-eligible')
  } else {
    res.redirect('/v2/teacher-registration/do-you-have-symptoms')
  }
})

// Version 1 - Teacher registration - Do you have symptoms route
router.post('/v1/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/v1/teacher-registration/when-did-symptoms-start')
  } else {
    res.redirect('/v1/teacher-registration/have-you-had-symptoms')
  }

})
// Version 2 - Teacher registration - Do you have symptoms route
router.post('/v2/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/v2/teacher-registration/when-did-symptoms-start')
  } else {
    res.redirect('/v2/teacher-registration/have-you-had-symptoms')
  }

})

// Version 1 - Teacher registration - Have you had symptoms route
router.post('/v1/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/v1/teacher-registration/when-did-symptoms-start')
  } else {
    res.redirect('/v1/teacher-registration/name')
  }

})
// Version 2 - Teacher registration - Have you had symptoms route
router.post('/v2/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/v2/teacher-registration/when-did-symptoms-start')
  } else {
    res.redirect('/v2/teacher-registration/name')
  }

})

// Version 1 - Teacher registration - Ethnic group route
router.post('/v1/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/v1/teacher-registration/ethnic-background')
  } else {
    res.redirect('/v1/teacher-registration/tested-positive')
  }

})
// Version 2 - Teacher registration - Ethnic group route
router.post('/v2/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/v2/teacher-registration/ethnic-background')
  } else {
    res.redirect('/v2/teacher-registration/tested-positive')
  }

})

// Version 1 - Teacher Registration - Tested positive route
router.post('/v1/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/v1/teacher-registration/tested-positive-date')
  } else {
    res.redirect('/v1/teacher-registration/household')
  }

})
// Version 2 - Teacher Registration - Tested positive route
router.post('/v1/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/v2/teacher-registration/tested-positive-date')
  } else {
    res.redirect('/v2/teacher-registration/household')
  }

})

// Version 1 - Registration - Ethnic group route
router.post('/v1/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/v1/registration/ethnic-background')
  } else {
    res.redirect('/v1/registration/landline-number')
  }

})
// Version 2 - Registration - Ethnic group route
router.post('/v2/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/v2/registration/ethnic-background')
  } else {
    res.redirect('/v2/registration/landline-number')
  }

})

// Version 1 - Registration - NHS number route
router.post('/v1/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/v1/registration/nhs-number')
  } else {
    res.redirect('/v1/registration/check-your-answers')
  }

})
// Version 2 - Registration - NHS number route
router.post('/v2/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/v2/registration/nhs-number')
  } else {
    res.redirect('/v2/registration/check-your-answers')
  }

})

// Version 1 - Registration - Country route
router.post('/v1/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/v1/registration/address')
  } else {
    res.redirect('/v1/registration/postcode')
  }

})
// Version 2 - Registration - Country route
router.post('/v2/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/v2/registration/address')
  } else {
    res.redirect('/v2/registration/postcode')
  }

})


// Version 1 - Registration - Country route
router.post('/v1/action/people-confirmed', function (req, res) {
    res.redirect('/v1/order')

})
// Version 2 - Registration - Country route
router.post('/v2/action/people-confirmed', function (req, res) {
  res.redirect('/v2/order')

})

module.exports = router
