const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}

// Version 1 - Lite Registration lateral flow with Accounts- Mobile number route

// router.post('/lite-registration-lateral-flow-accounts/v1/action9/mobile-number', function (req, res) {
//     let mobileNumber = req.session.data['mobile-number']
//     if (mobileNumber == "Yes") {
//       res.redirect('/lite-registration-lateral-flow-accounts/v1/test-place')
//     } else {
//       res.redirect('/lite-registration-lateral-flow-accounts/v1/call-us')
//     }

//   })

  // Version 1 - Lite Registration lateral flow with Accounts - Who's taking the test route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/whos-taking-the-test', function (req, res) {
    let person = req.session.data['whos-taking-the-test']
    if (person == "myself") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/coronavirus-account')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/site-id')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Test date route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/test-date', function (req, res) {
    let emailAddress = req.session.data['email-address']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/do-you-have-symptoms')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/name')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Do you have symptoms route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/do-you-have-symptoms', function (req, res) {
    let emailAddress = req.session.data['email-address']
    let password = req.session.data['password']
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/check-your-answers')
    } else if (emailAddress != "user@testing.co.uk" && password != " " || emailAddress != "user@testing.co.uk" && password != undefined) {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address-account')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address')
    }

  })

  // Version 3 - LFD Results sharing - Ethnic group route
  router.post('/share-result-lateral-flow/v3/action6/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/share-result-lateral-flow/v3/ethnic-background-another')
    } else {
      res.redirect('/share-result-lateral-flow/v3/address')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Ethnic group route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-another')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/currently-in-work')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Ethnic group route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/ethnic-group', function (req, res) {
    let ethnicGroup = req.session.data['ethnic-group']

    if (ethnicGroup == "Asian or Asian British"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-asian')
    } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-black')
    } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-mixed')
    } else if (ethnicGroup == "White") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-white')
    } else if (ethnicGroup == "Another ethnic group") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/ethnic-background-another')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/currently-in-work')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Currently in work route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/currently-in-work', function (req, res) {
    let inWork = req.session.data['currently-in-work']
    if (inWork == "Yes, they travel to a workplace" || inWork == "Yes, I travel to a workplace"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/industry')
    } else if (inWork == "Yes, they go to nursery, school, college or university" || inWork == "Yes, I go to nursery, school, college or university"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/study-grade')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/do-you-have-symptoms')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Country route

  // router.post('/lite-registration-lateral-flow-accounts/v1/action9/country', function (req, res) {
  //   let country = req.session.data['country']
  //   if (country == "Northern Ireland"){
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/address')
  //   } else {
  //     res.redirect('/lite-registration-lateral-flow-accounts/v1/postcode')
  //   }

  // })

  // Version 1 - Lite Registration lateral flow with Accounts - NHS number known route

  router.post('/lite-registration-lateral-flow-accounts/v1/action9/nhs-number-known', function (req, res) {
    let nhsNumberKnown = req.session.data['nhs-number-known']
    if (nhsNumberKnown == "Yes"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/nhs-number')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/check-your-answers')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Login email route
  router.post('/lite-registration-lateral-flow-accounts/v1/user-account/action9/login-email', function (req, res) {
    let loginEmail = req.session.data['email-address']

    if (loginEmail == "user@testing.co.uk"){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/enter-password')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/create-password')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Home page testing route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/home-page', function (req, res) {
    let loginEmail = req.session.data['email-address']

    if (loginEmail == 'user@testing.co.uk'){
      res.redirect('/lite-registration-lateral-flow-accounts/v1/test-place')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/email-address-account')
    }

  })

  // Version 1 - Lite Registration lateral flow with Accounts - Create password route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/create-password', function (req, res) {
    let password = req.session.data['password']
    let confirmPassword = req.session.data['confirm-password']
    if (password == "" || confirmPassword == "") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/create-password-error')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/check-email')
    }
  })

  // Version 1 - Lite Registration lateral flow with Accounts - check mobile route
  router.post('/lite-registration-lateral-flow-accounts/v1/action9/check-mobile', function (req, res) {
    let securityCode = req.session.data['security-code']
    if (securityCode == "") {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/check-mobile-error')
    } else {
      res.redirect('/lite-registration-lateral-flow-accounts/v1/user-account/agreement')
    }
  })

module.exports = router
