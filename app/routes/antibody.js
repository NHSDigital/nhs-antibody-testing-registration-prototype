const express = require('express')
const router = express.Router()

// Version 3 - Registration - Country route
router.post('/antibody/v3/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "England"){
    res.redirect('/antibody/v3/refer-and-triage/comfortable-doing-test')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/not-available')
  }

})

// Version 3 - Teacher registration - Comfortable doing test route
router.post('/antibody/v3/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v3/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/do-you-have-symptoms')
  }
})

// Version 3 - Teacher registration - Do you have symptoms route
router.post('/antibody/v3/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/antigen-test')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/infection-serious')
  }

})


// Version 3 - Registration - immuno condition
router.post('/antibody/v3/action/immunocompromised', function (req, res) {
  let condition = req.session.data['infection-serious']

  if (condition == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/immunocompromised')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/name')
  }

})

// Version 3 - Is your delivery address the same as your home address?
router.post('/antibody/v3/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v3/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v3/home-testing/home-address')
  }

})

// Version 3 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v3/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v3/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/comfortable-doing-test')
  }
})

// Version 3 - Teacher registration - Have you had symptoms route
router.post('/antibody/v3/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/tested-positive')
  }

})

// Version 3 - Teacher registration - Mobile phone
router.post('/antibody/v3/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']

  if (mobileNumber == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/postcode')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/postcode')
  }

})

// Version 3 - Teacher registration - Ethnic group route
router.post('/antibody/v3/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/working')
  }

})

// Version 3 - Teacher registration - currently working
router.post('/antibody/v3/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v3/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/occupation')
  }
})

// Version 3 - Teacher Registration - Tested positive route
router.post('/antibody/v3/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v3/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/household')
  }

})

// Version 3 - Registration - Do you have symptoms route
router.post('/antibody/v3/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v3/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v3/global-registration/landline-number')
  }

})

// Version 3 - Registration - Ethnic group route
router.post('/antibody/v3/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v3/refer-and-triage/ethnic-background-another')
  } else {
    res.redirect('/antibody/v3/refer-and-triage/working')
  }

})

// Version 3 - Registration - NHS number route
router.post('/antibody/v3/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v3/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v3/global-registration/check-your-answers')
  }

})



// Version 3 - Registration - Country route
router.post('/antibody/v3/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v3/home-testing')

})



// --- VERSION 4 ---

// Version 4 - Teacher registration - Comfortable doing test route
router.post('/antibody/v4/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/do-you-have-symptoms')
  }
})

// Version 4 - Registration - Country route
router.post('/antibody/v4/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/antibody/v4/refer-and-triage/comfortable-doing-test')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/comfortable-doing-test')
  }

})

// Version 4 - Teacher registration - Do you have symptoms route
router.post('/antibody/v4/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/name')
  }

})


// Version 4 - Registration - immuno condition
router.post('/antibody/v4/action/immunocompromised', function (req, res) {
  let condition = req.session.data['infection-serious']

  if (condition == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/name')
  }

})

// Version 4 - Is your delivery address the same as your home address?
router.post('/antibody/v4/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v4/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v4/home-testing/home-address')
  }

})

// Version 4 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v4/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/comfortable-doing-test')
  }
})

// Version 4 - Teacher registration - Have you had symptoms route
router.post('/antibody/v4/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/tested-positive')
  }

})

// Version 4 - Teacher registration - Mobile phone
router.post('/antibody/v4/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']
  let emailAddress = req.session.data['email']

  if (mobileNumber == "Yes") {
    res.redirect('/antibody/v4/refer-and-triage/email-address')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/not-eligible')
  }
})

// Version 4 - Teacher registration - Email address
router.post('/antibody/v4/action/email-address', function (req, res) {
  let emailAddress = req.session.data['email']
  if (emailAddress == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/postcode-ni')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/postcode-ni')
  }
})



// Version 4 - Teacher registration - Ethnic group route
router.post('/antibody/v4/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v4/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/working')
  }

})

// Version 4 - Teacher registration - currently working
router.post('/antibody/v4/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v4/refer-and-triage/have-you-had-symptoms')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/industry')
  }
})

