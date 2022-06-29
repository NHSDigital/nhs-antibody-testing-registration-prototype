express = require('express')
const router = express.Router()

// $('.govuk-error-summary').hide()

// Call in routes file from routes folder to keep routes.js cleaner
router.use('/', require('./routes/org-register.js'))
// router.use('/', require('./routes/pooling.js'))
// router.use('/', require('./routes/prereg.js'))
router.use('/', require('./routes/antibody.js'))
router.use('/', require('./routes/antigen.js'))
router.use('/', require('./routes/litereg-accounts.js'))
router.use('/', require('./routes/lite-registration.js'))
router.use('/', require('./routes/unified-org.js'))
router.use('/', require('./routes/logresults-web-service.js'))
router.use('/', require('./routes/v4-testing.js'))
router.use('/', require('./routes/genomic.js'))
router.use('/', require('./routes/singleregistration.js'))
// router.use('/', require('./routes/daily-contact-testing.js'))
router.use('/', require('./routes/lfd-home-ordering.js'))
// router.use('/', require('./routes/create-account.js'))
// router.use('/', require('./routes/pre-registration.js'))
router.use('/', require('./routes/delegated-access-results-recorder.js'))
router.use('/', require('./routes/lfd-collection-registration.js'))
router.use('/', require('./routes/international-arrivals.js'))
router.use('/', require('./routes/provider-list.js'))
router.use('/', require('./routes/lamp-test-return.js'))
router.use('/', require('./routes/bulk-order-home-kits.js'))
router.use('/', require('./routes/elective-care.js'))
// router.use('/', require('./routes/international-arrivals-admin.js'))
// router.use('/', require('./routes/accessibility.js'))


// Pull scope into the homepage to show/hide sections
// 'SCOPE' is either pulled in from the Heroku App settings or setting in a local .env file eg. SCOPE=antibody
router.get('/', function (req, res) {
  var scope = process.env.SCOPE
  return res.render('index', {
    'scope': scope
  });
})

// Version 1 - Is your delivery address the same as your home address?
router.post('/antibody/v1/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v1/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v1/home-testing/home-address')
  }

})
// Version 2 - Is your delivery address the same as your home address?
router.post('/antibody/v2/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v2/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v2/home-testing/home-address')
  }

})

// Version 2 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v2/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v7/order-test-kit/not-eligible')
  } else {
    res.redirect('/antibody/v7/order-test-kit/comfortable-doing-test')
  }
})

// Version 1 - Teacher registration - Comfortable doing test route
router.post('/antibody/v1/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No"){
    res.redirect('/antibody/v1/refer-and-triage/not-eligible')
  } else if (comfortableDoingTest == undefined) {
    res.redirect('/antibody/v1/refer-and-triage/comfortable-doing-test-error')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/do-you-have-symptoms')
  }
})
// Version 2 - Teacher registration - Comfortable doing test route
router.post('/antibody/v2/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v7/order-test-kit/not-eligible')
  } else {
    res.redirect('/antibody/v7/order-test-kit/do-you-have-symptoms')
  }
})

// Version 1 - Teacher registration - Do you have symptoms route
router.post('/antibody/v1/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v1/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/name')
  }

})
// Version 2 - Teacher registration - Do you have symptoms route
router.post('/antibody/v2/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/antigen-test')
  } else {
    res.redirect('/antibody/v7/order-test-kit/eligible')
  }

})

// Version 1 - Teacher registration - Have you had symptoms route
router.post('/antibody/v1/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v1/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/tested-positive')
  }

})
// Version 2 - Teacher registration - Have you had symptoms route
router.post('/antibody/v2/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v7/order-test-kit/tested-positive')
  }

})

// Version 1 - Teacher registration - When did symptoms start route
router.post('/antibody/v1/action/when-did-symptoms-start', function (req, res) {
  let symptomsStartDay = req.session.data['symptoms-start-date-day']
  let symptomsStartMonth = req.session.data['symptoms-start-date-month']
  let symptomsStartYear = req.session.data['symptoms-start-date-year']

  if (symptomsStartYear !== "2020" || symptomsStartYear !== "2021" ){
    res.redirect('/antibody/v1/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/follow-up-test')
  }

})

// Version 1 - Teacher registration - Mobile phone
router.post('/antibody/v1/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/antibody/v1/refer-and-triage/email-address')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/not-eligible')
  }

})

// Version 2 - Teacher registration - Mobile phone
router.post('/antibody/v2/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/email-address')
  } else {
    res.redirect('/antibody/v7/order-test-kit/not-eligible')
  }

})

// Version 1 - Teacher registration - Ethnic group route
router.post('/antibody/v1/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v1/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/occupation')
  }

})
// Version 2 - Teacher registration - Ethnic group route
router.post('/antibody/v2/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v7/order-test-kit/ethnic-background')
  } else {
    res.redirect('/antibody/v7/order-test-kit/working')
  }

})

// Version 1 - Teacher registration - currently working
router.post('/antibody/v1/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v1/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/occupation')
  }
})


// Version 2 - Teacher registration - currently working
router.post('/antibody/v2/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v7/order-test-kit/occupation')
  } else {
    res.redirect('/antibody/v7/order-test-kit/occupation')
  }
})


// Version 1 - Teacher Registration - Tested positive route
router.post('/antibody/v1/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v1/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/household')
  }

})
// Version 2 - Teacher Registration - Tested positive route
router.post('/antibody/v2/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/tested-positive-date')
  } else {
    res.redirect('/antibody/v7/order-test-kit/household')
  }

})

