const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

router.post('/international-arrivals-admin/v1/order-tests/action3/travel-route-same-person-1', function (req, res) {
  let travelRouteSame = req.session.data['travel-route-same-person-1']
  if (travelRouteSame == "No") {
    res.redirect('/international-arrivals-admin/v1/order-tests/cannot-add-person')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/travel-details-same-person-1')
  }
})

router.post('/international-arrivals-admin/v1/order-tests/action4/travel-details-same-person-1', function (req, res) {
  let travelDetailsSame = req.session.data['travel-details-same-person-1']
  if (travelDetailsSame == "No") {
    res.redirect('/international-arrivals-admin/v1/order-tests/cannot-add-person')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/travel-route-same-person-1')
  }
})


router.post('/international-arrivals-admin/v1/order-tests/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No") {
    res.redirect('/international-arrivals-admin/v1/order-tests/previous-infection')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/vaccine-date')
  }
})

// Version 2 - Registration - Ethnic group route
router.post('/international-arrivals-admin/v1/order-tests/action5/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-another')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/nhs-number-known')
  }

})

router.post('/international-arrivals-admin/v1/order-tests/action/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/international-arrivals-admin/v1/order-tests/previous-infection-person-1')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/vaccine-date-person-1')
  }
})

router.post('/international-arrivals-admin/v1/order-tests/action/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/international-arrivals-admin/v1/order-tests/ethnic-background-another-person-1')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/nhs-number-known-person-1')
  }
})

router.post('/international-arrivals-admin/v1/order-tests/action/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPerson1 = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnownPerson1 == "Yes"){
    res.redirect('/international-arrivals-admin/v1/order-tests/nhs-number-person-1')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/registered-with-GP-person-1')
  }
})

router.post('/international-arrivals-admin/v1/order-tests/action9/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/international-arrivals-admin/v1/order-tests/nhs-number')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/registered-with-GP')
  }
})

router.post('/international-arrivals-admin/v1/order-tests/action/registered-with-GP-person-1', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP-person-1']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals-admin/v1/order-tests/address-person-1')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/gender-person-1')
  }
})

router.post('/international-arrivals-admin/v1/order-tests/action/registered-with-GP', function (req, res) {
  let registeredWithGP = req.session.data['registered-with-GP']
  if (registeredWithGP == "Yes"){
    res.redirect('/international-arrivals-admin/v1/order-tests/address')
  } else {
    res.redirect('/international-arrivals-admin/v1/order-tests/gender')
  }
})

module.exports = router
