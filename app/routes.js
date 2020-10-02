const express = require('express')
const router = express.Router()

// $('.govuk-error-summary').hide()

// Call in routes file from routes folder to keep routes.js cleaner
router.use('/', require('./routes/org-register.js'))
router.use('/', require('./routes/antibody.js'))
router.use('/', require('./routes/antigen.js'))

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
    res.redirect('/antibody/v2/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/comfortable-doing-test')
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
    res.redirect('/antibody/v2/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/do-you-have-symptoms')
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
    res.redirect('/antibody/v2/refer-and-triage/antigen-test')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/eligible')
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
    res.redirect('/antibody/v2/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/tested-positive')
  }

})

// Version 1 - Teacher registration - When did symptoms start route
router.post('/antibody/v1/action/when-did-symptoms-start', function (req, res) {
  let symptomsStartDay = req.session.data['symptoms-start-date-day']
  let symptomsStartMonth = req.session.data['symptoms-start-date-month']
  let symptomsStartYear = req.session.data['symptoms-start-date-year']

  if (symptomsStartDay == "" || symptomsStartMonth == "" || symptomsStartYear == ""){
    res.redirect('/antibody/v1/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/antibody/v1/refer-and-triage/tested-positive')
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
    res.redirect('/antibody/v2/refer-and-triage/email-address')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/not-eligible')
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
    res.redirect('/antibody/v2/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/working')
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
    res.redirect('/antibody/v2/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/occupation')
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
    res.redirect('/antibody/v2/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/household')
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
    res.redirect('/antibody/v2/refer-and-triage/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v2/refer-and-triage/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v2/refer-and-triage/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v2/refer-and-triage/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v2/refer-and-triage/ethnic-background-another')
  } else {
    res.redirect('/antibody/v2/refer-and-triage/occupation')
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

router.post('/antigen/v1/action3/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v1/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/postcode')
  }

})

// Version 1 - Antigen Refer and Triage - Do you have a car route

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

// Version 1 - Antigen Refer and Triage - How will you get test no car route

router.post('/antigen/v1/action3/how-will-you-get-test-no-car', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "walk-in"){
    res.redirect('/antigen/v1/refer-and-triage/visiting-walk-through')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/order-home-test-kit')
  }

})

// Version 1 - Antigen Refer and Triage - How will you get test no email route

router.post('/antigen/v1/action3/how-will-you-get-test-no-email', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v1/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/antigen/v1/refer-and-triage/visiting-walk-through')
  }

})

// Version 1 - Antigen Refer and Triage - How will you get test wrong postcode route

router.post('/antigen/v1/action3/how-will-you-get-test-wrong-postcode', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v1/refer-and-triage/visiting-drive-through')
  } else {
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
    res.redirect('/antigen/v1/global-registration/currently-in-work')
  }

})

// Version 1 - Antigen Global Registration - Currently in work route

router.post('/antigen/v1/action3/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antigen/v1/global-registration/country')
  } else {
    res.redirect('/antigen/v1/global-registration/industry')
  }

})

// Version 1 - Antigen Global Registration - NHS number known route

router.post('/antigen/v1/action3/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v1/global-registration/nhs-number')
  } else {
    res.redirect('/antigen/v1/global-registration/check-your-answers')
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
    res.redirect('/antigen/v1/global-registration/currently-in-work-person-1')
  }
})

// Version 1 - Antigen Global Registration - Country route

router.post('/antigen/v1/action3/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "Northern Ireland"){
    res.redirect('/antigen/v1/global-registration/address')
  } else {
    res.redirect('/antigen/v1/global-registration/nhs-number-known')
  }

})

// Version 1 - Antigen Global Registration - Country person 1 route

