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

// Version 2 - Accessibility Refer and Triage - How will you get test route

router.post('/accessibility/v1/action3/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/accessibility/v1/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/accessibility/v1/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/accessibility/v1/refer-and-triage/order-home-test-kit')
  }
})

// Version 1 - Accessibility Global registration - Landline number route
router.post('/accessibility/v1/action3/landline-number', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  let emailAddress = req.session.data['email']
  if (emailAddress !== "Yes" && wayToTest == "home testing" ){
    res.redirect('/accessibility/v1/global-registration/email-address-required')
  } else if (emailAddress !== "Yes" ){
    res.redirect('/accessibility/v1/global-registration/email-address')
  } else {
    res.redirect('/accessibility/v1/global-registration/gender')
  }

})

// Version 2 - Accessibility Global Registration - Ethnic group route

router.post('/accessibility/v1/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/accessibility/v1/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-another')
  } else {
    res.redirect('/accessibility/v1/global-registration/currently-in-work')
  }

})

router.post('/accessibility/v1/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/accessibility/v1/global-registration/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/accessibility/v1/global-registration/ethnic-background-another-person-1')
  } else {
    res.redirect('/accessibility/v1/global-registration/currently-in-work-person-1')
  }
})

// Version 2 - Accessibility Global registration - Currently in work

router.post('/accessibility/v1/action3/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/accessibility/v1/global-registration/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/accessibility/v1/global-registration/study-grade')
  } else {
    res.redirect('/accessibility/v1/global-registration/1-have-you-travelled-overseas')
  }
})

router.post('/accessibility/v1/action3/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/accessibility/v1/global-registration/industry-person-1')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/accessibility/v1/global-registration/study-grade-person-1')
  } else {
    res.redirect('/accessibility/v1/global-registration/1-have-you-travelled-overseas-person-1')
  }
})

// Version 1 - Accessibility Global registration - Overseas travel
router.post('/accessibility/v1/action3/1-have-you-travelled-overseas', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas']
  if (OverseasTravel == "No"){
    res.redirect('/accessibility/v1/global-registration/previous-infection')
  } else {
    res.redirect('/accessibility/v1/global-registration/1-which-countries-travelled-to')
  }

})

router.post('/accessibility/v1/action3/1-have-you-travelled-overseas-person-1', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas-person-1']
  if (OverseasTravel == "No"){
    res.redirect('/accessibility/v1/global-registration/previous-infection-person-1')
  } else {
    res.redirect('/accessibility/v1/global-registration/1-which-countries-travelled-to-person-1')
  }

})

// Version 1 - Accessibility Global registration - Study grade

router.post('/accessibility/v1/action3/study-grade', function (req, res) {
  let studyGrade = req.session.data['study-grade']
  if (studyGrade == "Prefer not to say"){
    res.redirect('/accessibility/v1/global-registration/1-have-you-travelled-overseas')
  } else {
    res.redirect('/accessibility/v1/global-registration/institution')
  }
})

router.post('/accessibility/v1/action3/study-grade-person-1', function (req, res) {
  let studyGrade = req.session.data['study-grade-person-1']
  if (studyGrade == "Prefer not to say"){
    res.redirect('/accessibility/v1/global-registration/1-have-you-travelled-overseas')
  } else {
    res.redirect('/accessibility/v1/global-registration/institution-person-1')
  }
})

// Version 1 - accessibility Global Registration - Coronavirus vaccine route

router.post('/accessibility/v1/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/accessibility/v1/global-registration/country')
  } else {
    res.redirect('/accessibility/v1/global-registration/vaccine-date')
  }
})

router.post('/accessibility/v1/action8/vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/accessibility/v1/global-registration/country-person-1')
  } else {
    res.redirect('/accessibility/v1/global-registration/vaccine-date-person-1')
  }
})

// Version 1 - Accessibility Refer and Triage - Reason for test route
router.post('/accessibility/v1/action4/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/accessibility/v1/global-registration/nhs-number')
  } else {
    res.redirect('/accessibility/v1/global-registration/access-needs')
  }

})

// Version 1 - Accessibility Refer and Triage - Reason for test route
router.post('/accessibility/v1/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/accessibility/v1/global-registration/nhs-number-person-1')
  } else {
    res.redirect('/accessibility/v1/global-registration/access-needs-person-1')
  }

})

// Version 1 - Accessibility Site Appointment Booking - find a test site route

router.post('/accessibility/v1/action3/find-test-site', function (req, res) {

  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through") {
    res.redirect('/accessibility/v1/site-appointment-booking/choose-drive-through-site')
  } else {
    res.redirect('/accessibility/v1/site-appointment-booking/choose-walk-through-site')
  }

})

module.exports = router