// Version 1 - Registration - Do you have symptoms route
router.post('/antibody/v1/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v1/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v1/global-registration/landline-number')
  }

})
// Version 2 - Registration - Do you have symptoms route
router.post('/antibody/v2/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v2/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v2/global-registration/landline-number')
  }

})

// Version 1 - Registration - Ethnic group route
router.post('/antibody/v1/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v1/global-registration/ethnic-background')
  } else {
    res.redirect('/antibody/v1/global-registration/landline-number')
  }

})

// Version 2 - Registration - Ethnic group route
router.post('/antibody/v2/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-another')
  } else {
    res.redirect('/antibody/v7/order-test-kit/occupation')
  }

})

// Version 1 - Registration - NHS number route
router.post('/antibody/v1/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v1/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v1/global-registration/check-your-answers')
  }

})
// Version 2 - Registration - NHS number route
router.post('/antibody/v2/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v2/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v2/global-registration/check-your-answers')
  }

})

// Version 1 - Registration - Country route
router.post('/antibody/v1/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/antibody/v1/global-registration/address')
  } else {
    res.redirect('/antibody/v1/global-registration/postcode')
  }

})
// Version 2 - Registration - Country route
router.post('/antibody/v2/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/antibody/v2/global-registration/address')
  } else {
    res.redirect('/antibody/v2/global-registration/nhs-number-known')
  }

})


// Version 1 - Registration - Country route
router.post('/antibody/v1/action/people-confirmed', function (req, res) {
    res.redirect('/antibody/v1/home-testing')

})
// Version 2 - Registration - Country route
router.post('/antibody/v2/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v2/home-testing')

})


// Version 1 - Antigen Home Registration - Kit return way known route
router.post('/antigen/v1/action3/kit-return-way-known', function (req, res) {
  let returnWayKnown = req.session.data['kit-return-way-known']

  if (returnWayKnown == "Yes"){
    res.redirect('/antigen/v1/home-testing/order-id')
  } else {
    res.redirect('/antigen/v1/home-testing/check-instructions')
  }

})

// Version 1 - Antigen Refer and Triage - Mobile number route

router.post('/antigen/v1/action3/mobile-number', function (req, res) {
  let mobilePhoneNumber = req.session.data['mobile-number']
  if (mobilePhoneNumber == "No"){
    res.redirect('/antigen/v1/refer-and-triage/call-us')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/email-address')
  }

})

// Version 1 - Antigen Refer and Triage - Do you have symptoms route

router.post('/antigen/v1/action4/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v1/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/follow-up-test')
  }

})

// Version 1 - Antigen Refer and Triage - When did symptoms start route

router.post('/antigen/v1/action3/when-did-symptoms-start', function (req, res) {
  let dateOfOnset = req.session.data['date-of-onset']
  let yearOfOnset = req.session.data['symptoms-start-date-year']
  if (!dateOfOnset){
    res.redirect('/antigen/v1/refer-and-triage/when-did-symptoms-start-error-2')
  } else if (dateOfOnset == "different" && yearOfOnset !== "2020" && yearOfOnset !== "2021"){
    res.redirect('/antigen/v1/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/government-pilot')
  }

})

router.post('/antigen/v1/action3/when-did-symptoms-start-person-1', function (req, res) {
  let dateOfOnset = req.session.data['date-of-onset-person-1']
  let yearOfOnset = req.session.data['symptoms-start-date-year-person-1']
  if (!dateOfOnset){
    res.redirect('/antigen/v1/global-registration/when-did-symptoms-start-person-1-error-2')
  } else if (dateOfOnset == "different" && yearOfOnset !== "2020" && yearOfOnset !== "2021"){
    res.redirect('/antigen/v1/global-registration/when-did-symptoms-start-person-1-error')
  } else {
    res.redirect('/antigen/v1/global-registration/mobile-number-person-1')
  }

})

// Version 1 - Antigen Refer and Triage - When did symptoms start error route

router.post('/antigen/v1/action3/when-did-symptoms-start-error', function (req, res) {
  let yearSymptomsStarted = req.session.data['symptoms-start-date-year']
  if (yearSymptomsStarted != "2021"){
    res.redirect('/antigen/v1/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/government-pilot')
  }

})

// router.post('/antigen/v1/action3/when-did-symptoms-start-error-person-1', function (req, res) {
//   let yearSymptomsStarted = req.session.data['symptoms-start-date-year-person-1']
//   if (yearSymptomsStarted != "2021"){
//     res.redirect('/antigen/v1/global-registration/when-did-symptoms-start-error-person-1')
//   } else {
//     res.redirect('/antigen/v1/global-registration/mobile-number-person-1')
//   }

// })

// Version 1 - Antigen Refer and Triage - Follow up test

router.post('/antigen/v1/action3/follow-up-test', function (req, res) {
  let symptoms = req.session.data['follow-up-test']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v1/refer-and-triage/follow-up-test-reason')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/government-pilot')
  }

})

// Version 1 - Antigen Refer and Triage - Government pilot route

router.post('/antigen/v1/action3/government-pilot', function (req, res) {
  let governmentPilot = req.session.data['professional-pilot']
  let symptoms = req.session.data['do-you-have-symptoms']
  let followUpTest = req.session.data['follow-up-test']
  if (governmentPilot == "None of the above" && symptoms == "No" && followUpTest == "No") {
    res.redirect('/antigen/v1/refer-and-triage/reason-for-test')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/')
  }
})

// Version 1 - Antigen Refer and Triage - Reason for test route