// Version 4 - Registration - Social care
router.post('/antibody/v4/action/industry', function (req, res) {
let socialCareWorker = req.session.data['industry']

if (socialCareWorker = "Yes") {
  res.redirect('/antibody/v4/refer-and-triage/occupation')
} else {
  res.redirect('/antibody/v4/refer-and-triage/occupation')
}
})

// Version 4 - Registration - Ethnic group route
router.post('/antibody/v4/action/occupation', function (req, res) {
  let industry = req.session.data['industry']
  let occupation = req.session.data['occupation-autocomplete']

  if (industry == "Social care" || occupation == "Care worker or home carer" || occupation == "Residential, day or domiciliary care manager and proprietor" || occupation == "Care escort" || occupation == "Senior care worker"){
    res.redirect('/antibody/v4/refer-and-triage/social-role')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/have-you-had-symptoms')
  }
})

// Version 4 - Global Registration - NHS number
router.post('/antibody/v4/action/landline-number', function (req, res) {
  let country = req.session.data['country']

  if (country == "England"){
    res.redirect('/antibody/v4/global-registration/nhs-number-known')
  } else if (country = "Scotland") {
    res.redirect('/antibody/v4/global-registration/nhs-number-known')
  } else if (country = "Northern Ireland") {
    res.redirect('/antibody/v4/global-registration/nhs-number-known')
  } else {
    res.redirect('/antibody/v4/global-registration/nhs-number-known')
  }
})

// Version 4 - Registration - Social role
router.post('/antibody/v4/action/social-role', function (req, res) {
  let socialCareRole = req.session.data['social-role']

  if (socialCareRole == "Work in a single care home"){
    res.redirect('/antibody/v4/refer-and-triage/social-contact')
  } else if (socialCareRole == "Work in more than one care home") {
    res.redirect('/antibody/v4/refer-and-triage/social-contact')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/have-you-had-symptoms')
  }

})

// Version 4 - Registration - Social contact
router.post('/antibody/v4/action/social-contact', function (req, res) {
  let socialCareContact = req.session.data['social-contact']

  if (socialCareContact == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/care-home-id')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/care-home-id')
  }

})

// Version 4 - Teacher Registration - Tested positive route
router.post('/antibody/v4/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v4/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v4/refer-and-triage/household')
  }

})

// Version 4 - Registration - Do you have symptoms route
router.post('/antibody/v4/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms-2']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v4/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v4/global-registration/nhs-number-known')
  }

})

// Version 4 - Registration - Ethnic group route
router.post('/antibody/v4/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v4/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v4/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v4/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v4/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v4/global-registration/ethnic-background-another')
  } else {
    res.redirect('/antibody/v4/global-registration/working')
  }
})

// Version 4 - Registration - NHS number route
router.post('/antibody/v4/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v4/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v4/global-registration/check-your-answers')
  }

})

// Version 4 - Registration - Country route
router.post('/antibody/v4/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v4/home-testing')
})



// --- VERSION 5 ---

// Version 5 - Teacher registration - Comfortable doing test route
router.post('/antibody/v5/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v5/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/do-you-have-symptoms')
  }
})

// Version 5 - Registration - Country route
router.post('/antibody/v5/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/antibody/v5/refer-and-triage/comfortable-doing-test')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/comfortable-doing-test')
  }

})

// Version 5 - Teacher registration - Do you have symptoms route
router.post('/antibody/v5/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v5/refer-and-triage/antigen-test')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/name')
  }

})


// Version 5 - Registration - immuno condition
router.post('/antibody/v5/action/immunocompromised', function (req, res) {
  let condition = req.session.data['infection-serious']

  if (condition == "Yes"){
    res.redirect('/antibody/v5/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/name')
  }

})

// Version 5 - Is your delivery address the same as your home address?
router.post('/antibody/v5/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v5/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v5/home-testing/home-address')
  }

})

// Version 5 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v5/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v5/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/comfortable-doing-test')
  }
})

// Version 5 - Teacher registration - Have you had symptoms route
router.post('/antibody/v5/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v5/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/tested-positive')
  }
})

// Version 5 - Teacher registration - Email address
router.post('/antibody/v5/action/email-address', function (req, res) {
  let emailAddress = req.session.data['email']
  res.redirect('/antibody/v5/refer-and-triage/mobile-number')
})