router.post('/antigen/v1/action3/country-person-1', function (req, res) {
  let country = req.session.data['country-person-1']
  if (country == "Northern Ireland"){
    res.redirect('/antigen/v1/global-registration/address-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/postcode-person-1')
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

router.post('/antigen/v1/action3/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "No"){
    res.redirect('/antigen/v1/global-registration/country-person-1')
  } else {
    res.redirect('/antigen/v1/global-registration/industry-person-1')
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
  let chosenTime = req.session.data['time']
  if (chosenTime == "17th March: 8am to 9am" || chosenTime == "16th March: 8am to 9am" || chosenTime == "18th March: 8am to 9am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available-drive')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/vehicle-registration-number')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v1/action3/choose-time-walk', function (req, res) {
  let chosenTime = req.session.data['time']
  if (chosenTime == "17th March: 8am to 9am" || chosenTime == "16th March: 8am to 9am" || chosenTime == "18th March: 8am to 9am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available-walk')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment-walk')
  }

})

// Version 1 - Antigen Order Home Test Kit - Confirm identity route

router.post('/antigen/v1/action5/confirm-identity', function (req, res) {
  let confirmIdentity = req.session.data['confirm-identity']
  if (confirmIdentity == "Yes"){
    res.redirect('/antigen/v1/order-home-test-kit/identity-confirmed')
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

// Version 1 - Lite registration -  route

router.post('/lite-registration/v1/action6/test-place', function (req, res) {
  let testPlace = req.session.data['test-place']
  if (testPlace == "drive-through") {
    res.redirect('/lite-registration/v1/find-test-site-drive')
  } else if (testPlace == "walk-through") {
    res.redirect('/lite-registration/v1/find-test-site-walk')
  } else {
    res.redirect('/lite-registration/v1/enter-barcode')
  }

})

// Version 1 - Antigen Global Registration - Ethnic group route

router.post('/lite-registration/v1/action6/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/lite-registration/v1/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/lite-registration/v1/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/lite-registration/v1/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/lite-registration/v1/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/lite-registration/v1/ethnic-background-another')
  } else {
    res.redirect('/lite-registration/v1/currently-in-work')
  }

})

// Version 1 - Antigen Global Registration - Currently in work route

router.post('/lite-registration/v1/action3/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/lite-registration/v1/do-you-have-symptoms')
  } else {
    res.redirect('/lite-registration/v1/industry')
  }

})

// Version 1 - Antigen Refer and Triage - Do you have symptoms route

router.post('/lite-registration/v1/action3/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/lite-registration/v1/when-did-symptoms-start')
  } else {
    res.redirect('/lite-registration/v1/email-address')
  }

})

// Version 1 - Antigen Global Registration - Country route

router.post('/lite-registration/v1/action6/country', function (req, res) {
  let country = req.session.data['country']
  if (country == "Northern Ireland"){
    res.redirect('/lite-registration/v1/address')
  } else {
    res.redirect('/lite-registration/v1/nhs-number-known')
  }

})

// Version 1 - Lite Registration - NHS number known route

router.post('/lite-registration/v1/action6/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/lite-registration/v1/nhs-number')
  } else {
    res.redirect('/lite-registration/v1/check-your-answers')
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

// Version 1 - Moonshot User account - Login email route
router.post('/moonshot/v1/action7/login-email', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/moonshot/v1/user-account/enter-password')
  } else {
    res.redirect('/moonshot/v1/user-account/create-password')
  }

})

// Version 1 - Moonshot User account - Home page testing route
router.post('/moonshot/v1/action7/home-page-get-tested', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == 'user@testing.co.uk'){
    res.redirect('/moonshot/v1/refer-and-triage/reason-for-test')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/')
  }

})

// Version 1 - Moonshot User account - Home page personal details route
/*router.post('/moonshot/v1/action7/home-page-personal-details', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail){
    res.redirect('/moonshot/v1/household-members/')
  } else {
    res.redirect('/moonshot/v1/household-members/')
  }

})
*/

// Version 1 - Moonshot User account - Home page personal details route
// router.post('/moonshot/v1/action7/home-page-household-members', function (req, res) {
//   let loginEmail = req.session.data['email-address']

//   if (loginEmail == "user@testing.co.uk"){
//     res.redirect('/moonshot/v1/household-members/household-members-list')
//   } else {
//     res.redirect('/moonshot/v1/household-members/')
//   }