router.post('/antigen/v1/action3/reason-for-test', function (req, res) {
  let whoAsked = req.session.data['who-asked-for-test']
  let reason = req.session.data['reason-for-test']
  if (reason == "None of the above"){
    res.redirect('/antigen/v1/refer-and-triage/cannot-have-test')
  } else if (whoAsked == "Contact tracers told me to get a test") {
    res.redirect('/antigen/v1/refer-and-triage/contact-tracing-code')
  }
  else {
    res.redirect('/antigen/v1/refer-and-triage/')
  }

})

// Version 1 - Antigen Refer and Triage - Security check route

router.post('/antigen/v1/action3/security-check', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress == "Yes"){
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress !== "Yes" && postcode == "N0000"){
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test')
  }

})

// Version 1 - Antigen Refer and Triage - Order home test kit route

router.post('/antigen/v1/action3/order-home-test-kit', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress == "Yes"){
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress !== "Yes" && postcode == "N0000"){
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test')
  }

})

// Version 1 - Antigen Refer and Triage - How will you get test route

router.post('/antigen/v1/action3/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v1/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/antigen/v1/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/antigen/v1/refer-and-triage/order-home-test-kit')
  }

})

// Version 1 - Antigen Global Registration - Ethnic group route

router.post('/antigen/v1/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antigen/v1/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-another')
  } else {
    res.redirect('/antigen/v1/global-registration/work-or-study')
  }

})

// Version 1 - Antigen Global Registration - Currently in work route

router.post('/antigen/v1/action3/work-or-study', function (req, res) {
  let inWork = req.session.data['work-or-study']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v1/global-registration/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v1/global-registration/study-grade')
  } else {
    res.redirect('/antigen/v1/global-registration/1-have-you-travelled-overseas')
  }

})

// Genomic variance - route 1

router.post('/antigen/v1/action3/1-have-you-travelled-overseas', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas']
  if (OverseasTravel == "No"){
    res.redirect('/antigen/v1/global-registration/previous-infection')
  } else {
    res.redirect('/antigen/v1/global-registration/1-which-countries-travelled-to')
  }

})

// Version 1 - Antigen Global Registration - NHS number known route

router.post('/antigen/v1/action3/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v1/global-registration/nhs-number')
  } else {
    res.redirect('/antigen/v1/global-registration/fingerprick-test')
  }

})

// Version 1 - Antigen Global Registration - Do you have symptoms person 1 route

router.post('/antigen/v1/action3/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v1/global-registration/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/mobile-number-person-1')
  }

})

// Version 1 - Antigen Global Registration - Do you have symptoms person 1 route

router.post('/antigen/v1/action3/landline-number-person-1', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "home testing"){
    res.redirect('/antigen/v1/global-registration/email-address-home-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/email-address-person-1')
  }

})

// Version 1 - Antigen Global Registration - Ethnic group person 1 route

router.post('/antigen/v1/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/antigen/v1/global-registration/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/antigen/v1/global-registration/ethnic-background-another-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/work-or-study-person-1')
  }
})

// Version 1 - Antigen Global Registration - NHS number known person 1 route

router.post('/antigen/v1/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v1/global-registration/nhs-number-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/check-your-answers-person-1')
  }

})

// Version 1 - Antigen Global Registration - Currently in work person 1 route

router.post('/antigen/v1/action4/work-or-study-person-1', function (req, res) {
  let inWork = req.session.data['work-or-study-person-1']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v1/global-registration/industry-person-1')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v1/global-registration/study-grade-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/have-you-travelled-overseas-person-1')
  }
})

// Version 1- Antigen Global Registration - have you travelled overseas

router.post('/antigen/v1/action3/have-you-travelled-overseas-person-1', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas']
  if (OverseasTravel == "No"){
    res.redirect('/antigen/v1/global-registration/previous-infection-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/which-countries-travelled-to-person-1')
  }

})

// Version 1 - Antigen Global Registration - people confirmed route

router.post('/antigen/v1/action3/people-confirmed', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  }

})

// Version 1 - Antigen Global Registration - people confirmed person 1 route

router.post('/antigen/v1/action3/people-confirmed-person-1', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/site-appointment-booking/find-test-site')
  }

})

// Version 1 - Antigen Site Appointment Booking - find a test site route

router.post('/antigen/v1/action3/find-test-site', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-walk-through-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-walk-through-site')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v1/action3/choose-time-drive', function (req, res) {
  let chosenType = req.session.data['way-to-test']
  if (chosenType == "drive-through"){
    res.redirect('/antigen/v1/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment-drive')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v1/action3/choose-time-walk', function (req, res) {
  let chosenTime = req.session.data['time']
  if (chosenTime == "8:30am to 9:00am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available-walk')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment-walk')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v1/action3/choose-time-prev-day-drive', function (req, res) {
  let chosenType = req.session.data['way-to-test']
  if (chosenType == "drive-through"){
    res.redirect('/antigen/v1/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment-drive')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v1/action3/choose-time-prev-day-walk', function (req, res) {
  let chosenTime = req.session.data['time']
  if (chosenTime == "8:30am to 9:00am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available-walk')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment-walk')
  }

})

// Version 1 - Antigen Order Home Test Kit - Confirm identity route

router.post('/antigen/v1/action5/confirm-identity', function (req, res) {
  let confirmIdentity = req.session.data['confirm-identity']
  if (confirmIdentity == "Yes"){
    res.redirect('/antigen/v1/order-home-test-kit/order-summary')
  } else {
    res.redirect('/antigen/v1/govuk/get-coronavirus-test')
  }

})

// Version 1 - Antigen Order Home Test Kit - Home address question route

router.post('/antigen/v1/action5/home-address-question', function (req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "Yes"){
    res.redirect('/antigen/v1/order-home-test-kit/confirm-email-address')
  } else {
    res.redirect('/antigen/v1/order-home-test-kit/delivery-postcode')
  }

})

// Version 1 - Elective Care Testing Trust Worker Request- Request method route

router.post('/elective-care-testing/v1/action4/request-method', function (req, res) {
  let requestMethod = req.session.data['request-method']
  if (requestMethod == "upload"){
    res.redirect('/elective-care-testing/v1/trust-worker-request/upload-file')
  } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request/date-of-procedure')
  }
})

// Version 1 - Elective Care Testing Trust Worker Request (enhanced)- Request method route

router.post('/elective-care-testing/v1/action4/type', function (req, res) {
  let requestMethod = req.session.data['request-method']
  if (requestMethod == "upload"){
    res.redirect('/elective-care-testing/v1/trust-worker-request/upload-file')
  } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request/date-of-procedure')
  }
})