// Version 5 - Teacher registration - Mobile phone
router.post('/antibody/v5/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']
  let emailAddress = req.session.data['email']

  if (mobileNumber == "Yes") {
    res.redirect('/antibody/v5/refer-and-triage/postcode-ni')
  } else {
    if (emailAddress == "No") {
      res.redirect('/antibody/v5/refer-and-triage/not-eligible')
    } else {
      res.redirect('/antibody/v5/refer-and-triage/postcode-ni')
    }
  }
})

// Version 5 - Teacher registration - Ethnic group route
router.post('/antibody/v5/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v5/refer-and-triage/ethnic-background')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/working')
  }
})

// Version 5 - Teacher registration - currently working
router.post('/antibody/v5/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v5/refer-and-triage/have-you-had-symptoms')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/industry')
  }
})

// Version 5 - Registration - Social care
router.post('/antibody/v5/action/industry', function (req, res) {
  let socialCareWorker = req.session.data['industry']

  if (socialCareWorker = "Yes") {
    res.redirect('/antibody/v5/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/occupation')
  }
})

// Version 5 - Registration - Ethnic group route
router.post('/antibody/v5/action/occupation', function (req, res) {
  let industry = req.session.data['industry']
  let occupation = req.session.data['occupation-autocomplete']

  if (industry == "Social care" || occupation == "Care worker or home carer" || occupation == "Residential, day or domiciliary care manager and proprietor" || occupation == "Care escort" || occupation == "Senior care worker"){
    res.redirect('/antibody/v5/refer-and-triage/social-role')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/have-you-had-symptoms')
  }
})

// Version 5 - Global Registration - NHS number
router.post('/antibody/v5/action/landline-number', function (req, res) {
  let country = req.session.data['country']

  if (country == "England"){
    res.redirect('/antibody/v5/global-registration/nhs-number-known')
  } else if (country = "Scotland") {
    res.redirect('/antibody/v5/global-registration/nhs-number-known')
  } else if (country = "Northern Ireland") {
    res.redirect('/antibody/v5/global-registration/nhs-number-known')
  } else {
    res.redirect('/antibody/v5/global-registration/nhs-number-known')
  }
})

// Version 5 - Registration - Social role
router.post('/antibody/v5/action/social-role', function (req, res) {
  let socialCareRole = req.session.data['social-role']

  if (socialCareRole == "Work in a single care home"){
    res.redirect('/antibody/v5/refer-and-triage/social-contact')
  } else if (socialCareRole == "Work in more than one care home") {
    res.redirect('/antibody/v5/refer-and-triage/social-contact')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/have-you-had-symptoms')
  }

})

// Version 5 - Registration - Social contact
router.post('/antibody/v5/action/social-contact', function (req, res) {
  let socialCareContact = req.session.data['social-contact']

  if (socialCareContact == "Yes"){
    res.redirect('/antibody/v5/refer-and-triage/care-home-id')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/care-home-id')
  }

})

// Version 5 - Teacher Registration - Tested positive route
router.post('/antibody/v5/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v5/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v5/refer-and-triage/household')
  }

})

// Version 5 - Registration - Do you have symptoms route
router.post('/antibody/v5/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms-2']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v5/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v5/global-registration/nhs-number-known')
  }

})

// Version 5 - Registration - Ethnic group route
router.post('/antibody/v5/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v5/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v5/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v5/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v5/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v5/global-registration/ethnic-background-another')
  } else {
    res.redirect('/antibody/v5/global-registration/working')
  }
})

// Version 5 - Registration - NHS number route
router.post('/antibody/v5/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v5/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v5/global-registration/check-your-answers')
  }

})

// Version 5 - Registration - Country route
router.post('/antibody/v5/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v5/home-testing')
})




// --- VERSION 6 ---

// Version 6 - Teacher registration - Comfortable doing test route
router.post('/antibody/v6/action/comfortable-doing-test', function (req, res) {
  consent = req.session.data['consent'];
  let comfortableDoingTest = req.session.data['comfortable-doing-test']
  if (comfortableDoingTest == "No" || consent == "No"){
    res.redirect('/antibody/v6/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/do-you-have-symptoms')
  }
})