// })

// Version 1 - Moonshot Refer and triage - name route
router.post('/moonshot/v1/action7/', function (req, res) {
  let password = req.session.data['password']

  if (password == undefined){
    res.redirect('/moonshot/v1/refer-and-triage/mobile-number')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/reason-for-test')
  }

})

// Version 1 - Moonshot Refer and triage - mobile number route
router.post('/moonshot/v1/action7/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/moonshot/v1/refer-and-triage/email-address')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/call-us')
  }

})

// Version 1 - Moonshot Refer and triage - do you have symptoms route
router.post('/moonshot/v1/action7/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  let loginEmail = req.session.data['email-address']

  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/refer-and-triage/when-did-symptoms-start')
  } else if(symptoms == "No" && loginEmail == "user@testing.co.uk") {
    res.redirect('/moonshot/v1/refer-and-triage/do-you-have-a-car')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/postcode')
  }

})

// Version 1 - Moonshot Refer and triage - when did symptoms start route
router.post('/moonshot/v1/action7/when-did-symptoms-start', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/moonshot/v1/refer-and-triage/do-you-have-a-car')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/postcode')
  }

})

// Version 1 - Moonshot Refer and Triage - Security check route

router.post('/moonshot/v1/action7/security-check', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email-address']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress !== undefined){
    res.redirect('/moonshot/v1/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress == undefined && postcode == "N0000"){
    res.redirect('/moonshot/v1/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/how-will-you-get-test')
  }

})

  // Version 1 - Moonshot Refer and Triage - How will you get test route

router.post('/moonshot/v1/action7/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/moonshot/v1/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/moonshot/v1/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/moonshot/v1/refer-and-triage/order-home-test-kit')
  }

})

// Version 1 - Moonshot Refer and Triage - How will you get test no car route

router.post('/moonshot/v1/action7/how-will-you-get-test-no-car', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "walk-in"){
    res.redirect('/moonshot/v1/refer-and-triage/visiting-walk-through')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/order-home-test-kit')
  }

})

// Version 1 - Moonshot Refer and Triage - How will you get test no email route

router.post('/moonshot/v1/action7/how-will-you-get-test-no-email', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/moonshot/v1/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/visiting-walk-through')
  }

})

// Version 1 - Moonshot Refer and Triage - How will you get test wrong postcode route

router.post('/moonshot/v1/action7/how-will-you-get-test-wrong-postcode', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/moonshot/v1/refer-and-triage/visiting-drive-through')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/order-home-test-kit')
  }

})

// Version 1 - Moonshot Refer and triage - Visiting a drive-through site route
router.post('/moonshot/v1/action7/visiting-drive-through', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/moonshot/v1/household-members/')
  } else {
    res.redirect('/moonshot/v1/global-registration/')
  }

})

// Version 1 - Moonshot Refer and triage - Visiting a walk-through site route
router.post('/moonshot/v1/action7/visiting-walk-through', function (req, res) {
  let loginEmail = req.session.data['email-address']

  if (loginEmail == "user@testing.co.uk"){
    res.redirect('/moonshot/v1/household-members/')
  } else {
    res.redirect('/moonshot/v1/global-registration/')
  }

})

// Version 1 - Moonshot Refer and Triage - Order home test kit route

router.post('/moonshot/v1/action7/order-home-test-kit', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email-address']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress !== undefined){
    res.redirect('/moonshot/v1/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress == undefined && postcode == "N0000"){
    res.redirect('/moonshot/v1/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/how-will-you-get-test')
  }

})

// Version 1 - Is your delivery address the same as your home address?
router.post('/moonshot/v1/action5/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/moonshot/v1/order-home-test-kit/confirm-email-address')
  } else {
    res.redirect('/moonshot/v1/order-home-test-kit/delivery-postcode')
  }

})

// Version 1 - Moonshot Order Home Test Kit - Confirm identity route