// Version 1 - Elective Care Testing Trust Worker Request - Symptoms route

router.post('/elective-care-testing/v1/action5/symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/elective-care-testing/v1/trust-worker-request/symptoms-start')
  } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request/mobile-number')
  }

})

// Version 1 - Elective Care Testing Trust Worker Request - Symptoms patient 1 route

router.post('/elective-care-testing/v1/action5/symptoms-patient-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-patient-1']
  if (symptoms == "Yes"){
    res.redirect('/elective-care-testing/v1/trust-worker-request/symptoms-start-patient-1')
  } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request/check-your-answers-patient-1')
  }

})

// Version 1 - Elective Care Prelinked Kits - Group select

router.post('/elective-care-testing/v1/prelinked-kits/request-method', function (req, res) {
  let requestMethod = req.session.data['cuRequestMethod']
  if (requestMethod == "upload"){
    res.redirect('/elective-care-testing/v1/prelinked-kits/upload-file')
  } else {
    res.redirect('/elective-care-testing/v1/prelinked-kits/date-of-procedure')
  }
})

// Version 1 - Elective Care Prelinked Kits - Ethnicity Routes

router.post('/elective-care-testing/v1/prelinked-kits/ethnicity-start', function (req, res) {
  let ethnicity = req.session.data['cuEthnicStart']
  if (ethnicity == "Yes"){
    res.redirect('/elective-care-testing/v1/prelinked-kits/ethnic-group')
  } else if (ethnicity == "No"){
    res.redirect('/elective-care-testing/v1/prelinked-kits/work-start')
  } else {
    res.redirect('/elective-care-testing/v1/prelinked-kits/ethnicity-start?error=empty')
  }
})

router.post('/elective-care-testing/v1/prelinked-kits/work-start', function (req, res) {
  let work = req.session.data['cuWorkStart']
  if (work == "Yes"){
    res.redirect('/elective-care-testing/v1/prelinked-kits/occupation/index')
  } else if (work == "No"){
    res.redirect('/elective-care-testing/v1/prelinked-kits/check-your-answers')
  } else {
    res.redirect('/elective-care-testing/v1/prelinked-kits/work-start?error=empty')
  }
})

router.post('/elective-care-testing/v1/prelinked-kits/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'I do not know') {
    res.redirect('/elective-care-testing/v1/prelinked-kits/work-start')
    } else if (answer) {
      res.redirect('/elective-care-testing/v1/prelinked-kits/ethnic-desc')
    } else {
    res.redirect('/elective-care-testing/v1/prelinked-kits/ethnic-group?error=empty')
    }
});

router.post('/elective-care-testing/v1/prelinked-kits/ethnic-desc', function (req, res) {
  let answer = req.body.cuEthnicDesc;

  if (answer == 'I do not know') {
    res.redirect('/elective-care-testing/v1/prelinked-kits/work-start')
    } else if (answer) {
      res.redirect('/elective-care-testing/v1/prelinked-kits/work-start')
    } else {
    res.redirect('/elective-care-testing/v1/prelinked-kits/ethnic-desc?error=empty')
    }
});

router.post('/elective-care-testing/v1/prelinked-kits/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/elective-care-testing/v1/prelinked-kits/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/elective-care-testing/v1/prelinked-kits/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/elective-care-testing/v1/prelinked-kits/check-your-answers')
  } else if (answer == 'I do not know') {
    res.redirect('/elective-care-testing/v1/prelinked-kits/occupation/area')
  } else {
    res.redirect('/elective-care-testing/v1/prelinked-kits/occupation/index?error=empty')
    }
});

// Admin portal Refer and Triage - How will you get test route

router.post('/admin-portal/119-referral/refer-and-triage/action3/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/admin-portal/119-referral/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/admin-portal/119-referral/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/admin-portal/119-referral/refer-and-triage/order-home-test-kit')
  }

})

// Admin portal Refer and Triage - How will you get test no car route

router.post('/admin-portal/119-referral/refer-and-triage/action3/how-will-you-get-test-no-car', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "walk-in"){
    res.redirect('/admin-portal/119-referral/refer-and-triage/visiting-walk-through')
  } else {
    res.redirect('/admin-portal/119-referral/refer-and-triage/order-home-test-kit')
  }

})

// Admin portal Refer and Triage - How will you get test no email route