// Version 6 - Registration - Country route
router.post('/antibody/v6/action2/country', function (req, res) {
  let country = req.session.data['country']

  if (country == "Northern Ireland"){
    res.redirect('/antibody/v6/refer-and-triage/comfortable-doing-test')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/comfortable-doing-test')
  }

})

// Version 6 - Teacher registration - Do you have symptoms route
router.post('/antibody/v6/action/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v6/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/name')
  }

})


// Version 6 - Registration - immuno condition
router.post('/antibody/v6/action/immunocompromised', function (req, res) {
  let condition = req.session.data['infection-serious']

  if (condition == "Yes"){
    res.redirect('/antibody/v6/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/name')
  }

})

// Version 6 - Is your delivery address the same as your home address?
router.post('/antibody/v6/action/home-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address-same']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/antibody/v6/home-testing/order-summary')
  } else {
    res.redirect('/antibody/v6/home-testing/home-address')
  }

})

// Version 6 - Teacher registration - Get consent data for the Comfortable doing test route

router.post('/antibody/v6/action/consent', function (req, res) {
  let consent = "";
  consent = req.session.data['consent'];

  if (consent == "No") {
    res.redirect('/antibody/v6/refer-and-triage/not-eligible')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/comfortable-doing-test')
  }
})

// Version 6 - Teacher registration - Have you had symptoms route
router.post('/antibody/v6/action/have-you-had-symptoms', function (req, res) {
  let haveYouHadSymptoms = req.session.data['have-you-had-symptoms']

  if (haveYouHadSymptoms == "Yes"){
    res.redirect('/antibody/v6/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/tested-positive')
  }
})

// Version 6 - Teacher registration - Email address
router.post('/antibody/v6/action/email-address', function (req, res) {
  let emailAddress = req.session.data['email']
  res.redirect('/antibody/v6/refer-and-triage/postcode-ni')
})

// Version 6 - Teacher registration - Mobile phone
router.post('/antibody/v6/action/mobile-number', function (req, res) {
  let mobileNumber = req.session.data['mobile-number']
  // let emailAddress = req.session.data['email']

  if (mobileNumber == "Yes") {
    res.redirect('/antibody/v6/refer-and-triage/email-address')
  } else {
      res.redirect('/antibody/v6/refer-and-triage/not-eligible')
  }

  // if (mobileNumber == "Yes") {
  //   res.redirect('/antibody/v6/refer-and-triage/postcode-ni')
  // } else {
  //   if (emailAddress == "No") {
  //     res.redirect('/antibody/v6/refer-and-triage/not-eligible')
  //   } else {
  //     res.redirect('/antibody/v6/refer-and-triage/postcode-ni')
  //   }
  // }
})

// Version 6 - Teacher registration - Ethnic group route
// router.post('/antibody/v6/action/ethnic-group', function (req, res) {
//   let ethnicGroup = req.session.data['ethnic-group']

//   if (ethnicGroup == "Asian or Asian British"){
//     res.redirect('/antibody/v6/refer-and-triage/ethnic-background')
//   } else {
//     res.redirect('/antibody/v6/refer-and-triage/working')
//   }
// })

// Version 6 - Teacher registration - Ethnic group route

router.post('/antibody/v6/action/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v6/refer-and-triage/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v6/refer-and-triage/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v6/refer-and-triage/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v6/refer-and-triage/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v6/refer-and-triage/ethnic-background-another')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/working')
  }

})

// Version 6 - Teacher registration - currently working
router.post('/antibody/v6/action/working', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "No"){
    res.redirect('/antibody/v6/refer-and-triage/have-you-had-symptoms')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/industry')
  }
})

// Version 6 - Registration - Social care
router.post('/antibody/v6/action/industry', function (req, res) {
  let socialCareWorker = req.session.data['industry']

  if (socialCareWorker = "Yes") {
    res.redirect('/antibody/v6/refer-and-triage/occupation')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/occupation')
  }
})

// Version 6 - Registration - Ethnic group route
// router.post('/antibody/v6/action/occupation', function (req, res) {
//   let industry = req.session.data['industry']
//   let occupation = req.session.data['occupation-autocomplete']

