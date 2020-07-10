const express = require('express')
const router = express.Router()

// $('.govuk-error-summary').hide()

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

// Version 2 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/v2/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/v2/teacher-registration/not-eligible')
  } else {
    res.redirect('/v2/teacher-registration/comfortable-doing-test')
  }
})

// Version 1 - Teacher registration - Comfortable doing test route
router.post('/v1/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No"){
    res.redirect('/v1/teacher-registration/not-eligible')
  } else if (comfortableDoingTest == undefined) {
    res.redirect('/v1/teacher-registration/comfortable-doing-test-error')
  } else {
    res.redirect('/v1/teacher-registration/do-you-have-symptoms')
  }
})
// Version 2 - Teacher registration - Comfortable doing test route
router.post('/v2/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
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
    res.redirect('/v1/teacher-registration/not-eligible')
  } else {
    res.redirect('/v1/teacher-registration/name')
  }

})
// Version 2 - Teacher registration - Do you have symptoms route
router.post('/v2/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/v2/teacher-registration/antigen-test')
  } else {
    res.redirect('/v2/teacher-registration/eligible')
  }

})

// Version 1 - Teacher registration - Have you had symptoms route
router.post('/v1/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/v1/teacher-registration/when-did-symptoms-start')
  } else {
    res.redirect('/v1/teacher-registration/tested-positive')
  }

})
// Version 2 - Teacher registration - Have you had symptoms route
router.post('/v2/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/v2/teacher-registration/when-did-symptoms-start')
  } else {
    res.redirect('/v2/teacher-registration/tested-positive')
  }

})

// Version 1 - Teacher registration - When did symptoms start route
router.post('/v1/action/when-did-symptoms-start', function (req, res) {
  let symptomsStartDay = req.session.data['symptoms-start-date-day']
  let symptomsStartMonth = req.session.data['symptoms-start-date-month']
  let symptomsStartYear = req.session.data['symptoms-start-date-year']

  if (symptomsStartDay == "" || symptomsStartMonth == "" || symptomsStartYear == ""){
    res.redirect('/v1/teacher-registration/when-did-symptoms-start-error')
  } else {
    res.redirect('/v1/teacher-registration/tested-positive')
  }

})

// Version 1 - Teacher registration - Mobile phone
router.post('/v1/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/v1/teacher-registration/email-address')
  } else {
    res.redirect('/v1/teacher-registration/not-eligible')
  }

})

// Version 2 - Teacher registration - Mobile phone
router.post('/v2/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/v2/teacher-registration/email-address')
  } else {
    res.redirect('/v2/teacher-registration/not-eligible')
  }

})

// Version 1 - Teacher registration - Ethnic group route
router.post('/v1/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/v1/teacher-registration/ethnic-background')
  } else {
    res.redirect('/v1/teacher-registration/occupation')
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
router.post('/v2/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/v2/teacher-registration/tested-positive-date')
  } else {
    res.redirect('/v2/teacher-registration/household')
  }

})

// Version 1 - Registration - Do you have symptoms route
router.post('/v1/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/v1/registration/get-antigen-test')
  } else {
    res.redirect('/v1/registration/landline-number')
  }

})
// Version 2 - Registration - Do you have symptoms route
router.post('/v2/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/v2/teacher-registration/get-antigen-test')
  } else {
    res.redirect('/v2/registration/landline-number')
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
    res.redirect('/v2/registration/nhs-number-known')
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

// Version 1 - Antigen Refer and Triage - Email address route

// router.post('/antigen/v1/action3/email-address', function (req, res) {
//   let emailAddress = req.session.data['email']
//   let mobilePhoneNumber = req.session.data['mobile-number']
//   if (emailAddress == "No" && mobilePhoneNumber == "No"){
//     res.redirect('/antigen/v1/refer-and-triage/call-us')
//   } else {
//     res.redirect('/antigen/v1/refer-and-triage/reason-for-test')
//   }

// })

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

router.post('/antigen/v1/action3/do-you-have-a-car', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "Yes" && emailAddress == "No" && postcode !== "N0000"){
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test-no-email')
  } else if (car == "No" && emailAddress == "Yes" && postcode !== "N0000") {
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test-no-car')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test-wrong-postcode')
  } else if (car == "Yes" && emailAddress == "No" && postcode == "N0000"){
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-drive-through-test')
  } else if (car == "Yes" && emailAddress == "Yes" && postcode !== "N0000"){
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test')
  }

})

// Version 1 - Antigen Refer and Triage - Do you have a car route

router.post('/antigen/v1/action3/order-home-test-kit', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "Yes" && emailAddress == "No" && postcode == "N0000"){
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-drive-through-test')
  } else if (car == "No" && emailAddress == "Yes" && postcode !== "N0000") {
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test-no-car')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/refer-and-triage/how-will-you-get-test-wrong-postcode')
  } else if (car == "Yes" && postcode !== "N0000" && emailAddress == "Yes") {
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
    res.redirect('/antigen/v1/global-registration/landline-number')
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
    res.redirect('/antigen/v1/global-registration/postcode')
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
    res.redirect('/antigen/v1/global-registration/landline-number-person-1')
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
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-walk-through-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v1/home-testing/index')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/home-testing/index')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-walk-through-site')
  }

})

// Version 1 - Antigen Global Registration - people confirmed person 1 route

router.post('/antigen/v1/action3/people-confirmed-person-1', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-walk-through-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v1/home-testing/index')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v1/home-testing/index')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress == "No") {
    res.redirect('/antigen/v1/site-appointment-booking/choose-walk-through-site')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time route

router.post('/antigen/v1/action3/choose-time', function (req, res) {
  let chosenWayToTest = req.session.data['way-to-test']
  let chosenTime = req.session.data['time']
  if (chosenTime == "17th March: 8am to 9am" || chosenTime == "16th March: 8am to 9am" || chosenTime == "18th March: 8am to 9am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available')
  } else if (chosenWayToTest == "drive-through" ) {
    res.redirect('/antigen/v1/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v1/action3/choose-time-prev-day', function (req, res) {
  let chosenWayToTest = req.session.data['way-to-test']
  let chosenTime = req.session.data['time']
  if (chosenTime == "8am to 9am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available')
  } else if (chosenWayToTest == "drive-through" && chosenTime !== "8am to 9am") {
    res.redirect('/antigen/v1/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment')
  }

})

// Version 1 - Antigen Site Appointment Booking - Choose time next day route

router.post('/antigen/v1/action3/choose-time-next-day', function (req, res) {
  let chosenWayToTest = req.session.data['way-to-test']
  let chosenTime = req.session.data['time']
  if (chosenTime == "8am to 9am"){
    res.redirect('/antigen/v1/site-appointment-booking/time-not-available')
  } else if (chosenWayToTest == "drive-through" && chosenTime !== "8am to 9am") {
    res.redirect('/antigen/v1/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v1/site-appointment-booking/confirm-appointment')
  }

})


module.exports = router