router.post('/admin-portal/119-referral/refer-and-triage/action3/how-will-you-get-test-no-email', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/admin-portal/119-referral/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/admin-portal/119-referral/refer-and-triage/visiting-walk-through')
  }

})

// Admin portal Refer and Triage - How will you get test wrong postcode route

router.post('/admin-portal/119-referral/refer-and-triage/action3/how-will-you-get-test-wrong-postcode', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/admin-portal/119-referral/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/admin-portal/119-referral/refer-and-triage/order-home-test-kit')
  }

})

//Admin portal - Bulk SMS - Reason for appointment change route
router.post('/admin-portal/bulk-sms/action1/reason-for-change', function (req, res) {
  let reasonForTest = req.session.data['reason-for-change']

  if (reasonForTest == "Its address has changed and people can either visit this location or book a new test (MTU only)"){
    res.redirect('/admin-portal/bulk-sms/new-postcode')
  } else if (reasonForTest == "Its closed and people must book a new test") {
    res.redirect('/admin-portal/bulk-sms/confirm-message-cancelled')
  } else if (reasonForTest == "Its operating hours have changed and people can either visit within these hours or book a new test") {
    res.redirect('/admin-portal/bulk-sms/new-operating-hours-1')
  } else {
    res.redirect('/admin-portal/bulk-sms/new-postcode')
  }
})

// Version 2 - LiteReg Accounts Coronavirus v2
router.post('/litereg-accounts/v2/action3/coronavirus-account-v2', function (req, res) {
  let coronavirusAccountV2 = req.session.data['coronavirus-account-v2']
  if (coronavirusAccountV2 == "Sign in or create an account with NHS login") {
    res.redirect('/litereg-accounts/v2/user-account/login-email')
  } else {
    res.redirect('/litereg-accounts/v2/enter-barcode')
  }
})

// Version 1 - LiteReg Accounts Do you have symptoms
router.post('/litereg-accounts/v2/action8/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes") {
    res.redirect('/litereg-accounts/v2/when-did-symptoms-start')
  } else {
    res.redirect('/litereg-accounts/v2/country')
  }

})

// Version 1 - LiteReg Accounts NHS number known
router.post('/litereg-accounts/v2/action8/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/litereg-accounts/v2/nhs-number')
  } else {
    res.redirect('/litereg-accounts/v2/vaccine')
  }

})

// Version 1 - Antigen Vaccine
router.post('/antigen/v1/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/antigen/v1/global-registration/country')
  } else {
    res.redirect('/antigen/v1/global-registration/vaccine-date')
  }

})

// Version 1 - Antigen vaccine-person-1
router.post('/antigen/v1/action8/vaccine-person-1', function (req, res) {
  let vaccinePerson1 = req.session.data['vaccine-person-1']
  if (vaccinePerson1 == "No"){
    res.redirect('/antigen/v1/global-registration/gp-address-same-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/vaccine-date-person-1')
  }

})

router.post('/antigen/v1/action3/gp-address-same-person-1', function (req, res) {
  let gpAdressSame = req.session.data['gp-address-same-person-1']
  if (gpAdressSame == "No"){
    res.redirect('/antigen/v1/global-registration/address-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/nhs-number-known-person-1')
  }
})

// Version 1 - Lite reg accounts - Confirm Site ID

router.post('/litereg-accounts/v1/action6/confirm-site-id', function (req, res) {
  let confirmSiteID = req.session.data['confirm-site-id']
  if (confirmSiteID == "Yes") {
    res.redirect('/litereg-accounts/v1/contact-testing')
  } else {
    res.redirect('/litereg-accounts/v1/site-id')
  }

})

// Version 1 - Lite reg accounts - Have You Travelled

router.post('/litereg-accounts/v1/action7/have-you-travelled', function (req, res) {
  let haveYouTravelled = req.session.data['have-you-travelled']
  if (haveYouTravelled == "Yes") {
    res.redirect('/litereg-accounts/v1/travelled-most-to')
  } else {
    res.redirect('/litereg-accounts/v1/vaccine')
  }

})

// Version 1 - Antigen Vaccine
router.post('/litereg-accounts/v1/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  let emailAddress = req.session.data['email-address']
  if (vaccine == "No"){
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v1/check-your-answers')
    }
    else {
      res.redirect('/litereg-accounts/v1/country')
    }
  } else {
    res.redirect('/litereg-accounts/v1/vaccine-date')
  }

})





// Version 3 - Lite reg accounts - Confirm Site ID

router.post('/litereg-accounts/v3/action6/confirm-site-id', function (req, res) {
  let confirmSiteID = req.session.data['confirm-site-id']
  if (confirmSiteID == "Yes") {
    res.redirect('/litereg-accounts/v3/contact-testing')
  } else {
    res.redirect('/litereg-accounts/v3/site-id')
  }

})

// Version 3 - Lite reg accounts - Have You Travelled

router.post('/litereg-accounts/v3/action7/have-you-travelled', function (req, res) {
  let haveYouTravelled = req.session.data['have-you-travelled']
  if (haveYouTravelled == "Yes") {
    res.redirect('/litereg-accounts/v3/travelled-most-to')
  } else {
    res.redirect('/litereg-accounts/v3/vaccine')
  }

})

// Version 3 - Antigen Vaccine
router.post('/litereg-accounts/v3/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  let emailAddress = req.session.data['email-address']
  if (vaccine == "No"){
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v3/check-your-answers')
    }
    else {
      res.redirect('/litereg-accounts/v3/country')
    }
  } else {
    res.redirect('/litereg-accounts/v3/vaccine-date')
  }

})