router.post('/moonshot/v1/action5/confirm-identity', function (req, res) {
  let confirmIdentity = req.session.data['confirm-identity']
  if (confirmIdentity == "Yes"){
    res.redirect('/moonshot/v1/order-home-test-kit/identity-confirmed')
  } else {
    res.redirect('/moonshot/v1/refer-and-triage/')
  }

})

// Version 1 - Moonshot Global Registration - Ethnic group route

router.post('/moonshot/v1/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/moonshot/v1/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/moonshot/v1/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/moonshot/v1/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/moonshot/v1/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/moonshot/v1/global-registration/ethnic-background-another')
  } else {
    res.redirect('/moonshot/v1/global-registration/currently-in-work')
  }

})

// Version 1 - Moonshot Global Registration - Country route
router.post('/moonshot/v1/action3/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/moonshot/v1/global-registration/address')
  } else {
    res.redirect('/moonshot/v1/global-registration/nhs-number-known')
  }

})

// Version 1 - Moonshot Global Registration - Currently in work route

router.post('/moonshot/v1/action3/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/moonshot/v1/global-registration/country')
  } else {
    res.redirect('/moonshot/v1/global-registration/industry')
  }

})

// Version 1 - Moonshot Global Registration - NHS number known route

router.post('/moonshot/v1/action7/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/moonshot/v1/global-registration/nhs-number')
  } else {
    res.redirect('/moonshot/v1/global-registration/check-your-answers')
  }

})

// Version 1 - Moonshot Household members - People confirmed route

router.post('/moonshot/v1/action7/people-confirmed', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email-address']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  let loginEmail = req.session.data['email-address']
  if (chosenWayToTest == "drive-through" && loginEmail !== "user@testing.co.uk"){
    res.redirect('/moonshot/v1/site-appointment-booking/vehicle-registration-number')
  } else if (chosenWayToTest == "drive-through" && loginEmail == "user@testing.co.uk") {
    res.redirect('/moonshot/v1/site-appointment-booking/is-your-vehicle-registration-number')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing" && loginEmail == "user@testing.co.uk") {
    res.redirect('/moonshot/v1/order-home-test-kit/order-summary')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== undefined) {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/vehicle-registration-number')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  }

})

// Version 1 - Moonshot Global Registration - Do you have symptoms person 1 route

router.post('/moonshot/v1/action7/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/household-members/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/mobile-number-person-1')
  }

})

// Version 1 - Moonshot Global Registration - Ethnic group person 1 route

router.post('/moonshot/v1/action7/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/moonshot/v1/household-members/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-another-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/currently-in-work-person-1')
  }
})

// // Version 1 - Antigen Global Registration - Country route

// router.post('/antigen/v1/action3/country', function (req, res) {
//   let country = req.session.data['country']
//   if (country == "Northern Ireland"){
//     res.redirect('/antigen/v1/global-registration/address')
//   } else {
//     res.redirect('/antigen/v1/global-registration/nhs-number-known')
//   }

// })

// Version 1 - Moonshot Global Registration - Currently in work person 1 route

router.post('/moonshot/v1/action7/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "No"){
    res.redirect('/moonshot/v1/household-members/country-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/industry-person-1')
  }

})

// Version 1 - Moonshot Global Registration - Country person 1 route

router.post('/moonshot/v1/action7/country-person-1', function (req, res) {
  let country = req.session.data['country-person-1']
  if (country == "Northern Ireland"){
    res.redirect('/moonshot/v1/household-members/address-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/postcode-person-1')
  }

})

// Version 1 - Moonshot Global Registration - NHS number known person 1 route

router.post('/moonshot/v1/action7/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/moonshot/v1/household-members/nhs-number-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/check-your-answers-person-1')
  }

})

// Version 1 - Moonshot Global Registration - Currently in work person 1 route

// router.post('/moonshot/v1/action3/currently-in-work-person-1', function (req, res) {
//   let inWork = req.session.data['currently-in-work-person-1']
//   if (inWork == "No"){
//     res.redirect('/moonshot/v1/household-members/country-person-1')
//   } else {
//     res.redirect('/moonshot/v1/household-members/industry-person-1')
//   }

