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
  let reason = req.session.data['who-asked-for-test']
  if (reason == "None of the above"){
    res.redirect('/accessibility/v1/refer-and-triage/cannot-have-test')
  } else if (reason == "Contact tracers told me to get a test") {
    res.redirect('/accessibility/v1/refer-and-triage/contact-tracing-code')
  }
  else {
    res.redirect('/accessibility/v1/refer-and-triage/')
  }

})

module.exports = router