// Version 1 - Antigen vaccine-person-1
router.post('/antigen/v1/action8/vaccine-person-1', function (req, res) {
  let vaccinePerson1 = req.session.data['vaccine-person-1']
  if (vaccinePerson1 == "No"){
    res.redirect('/antigen/v1/global-registration/country-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/vaccine-date-person-1')
  }

})

// Single registration - Who is test for?

router.post('/_csplayground/singleregistration/v1/action/who-is-test-for', function (req, res) {
  let subject = req.session.data['who-is-test-for']
  if (subject == "Myself"){
    res.redirect('/_csplayground/singleregistration/v1/coronavirus-account')
  } else {
    res.redirect('/_csplayground/singleregistration/v1/enter-barcode')
  }

})

// Version 1 - LiteReg Accounts Daily Contact Testing
router.post('/litereg-accounts/v1/action5/daily-contact-testing', function (req, res) {
  let dailyContactTesting = req.session.data['daily-contact-testing']
  if (dailyContactTesting  == "Yes") {
    res.redirect('/litereg-accounts/v1/account-id')
  }
  else {
    res.redirect('/litereg-accounts/v1/test-date')
  }
})

// Version 1 - LiteReg Accounts Travelled Overseas
router.post('/litereg-accounts/v1/action3/travelled-overseas', function (req, res) {
  let travelledOverseas = req.session.data['travelled-overseas']
  let emailAddress = req.session.data['email-address']
  if (travelledOverseas  == "Yes") {
    res.redirect('/litereg-accounts/v1/travelled-to')
  }
  else {
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v1/vaccine')
    }
    else {
      res.redirect('/litereg-accounts/v1/previous-infection')
    }

  }
})

// Version 1 - LiteReg Accounts Do you have symptoms
router.post('/litereg-accounts/v1/action3/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']
  if (doYouHaveSymptoms  == "Yes") {
    res.redirect('/litereg-accounts/v1/when-did-symptoms-start')
  }
  else {
    res.redirect('/litereg-accounts/v1/previous-infection')
  }
})

// Version 1 - LiteReg Accounts vaccine date
router.post('/litereg-accounts/v1/action2/vaccine-date', function (req, res) {
  let emailAddress = req.session.data['email-address']
  if (emailAddress == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v1/check-your-answers')
  }
  else {
    res.redirect('/litereg-accounts/v1/country')
  }
})




// Version 3 - LiteReg Accounts Daily Contact Testing
router.post('/litereg-accounts/v3/action5/daily-contact-testing', function (req, res) {
  let dailyContactTesting = req.session.data['daily-contact-testing']
  if (dailyContactTesting  == "Yes") {
    res.redirect('/litereg-accounts/v3/account-id')
  }
  else {
    res.redirect('/litereg-accounts/v3/test-date')
  }
})

// Version 3 - LiteReg Accounts Travelled Overseas
router.post('/litereg-accounts/v3/action3/travelled-overseas', function (req, res) {
  let travelledOverseas = req.session.data['travelled-overseas']
  let emailAddress = req.session.data['email-address']
  if (travelledOverseas  == "Yes") {
    res.redirect('/litereg-accounts/v3/travelled-to')
  }
  else {
    if (emailAddress == "user@testing.co.uk") {
      res.redirect('/litereg-accounts/v3/vaccine')
    }
    else {
      res.redirect('/litereg-accounts/v3/previous-infection')
    }

  }
})

// Version 3 - LiteReg Accounts Do you have symptoms
router.post('/litereg-accounts/v3/action3/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']
  if (doYouHaveSymptoms  == "Yes") {
    res.redirect('/litereg-accounts/v3/when-did-symptoms-start')
  }
  else {
    res.redirect('/litereg-accounts/v3/previous-infection')
  }
})

// Version 3 - LiteReg Accounts vaccine date
router.post('/litereg-accounts/v3/action2/vaccine-date', function (req, res) {
  let emailAddress = req.session.data['email-address']
  if (emailAddress == "user@testing.co.uk") {
    res.redirect('/litereg-accounts/v3/check-your-answers')
  }
  else {
    res.redirect('/litereg-accounts/v3/country')
  }
})

// Antibody V7 - Fingerprick Test
router.post('/antibody/v7/action4/fingerprick-test', function (req, res) {
  let fingerprickTest = req.session.data['fingerprick-test']
  if (fingerprickTest == "Yes, I'm OK doing this") {
    res.redirect('/antibody/v7/refer-and-triage/do-you-have-symptoms')
  }
  else {
    res.redirect('/antibody/v7/refer-and-triage/not-eligible-fingerprick-test')
  }
})

// Antibody V7 - Do You Have Symptoms
router.post('/antibody/v7/action7/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']
  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v7/refer-and-triage/not-eligible-has-symptoms')
  } else {
    res.redirect('/antibody/v7/refer-and-triage/mobile-number')
  }
})

// Antibody V7 - Mobile Number
router.post('/antibody/v7/action7/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']
  if (mobileNumber == "Yes"){
    res.redirect('/antibody/v7/refer-and-triage/antibody-survey-or-study')
  } else {
    res.redirect('/antibody/v7/refer-and-triage/not-eligible-mobile-number')
  }
})

// Antibody V7 - Antibody Survey or Study
router.post('/antibody/v7/action7/antibody-survey-or-study', function (req, res) {
  let antibodySurveyOrStudy = req.session.data['antibody-survey-or-study']
  if (antibodySurveyOrStudy == "Yes"){
    res.redirect('/antibody/v7/refer-and-triage/which-antibody-survey-or-study')
  } else {
    res.redirect('/antibody/v7/refer-and-triage/currently-in-work')
  }
})