// })

// Version 1 - Moonshot Global Registration - check your answers person 1 route

router.post('/moonshot/v1/action7/check-your-answers-person-1', function (req, res) {
  let password = req.session.data['password']
  let loginEmail = req.session.data['email-address']
  let addPerson1 = req.session.data['add-to-household-person-1']
  if (loginEmail == "user@testing.co.uk" && addPerson1 !== "Yes"){
    res.redirect('/moonshot/v1/household-members/add-to-household-person-1')
  } else if (password !== undefined && addPerson1 !== "Yes"){
    res.redirect('/moonshot/v1/household-members/add-to-household-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/people-confirmed-person-1')
  }

})

// Version 1 - Moonshot Global Registration - people confirmed person 1 route

router.post('/moonshot/v1/action7/people-confirmed-person-1', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email-address']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  let loginEmail = req.session.data['email-address']
  if (chosenWayToTest == "drive-through" && loginEmail !== "user@testing.co.uk" ){
    res.redirect('/moonshot/v1/site-appointment-booking/vehicle-registration-number')
  } else if (chosenWayToTest == "drive-through" && loginEmail == "user@testing.co.uk") {
    res.redirect('/moonshot/v1/site-appointment-booking/is-your-vehicle-registration-number')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== undefined) {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  }

})

// Version 1 - Moonshot Global Registration - Do you have symptoms person 2 route

router.post('/moonshot/v1/action7/do-you-have-symptoms-person-2', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-2']
  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/household-members/when-did-symptoms-start-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/mobile-number-person-2')
  }

})

// Version 1 - Moonshot Global Registration - Ethnic group person 2 route

router.post('/moonshot/v1/action7/ethnic-group-person-2', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-2']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/moonshot/v1/household-members/ethnic-background-asian-person-2')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-black-person-2')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-mixed-person-2')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-white-person-2')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/moonshot/v1/household-members/ethnic-background-another-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/currently-in-work-person-2')
  }

})

// Version 1 - Moonshot Global Registration - Currently in work person 2 route

router.post('/moonshot/v1/action7/currently-in-work-person-2', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-2']
  if (inWork == "No"){
    res.redirect('/moonshot/v1/household-members/country-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/industry-person-2')
  }

})

// Version 1 - Moonshot Global Registration - Country person 2 route

router.post('/moonshot/v1/action7/country-person-2', function (req, res) {
  let country = req.session.data['country-person-2']
  if (country == "Northern Ireland"){
    res.redirect('/moonshot/v1/household-members/address-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/postcode-person-2')
  }

})

// Version 1 - Moonshot Global Registration - NHS number known person 2 route

router.post('/moonshot/v1/action7/nhs-number-known-person-2', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-2']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/moonshot/v1/household-members/nhs-number-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/check-your-answers-person-2')
  }

})

// Version 1 - Moonshot Global Registration - check your answers person 2 route

router.post('/moonshot/v1/action7/check-your-answers-person-2', function (req, res) {
  let password = req.session.data['password']
  let loginEmail = req.session.data['email-address']
  let addPerson1 = req.session.data['add-to-household-person-2']
  if (loginEmail == "user@testing.co.uk" && addPerson1 !== "Yes"){
    res.redirect('/moonshot/v1/household-members/add-to-household-person-2')
  } else if (password !== undefined && addPerson1 !== "Yes"){
    res.redirect('/moonshot/v1/household-members/add-to-household-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/people-confirmed-person-2')
  }

})

// Version 1 - Moonshot Global Registration - people confirmed person 2 route

router.post('/moonshot/v1/action7/people-confirmed-person-2', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email-address']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  let loginEmail = req.session.data['email-address']
  if (chosenWayToTest == "drive-through" && loginEmail !== "user@testing.co.uk" ){
    res.redirect('/moonshot/v1/site-appointment-booking/vehicle-registration-number')
  } else if (chosenWayToTest == "drive-through" && loginEmail == "user@testing.co.uk") {
    res.redirect('/moonshot/v1/site-appointment-booking/is-your-vehicle-registration-number')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== undefined) {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/find-test-site')
  }

})