//   if (industry == "Social care" || occupation == "Care worker or home carer" || occupation == "Residential, day or domiciliary care manager and proprietor" || occupation == "Care escort" || occupation == "Senior care worker"){
//     res.redirect('/antibody/v6/refer-and-triage/social-role')
//   } else {
//     res.redirect('/antibody/v6/refer-and-triage/have-you-had-symptoms')
//   }
// })

// Version 6 - Global Registration - NHS number
// router.post('/antibody/v6/action/landline-number', function (req, res) {
//   let country = req.session.data['country']

//   if (country == "England"){
//     res.redirect('/antibody/v6/global-registration/nhs-number-known')
//   } else if (country = "Scotland") {
//     res.redirect('/antibody/v6/global-registration/nhs-number-known')
//   } else if (country = "Northern Ireland") {
//     res.redirect('/antibody/v6/global-registration/nhs-number-known')
//   } else {
//     res.redirect('/antibody/v6/global-registration/nhs-number-known')
//   }
// })

// Version 6 - Registration - Social role
// router.post('/antibody/v6/action/social-role', function (req, res) {
//   let socialCareRole = req.session.data['social-role']

//   if (socialCareRole == "Work in a single care home"){
//     res.redirect('/antibody/v6/refer-and-triage/social-contact')
//   } else if (socialCareRole == "Work in more than one care home") {
//     res.redirect('/antibody/v6/refer-and-triage/social-contact')
//   } else {
//     res.redirect('/antibody/v6/refer-and-triage/have-you-had-symptoms')
//   }

// })

// Version 6 - Registration - Social contact
router.post('/antibody/v6/action/social-contact', function (req, res) {
  let socialCareContact = req.session.data['social-contact']

  if (socialCareContact == "Yes"){
    res.redirect('/antibody/v6/refer-and-triage/care-home-id')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/care-home-id')
  }

})

// Version 6 - Teacher Registration - Tested positive route
router.post('/antibody/v6/action/tested-positive', function (req, res) {
  let testedPositive = req.session.data['tested-positive']

  if (testedPositive == "Yes"){
    res.redirect('/antibody/v6/refer-and-triage/tested-positive-date')
  } else {
    res.redirect('/antibody/v6/refer-and-triage/household')
  }

})

// Version 6 - Registration - Do you have symptoms route
router.post('/antibody/v6/action2/do-you-have-symptoms', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms-2']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v6/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v6/global-registration/landline-number')
  }

})

// Version 6 - Registration - Do you have symptoms route for LFT
router.post('/antibody/v6/action2/do-you-have-symptoms-lft', function (req, res) {
  let doYouHaveSymptoms = req.session.data['do-you-have-symptoms-2-lft']

  if (doYouHaveSymptoms == "Yes"){
    res.redirect('/antibody/v6/global-registration/get-antigen-test')
  } else {
    res.redirect('/antibody/v6/global-registration/lft/nhs-number-known')
  }

})

// Version 6 - Registration - Ethnic group route
router.post('/antibody/v6/action2/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antibody/v6/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antibody/v6/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antibody/v6/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antibody/v6/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antibody/v6/global-registration/ethnic-background-another')
  } else {
    res.redirect('/antibody/v6/global-registration/work-or-study')
  }
})

// Version 6 - Registration - Currently in work route

router.post('/antibody/v6/action3/work-or-study', function (req, res) {
  let inWork = req.session.data['work-or-study']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antibody/v6/global-registration/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antibody/v6/global-registration/study-grade')
  } else {
    res.redirect('/antibody/v6/global-registration/vaccine')
  }

})

// Version 6 - Registration - Coronavirus vaccine route

router.post('/antibody/v6/action9/vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/antibody/v6/global-registration/nhs-number-known')
  } else {
    res.redirect('/antibody/v6/global-registration/vaccine-date')
  }
})

// Version 6 - Registration - NHS number route
router.post('/antibody/v6/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antibody/v6/global-registration/nhs-number')
  } else {
    res.redirect('/antibody/v6/global-registration/check-your-answers')
  }

})

// Version 6 - Registration - Country route
router.post('/antibody/v6/action/people-confirmed', function (req, res) {
  res.redirect('/antibody/v6/home-testing')
})


module.exports = router