// Antibody V7 - Currently in Work
router.post('/antibody/v7/action7/currently-in-work', function (req, res) {
  let currentlyInWork = req.session.data['currently-in-work']
  let antibodySurveyOrStudy = req.session.data['antibody-survey-or-study']
  if (currentlyInWork == "Yes and I work from home" && antibodySurveyOrStudy == "Yes" || currentlyInWork == "Yes and I travel to work" && antibodySurveyOrStudy == "Yes"){
    res.redirect('/antibody/v7/refer-and-triage/area-of-work')
  } else if (currentlyInWork == "No" && antibodySurveyOrStudy == "Yes") {
    res.redirect('/antibody/v7/refer-and-triage/antibody-test')
  } else if (currentlyInWork !== "No" && antibodySurveyOrStudy == "No") {
    res.redirect('/antibody/v7/refer-and-triage/area-of-work-no-survey')
  } else {
    res.redirect('/antibody/v7/refer-and-triage/not-eligible-out-of-work')
  }
})

// Antibody V7 - Area of Work
router.post('/antibody/v7/action7/area-of-work', function (req, res) {
  let areaOfWork = req.session.data['area-of-work']
  if (areaOfWork == "Social care"){
    res.redirect('/antibody/v7/refer-and-triage/where-do-you-work')
  }
  else if (areaOfWork == "None of the above") {
    res.redirect('/antibody/v7/refer-and-triage/not-eligible-none-of-the-above')
  }
  else {
    res.redirect('/antibody/v7/refer-and-triage/antibody-test')
  }
})

// Antibody V7 - Do You Have Symptoms V2
router.post('/antibody/v7/action8/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']
  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/get-swab-test')
  } else {
    res.redirect('/antibody/v7/order-test-kit/have-you-had-symptoms')
  }
})

// Antibody V7 - Have You Had Symptoms
router.post('/antibody/v7/action8/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']
  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v7/order-test-kit/previous-infection')
  }
})

// Antibody V7 - Previous Infection
router.post('/antibody/v7/action8/previous-infection', function (req, res) {
  let previousInfection = req.session.data['previous-infection']
  if (previousInfection == "Yes"){
    res.redirect('/antibody/v7/order-test-kit/swab-test-date')
  } else {
    res.redirect('/antibody/v7/order-test-kit/previous-house-infection')
  }
})

// Antibody V7 -  Vaccine
router.post('/antibody/v7/action8/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/antibody/v7/order-test-kit/nhs-number-known')
  } else {
    res.redirect('/antibody/v7/order-test-kit/vaccine-date')
  }
})

// Antibody V7 -  NHS Number Known
router.post('/antibody/v7/action8/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "No"){
    res.redirect('/antibody/v7/order-test-kit/postcode')
  } else {
    res.redirect('/antibody/v7/order-test-kit/nhs-number')
  }
})

// Antibody V7 -  Home Address Question
router.post('/antibody/v7/action8/home-address-question', function (req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "No"){
    res.redirect('/antibody/v7/order-test-kit/delivery-postcode')
  } else {
    res.redirect('/antibody/v7/order-test-kit/ethnic-group')
  }
})

// Version V7 - Registration - Ethnic group route
router.post('/antibody/v7/action8/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v7/order-test-kit/ethnic-background-another')
  } else {
    res.redirect('/antibody/v7/order-test-kit/check-your-answers')
  }

})


// Antigen V2 - Antibody Test
router.post('/antigen/v2/action2/antibody-test', function (req, res) {
  let antibodyTest = req.session.data['antibody-test']

  if (antibodyTest == "Yes"){
    res.redirect('/antigen/v2/global-registration/fingerprick-test')
  }
  else  {
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  }
})

// Antigen V2 - Antibody Test Person 1
router.post('/antigen/v2/action2/antibody-test-person-1', function (req, res) {
  let antibodyTestPersonOne = req.session.data['antibody-test-person-1']

  if (antibodyTestPersonOne == "Yes"){
    res.redirect('/antigen/v2/global-registration/fingerprick-test-person-1')
  }
  else  {
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  }
})

// Antigen V2 - Fingerprick Test Person 1
router.post('/antigen/v2/action6/fingerprick-test-person-1', function (req, res) {
  let fingerprickTestPersonOne = req.session.data['fingerprick-test-person-1']

  if (fingerprickTestPersonOne == "None of these"){
    res.redirect('/antigen/v2/global-registration/fingerprick-test-person-1-error')
  }
  else {
    res.redirect('/antigen/v2/global-registration/delivery-address-person-1')
  }
})

// Antigen V2 - Delivery Address
router.post('/antigen/v2/action2/delivery-address', function (req, res) {
  let deliveryAddress = req.session.data['delivery-address']

  if (deliveryAddress == "Yes"){
    res.redirect('/antigen/v2/global-registration/antibody-test-confirmation')
  } else {
    res.redirect('/antigen/v2/global-registration/delivery-postcode')
  }

})

// Antigen V2 - Delivery Address Person 1
router.post('/antigen/v2/action2/delivery-address-person-1', function (req, res) {
  let deliveryAddressPersonOne = req.session.data['delivery-address-person-1']

  if (deliveryAddressPersonOne == "Yes"){
    res.redirect('/antigen/v2/global-registration/antibody-test-confirmation-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/delivery-postcode-person-1')
  }

})