// Version 1 - Moonshot Household Members List - Do you have symptoms person 1 route

router.post('/moonshot/v1/action7/household-members-list-add-people/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/mobile-number-person-1')
  }

})

// Version 1 - Moonshot Household Members List - Do you have symptoms person 2 route

router.post('/moonshot/v1/action7/household-members-list-add-people/do-you-have-symptoms-person-2', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-2']
  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/when-did-symptoms-start-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/mobile-number-person-2')
  }

})

// Version 1 - Moonshot Household Members List - Ethnic group person 1 route

router.post('/moonshot/v1/action7/household-members-list-add-people/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-another-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/currently-in-work-person-1')
  }

})

// Version 1 - Moonshot Household Members List - Ethnic group person 2 route

router.post('/moonshot/v1/action7/household-members-list-add-people/ethnic-group-person-2', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-2']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-asian-person-2')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-black-person-2')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-mixed-person-2')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-white-person-2')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/ethnic-background-another-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/currently-in-work-person-2')
  }

})

// Version 1 - Moonshot Household Members List - Currently in work person 1 route

router.post('/moonshot/v1/action7/household-members-list-add-people/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "No"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/country-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/industry-person-1')
  }

})

// Version 1 - Moonshot Household Members List - Currently in work person 2 route

router.post('/moonshot/v1/action7/household-members-list-add-people/currently-in-work-person-2', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-2']
  if (inWork == "No"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/country-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/industry-person-2')
  }

})

// Version 1 - Moonshot Household Members List - Country person 1 route

router.post('/moonshot/v1/action7/household-members-list-add-people/country-person-1', function (req, res) {
  let country = req.session.data['country-person-1']
  if (country == "Northern Ireland"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/address-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/postcode-person-1')
  }

})

// Version 1 - Moonshot Household Members List - Country person 2 route

router.post('/moonshot/v1/action7/household-members-list-add-people/country-person-2', function (req, res) {
  let country = req.session.data['country-person-2']
  if (country == "Northern Ireland"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/address-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/postcode-person-2')
  }

})

// Version 1 - Moonshot Household Members List - NHS number known person 1 route

router.post('/moonshot/v1/action7/household-members-list-add-people/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/nhs-number-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/check-your-answers-person-1')
  }

})

// Version 1 - Moonshot Household Members List - NHS number known person 2 route

router.post('/moonshot/v1/action7/household-members-list-add-people/nhs-number-known-person-2', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-2']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/nhs-number-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/household-members-list-add-people/check-your-answers-person-2')
  }

})

// Version 1 - Moonshot Site Appointment Booking - Choose time prev day route

router.post('/moonshot/v1/action7/choose-time-drive', function (req, res) {
  let chosenTime = req.session.data['time']
  if (chosenTime == "17th March: 8am to 9am" || chosenTime == "16th March: 8am to 9am" || chosenTime == "18th March: 8am to 9am"){
    res.redirect('/moonshot/v1/site-appointment-booking/time-not-available-drive')
  } else {
    res.redirect('/moonshot/v1/site-appointment-booking/confirm-appointment-walk')
  }

})

// Version 1 - Moonshot Site Appointment Booking - Choose time prev day route

router.post('/moonshot/v1/action7/choose-time-walk', function (req, res) {
  let chosenTime = req.session.data['time']
  if (chosenTime == "17th March: 8am to 9am" || chosenTime == "16th March: 8am to 9am" || chosenTime == "18th March: 8am to 9am"){
    res.redirect('/moonshot/v1/site-appointment-booking/time-not-available-walk')
  } else {
    res.redirect('/moonshot/v1/site-appointment-booking/confirm-appointment-walk')
  }

})

// Version 1 - Moonshot Site Appointment Booking - find a test site route

