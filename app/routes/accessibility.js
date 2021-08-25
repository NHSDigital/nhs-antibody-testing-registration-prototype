const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Version 1 - Accessibility Refer and Triage - Follow up test
router.post('/accessibility/v1/action7/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/accessibility/v1/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/accessibility/v1/refer-and-triage/follow-up-test')
  }
})

router.post('/accessibility/v1/action3/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/accessibility/v1/global-registration/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/accessibility/v1/global-registration/mobile-number-person-1')
  }

})

router.post('/accessibility/v1/action3/when-did-symptoms-start', function (req, res) {
  let dateOfOnset = req.session.data['date-of-onset']
  let yearOfOnset = req.session.data['symptoms-start-date-year']
  if (!dateOfOnset){
    res.redirect('/accessibility/v1/refer-and-triage/when-did-symptoms-start-error-2')
  } else if (dateOfOnset == "different" && yearOfOnset !== "2020" && yearOfOnset !== "2021"){
    res.redirect('/accessibility/v1/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/accessibility/v1/refer-and-triage/government-pilot')
  }

})

router.post('/accessibility/v1/action3/when-did-symptoms-start-person-1', function (req, res) {
  let dateOfOnset = req.session.data['date-of-onset-person-1']
  let yearOfOnset = req.session.data['symptoms-start-date-year-person-1']
  if (!dateOfOnset){
    res.redirect('/accessibility/v1/global-registration/when-did-symptoms-start-person-1-error-2')
  } else if (dateOfOnset == "different" && yearOfOnset !== "2020" && yearOfOnset !== "2021"){
    res.redirect('/accessibility/v1/global-registration/when-did-symptoms-start-person-1-error')
  } else {
    res.redirect('/accessibility/v1/global-registration/mobile-number-person-1')
  }

})

router.post('/accessibility/v1/action3/when-did-symptoms-start-error', function (req, res) {
  let yearSymptomsStarted = req.session.data['symptoms-start-date-year']
  if (yearSymptomsStarted != "2021"){
    res.redirect('/accessibility/v1/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/accessibility/v1/refer-and-triage/government-pilot')
  }

})

router.post('/accessibility/v1/action3/when-did-symptoms-start-person-1-error', function (req, res) {
  let yearSymptomsStarted = req.session.data['symptoms-start-date-year-person-1']
  if (yearSymptomsStarted != "2021"){
    res.redirect('/accessibility/v1/refer-and-triage/when-did-symptoms-start-person-1-error')
  } else {
    res.redirect('/accessibility/v1/refer-and-triage/mobile-number-person-1')
  }

})

// Version 1 - Accessibility Refer and Triage - Follow up test
router.post('/accessibility/v1/action3/follow-up-test', function (req, res) {
  let symptoms = req.session.data['follow-up-test']
  if (symptoms == "Yes"){
    res.redirect('/accessibility/v1/refer-and-triage/follow-up-test-reason')
  } else {
    res.redirect('/accessibility/v1/refer-and-triage/government-pilot')
  }
})

// Version 1 - Accessibility Refer and Triage - Government pilot route
router.post('/accessibility/v1/action3/government-pilot', function (req, res) {
  let governmentPilot = req.session.data['professional-pilot']
  let symptoms = req.session.data['do-you-have-symptoms']
  let followUpTest = req.session.data['follow-up-test']
  if (governmentPilot == "None of the above" && symptoms == "No" && followUpTest == "No") {
    res.redirect('/accessibility/v1/refer-and-triage/reason-for-test')
  } else {
    res.redirect('/accessibility/v1/refer-and-triage/')
  }
})


// Version 1 - Accessibility Refer and Triage - Reason for test route
router.post('/accessibility/v1/action3/reason-for-test', function (req, res) {
  let whoAsked = req.session.data['who-asked-for-test']
  let reason = req.session.data['reason-for-test']
  if (reason == "None of the above"){
    res.redirect('/accessibility/v1/refer-and-triage/cannot-have-test')
  } else if (whoAsked == "Contact tracers told me to get a test") {
    res.redirect('/accessibility/v1/refer-and-triage/contact-tracing-code')
  }
  else {
    res.redirect('/accessibility/v1/refer-and-triage/')
  }

})

// Version 1 - Accessibility Refer and Triage - How will you get test

router.post('/accessibility/v1/action4/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/accessibility/v1/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/accessibility/v1/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/accessibility/v1/refer-and-triage/order-home-test-kit')
  }
})

// Version 1 - Accessibility Global Registration - Reason for test route
router.post('/accessibility/v1/action4/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/accessibility/v1/global-registration/nhs-number')
  } else {
    res.redirect('/accessibility/v1/global-registration/access-needs')
  }

})


module.exports = router