// LiteReg Accounts - Test Place
router.post('/litereg-accounts/v1/action4/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']

  if (testPlace == "At a test site or government quarantine hotel"){
    res.redirect('/litereg-accounts/v1/site-id')
  } else {
    res.redirect('/litereg-accounts/v1/royal-mail-barcode')
  }

})

// LiteReg Accounts - Test Place
router.post('/litereg-accounts/v3/action4/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']

  if (testPlace == "At a test site or government quarantine hotel"){
    res.redirect('/litereg-accounts/v3/site-id')
  } else {
    res.redirect('/litereg-accounts/v3/royal-mail-barcode')
  }

})

// Bulk Order Home Kits - Manage Team Leader 1
router.post('/bulk-order-test-kits/v1/action1/manage-team-leader-1', function (req, res) {
  let teamLeader1FirstName = req.session.data['team-leader-1-first-name']
  let teamLeader1LastName = req.session.data['team-leader-1-last-name']
  let teamLeader1Email = req.session.data['team-leader-1-email-address']
  let teamLeader1Mobile = req.session.data['team-leader-1-mobile-number']
  if (teamLeader1FirstName == "" || teamLeader1LastName == "" || teamLeader1Email == "" || teamLeader1Mobile == "" ){
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/manage-team-leader-1-error')
  } else {
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/team-leader-1-updated-confirmation')
  }
})

// Bulk Order Home Kits - Manage Team Leader 2
router.post('/bulk-order-test-kits/v1/action1/manage-team-leader-2', function (req, res) {
  let teamLeader1FirstName = req.session.data['team-leader-2-first-name']
  let teamLeader1LastName = req.session.data['team-leader-2-last-name']
  let teamLeader1Email = req.session.data['team-leader-2-email-address']
  let teamLeader1Mobile = req.session.data['team-leader-2-mobile-number']
  if (teamLeader1FirstName == "" || teamLeader1LastName == "" || teamLeader1Email == "" || teamLeader1Mobile == "" ){
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/manage-team-leader-2-error')
  } else {
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/team-leader-2-updated-confirmation')
  }
})

// Bulk Order Home Kits - Manage Team Leader 3
router.post('/bulk-order-test-kits/v1/action1/manage-team-leader-3', function (req, res) {
  let teamLeader1FirstName = req.session.data['team-leader-3-first-name']
  let teamLeader1LastName = req.session.data['team-leader-3-last-name']
  let teamLeader1Email = req.session.data['team-leader-3-email-address']
  let teamLeader1Mobile = req.session.data['team-leader-3-mobile-number']
  if (teamLeader1FirstName == "" || teamLeader1LastName == "" || teamLeader1Email == "" || teamLeader1Mobile == "" ){
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/manage-team-leader-3-error')
  } else {
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/team-leader-3-updated-confirmation')
  }
})

// Bulk Order Home Kits - Manage Team Leader 4
router.post('/bulk-order-test-kits/v1/action1/manage-team-leader-4', function (req, res) {
  let teamLeader1FirstName = req.session.data['team-leader-4-first-name']
  let teamLeader1LastName = req.session.data['team-leader-4-last-name']
  let teamLeader1Email = req.session.data['team-leader-4-email-address']
  let teamLeader1Mobile = req.session.data['team-leader-4-mobile-number']
  if (teamLeader1FirstName == "" || teamLeader1LastName == "" || teamLeader1Email == "" || teamLeader1Mobile == "" ){
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/manage-team-leader-4-error')
  } else {
    res.redirect('/bulk-order-home-kits/v1/manage-organisation/team-leader-4-updated-confirmation')
  }
})

// Bulk Order Home Kits - What Test Pacakge Order
router.post('/bulk-order-test-kits/v1/action1/what-test-package-order', function (req, res) {
  let testPackage = req.session.data['test-package']
  if (testPackage == "Sequenced pre-linked PCR test kit" || testPackage == "Private provider validation kit"){
    res.redirect('/bulk-order-home-kits/v1/order-kits/upload-file-test-package')
  } else {
    res.redirect('/bulk-order-home-kits/v1/order-kits/what-test-package-order-error')
  }
})

router.post('/delegated-access/hauliers/register/v2/uk/nhs-number-known', function (req, res) {
  var liveInUk = req.session.data['live-in-uk']

  // Check whether the variable matches a condition
  if (liveInUk == "yes"){
    // Send user to next page
    res.redirect('/delegated-access/hauliers/register/v2/uk/nhs-number-known')
  } else {
    // Send user to ineligible page
    res.redirect('/delegated-access/hauliers/register/v2/non-uk/check-your-answers')
  }

})

router.post('/delegated-access/hauliers/register/v2/uk/nhs-number', function (req, res) {
  var isNhsNumberKnown = req.session.data['nhs-number-known']

  // Check whether the variable matches a condition
  if (isNhsNumberKnown == "yes"){
    // Send user to next page
    res.redirect('/delegated-access/hauliers/register/v2/uk/nhs-number')
  } else {
    // Send user to ineligible page
    res.redirect('/delegated-access/hauliers/register/v2/uk/address')
  }

})

router.post('/delegated-access/hauliers/register/v2/uk/ethnic-group', function (req, res) {
let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/delegated-access/hauliers/register/v2/uk/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/delegated-access/hauliers/register/v2/uk/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/delegated-access/hauliers/register/v2/uk/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/delegated-access/hauliers/register/v2/uk/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/delegated-access/hauliers/register/v2/uk/ethnic-background-another')
  } else {
    res.redirect('/delegated-access/hauliers/register/v2/uk/check-your-answers')
  }

})

module.exports = router
