const express = require('express')
const router = express.Router()


// Version 1 - Lite registration - test place route

router.post('/pooling/v1/action6/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  if (testPlace == "home") {
    res.redirect('/pooling/v1/enter-barcode')
  } else {
    res.redirect('/pooling/v1/find-test-site')
  }

})

// Version 1 - Lite Registration - Ethnic group route

router.post('/pooling/v1/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/pooling/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/pooling/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/pooling/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/pooling/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/pooling/v1/ethnic-background-another')
  } else {
    res.redirect('/pooling/v1/do-you-have-symptoms')
  }

})

// Version 1 - Lite Registration - Country route

router.post('/pooling/v1/action6/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "Northern Ireland"){
    res.redirect('/pooling/v1/address')
  } else {
    res.redirect('/pooling/v1/postcode')
  }

})

// Version 1 - Lite Registration - NHS number known route

router.post('/pooling/v1/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/pooling/v1/nhs-number')
  } else {
    res.redirect('/pooling/v1/check-your-answers')
  }

})


module.exports = router