router.post('/moonshot/v1/action7/find-test-site', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email-address']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/moonshot/v1/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/moonshot/v1/site-appointment-booking/choose-walk-through-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== undefined) {
    res.redirect('/moonshot/v1/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == undefined) {
    res.redirect('/moonshot/v1/site-appointment-booking/choose-walk-through-site')
  }

})

// Version 1 - Moonshot Household members - Add person route

router.post('/moonshot/v1/action7/add-person', function (req, res) {
  let loginEmail = req.session.data['email-address']
  let password = req.session.data['password']
  if (loginEmail == "user@testing.co.uk" || password !== undefined){
    res.redirect('/moonshot/v1/household-members/select-household-member')
  } else {
    res.redirect('/moonshot/v1/household-members/name-person-1')
  }

})

// Version 1 - Moonshot Household members - Select household member route

router.post('/moonshot/v1/action7/select-household-member', function (req, res) {
  let selectedPerson = req.session.data['select-person']
  let password = req.session.data['password']
  let loginEmail = req.session.data['email-address']
  if (loginEmail == "user@testing.co.uk" && selectedPerson == "1" ){
    res.redirect('/moonshot/v1/refer-and-triage/reason-for-test')
  } else if (password !== undefined && selectedPerson == "4" ){
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/do-you-have-symptoms-person-1')
  } else if (password !== undefined && selectedPerson == "2" ){
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/do-you-have-symptoms-person-1')
  } else if (selectedPerson == "2" && loginEmail == "user@testing.co.uk" ){
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/do-you-have-symptoms-person-1')
  } else if (selectedPerson == "3" && loginEmail == "user@testing.co.uk" ){
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/do-you-have-symptoms-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/name-person-1')
  }

})

// Version 1 - Moonshot Household Members List - Do you have symptoms person 1 route

router.post('/moonshot/v1/action7/add-existing-member-to-test/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/email-address-person-1')
  }

})

// Version 1 - Moonshot Household Members List - Do you have symptoms person 1 route

router.post('/moonshot/v1/action7/add-existing-member-to-test/do-you-have-symptoms-person-2', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-2']
  if (symptoms == "Yes"){
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/when-did-symptoms-start-person-2')
  } else {
    res.redirect('/moonshot/v1/household-members/add-existing-member-to-test/email-address-person-2')
  }

})

// Version 1 - Moonshot Household members - is your vehicle registration number route

router.post('/moonshot/v1/action7/is-your-vehicle-registration-number', function (req, res) {
  let regNumber = req.session.data['is-your-reg']
  if (regNumber == "Yes" ){
    res.redirect('/moonshot/v1/site-appointment-booking/choose-drive-through-site')
  } else {
    res.redirect('/moonshot/v1/site-appointment-booking/vehicle-registration-number')
  }

})

// Version 1 - Moonshot create password validation
router.post('/moonshot/v1/action3/create-password', function (req, res) {
  let password = req.session.data['password']
  let confirmPassword = req.session.data['confirm-password']
  if (password == "" || confirmPassword == "") {
    res.redirect('/moonshot/v1/user-account/create-password-error')
  } else {
    res.redirect('/moonshot/v1/user-account/check-email')
  }
})

// Version 1 - Moonshot check mobile validation
router.post('/moonshot/v1/action3/check-mobile', function (req, res) {
  let securityCode = req.session.data['security-code']
  if (securityCode == "") {
    res.redirect('/moonshot/v1/user-account/check-mobile-error')
  } else {
    res.redirect('/moonshot/v1/user-account/agreement')
  }
})

// Version 1 - Moonshot Edit Peronsal Details - Ethnic group route
router.post('/moonshot/v1/action7/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/moonshot/v1/user-account/edit-personal-details/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/moonshot/v1/user-account/edit-personal-details/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/moonshot/v1/user-account/edit-personal-details//ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/moonshot/v1/user-account/edit-personal-details/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/moonshot/v1/user-account/edit-personal-details/ethnic-background-another')
  } else {
    res.redirect('/moonshot/v1/user-account/edit-personal-details')
  }

})



module.exports = router
