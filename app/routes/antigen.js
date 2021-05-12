const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}



// Version 2 - Antigen Refer and Triage - Mobile number route

router.post('/antigen/v2/action3/mobile-number', function (req, res) {
  let mobilePhoneNumber = req.session.data['mobile-number']
  if (mobilePhoneNumber == "No"){
    res.redirect('/antigen/v2/refer-and-triage/call-us')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/email-address')
  }

})

// Version 2 - Antigen Refer and Triage - Do you have symptoms route

router.post('/antigen/v2/action3/do-you-have-symptoms', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/follow-up-test')
  }

})

router.post('/antigen/v2/action3/do-you-have-symptoms-person-1', function (req, res) {
  let symptoms = req.session.data['do-you-have-symptoms-person-1']
  if (symptoms == "Yes"){
    res.redirect('/antigen/v2/global-registration/when-did-symptoms-start-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/mobile-number-person-1')
  }

})

// Version 2 - Antigen Refer and Triage - When did symptoms start route

// router.post('/antigen/v2/action3/when-did-symptoms-start', function (req, res) {
//   let yearSymptomsStarted = req.session.data['symptoms-start-date-year']
//   if (yearSymptomsStarted != "2021"){
//     res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start-error')
//   } else {
//     res.redirect('/antigen/v2/refer-and-triage/government-pilot')
//   }

// })

// Version 2 - Antigen Refer and Triage - When did symptoms start error route

// router.post('/antigen/v2/action3/when-did-symptoms-start-error', function (req, res) {
//   let yearSymptomsStarted = req.session.data['symptoms-start-date-year']
//   if (yearSymptomsStarted != "2021"){
//     res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start-error')
//   } else {
//     res.redirect('/antigen/v2/refer-and-triage/government-pilot')
//   }

// })

// Version 2 - Antigen Refer and Triage - When did symptoms start option 2 route

// Version 1 - Antigen Refer and Triage - When did symptoms start route

router.post('/antigen/v2/action3/when-did-symptoms-start', function (req, res) {
  let dateOfOnset = req.session.data['date-of-onset']
  let yearOfOnset = req.session.data['symptoms-start-date-year']
  if (!dateOfOnset){
    res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start-error-2')
  } else if (dateOfOnset == "different" && yearOfOnset !== "2020" && yearOfOnset !== "2021"){
    res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/government-pilot')
  }

})

// Version 1 - Antigen Refer and Triage - When did symptoms start error route

router.post('/antigen/v2/action3/when-did-symptoms-start-error', function (req, res) {
  let yearSymptomsStarted = req.session.data['symptoms-start-date-year']
  if (yearSymptomsStarted != "2021"){
    res.redirect('/antigen/v2/refer-and-triage/when-did-symptoms-start-error')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/government-pilot')
  }

})

router.post('/antigen/v2/action3/when-did-symptoms-start-person-1', function (req, res) {
  let dateOfOnset = req.session.data['date-of-onset-person-1']
  let yearOfOnset = req.session.data['symptoms-start-date-year-person-1']
  if (!dateOfOnset){
    res.redirect('/antigen/v2/global-registration/when-did-symptoms-start-person-1-error-2')
  } else if (dateOfOnset == "different" && yearOfOnset !== "2020" && yearOfOnset !== "2021"){
    res.redirect('/antigen/v2/global-registration/when-did-symptoms-start-person-1-error')
  } else {
    res.redirect('/antigen/v2/global-registration/mobile-number-person-1')
  }

})

// router.post('/antigen/v2/action3/when-did-symptoms-start', function (req, res) {
//   let dateOfOnset = req.session.data['date-of-onset']
//   let country = req.session.data['country']
//   if (dateOfOnset == "31 March 2021" || 
//       dateOfOnset == "30 March 2021" || 
//       dateOfOnset == "21 March 2021" || 
//       dateOfOnset == "20 March 2021" ||
//       dateOfOnset == "19 March 2021" ||
//       dateOfOnset == "18 March 2021" && country == "England" ||
//       dateOfOnset == "18 March 2021" && country == "Northern Ireland" || 
//       dateOfOnset == "17 March 2021" && country == "England" ||
//       dateOfOnset == "17 March 2021" && country == "Northern Ireland"){
//     res.redirect('/antigen/v2/refer-and-triage/government-pilot')
//   } else {
//     res.redirect('/antigen/v2/refer-and-triage/no-tests-available')
//   }

// })

// Version 2 - Antigen Refer and Triage - Follow up test route

router.post('/antigen/v2/action3/follow-up-test', function (req, res) {
  let followUpTest = req.session.data['follow-up-test']
  if (followUpTest == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/follow-up-test-reason')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/government-pilot')
  }

})

// Version 2 - Antigen Refer and Triage - Government pilot route

router.post('/antigen/v2/action3/government-pilot', function (req, res) {
  let governmentPilot = req.session.data['government-pilot']
  let whichPilot = req.session.data['professional-pilot']
  let symptoms = req.session.data['do-you-have-symptoms']
  let followUpTest = req.session.data['follow-up-test']
  if (followUpTest == "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/')
  } else if (governmentPilot == "No" && symptoms == "No" && followUpTest == "No" || whichPilot == "None of the above" && symptoms == "No" && followUpTest == "No") {
    res.redirect('/antigen/v2/refer-and-triage/reason-for-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/eligible')
  }

})

// Version 2 - Antigen Refer and Triage - Reason for test route

// router.post('/antigen/v2/action3/reason-for-test', function (req, res) {
//   let reason = req.session.data['reason-for-test']
//   if (reason == "None of the above"){
//     res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
//   } else {
//     res.redirect('/antigen/v2/refer-and-triage/eligible')
//   }

// })

router.post('/antigen/v2/action3/reason-for-test', function (req, res) {
  let reason = req.session.data['reason-for-test']
  if (reason == "I have been in contact with someone who's tested positive for coronavirus"){
    res.redirect('/antigen/v2/refer-and-triage/contact-tracing-code')
  } 
  else if (reason == "I was asked to get a test because I visited a venue where others have since tested positive") {
    res.redirect('/antigen/v2/refer-and-triage/eligible')
  }
  else if (reason == "A healthcare professional has asked me to get a test") {
    res.redirect('/antigen/v2/refer-and-triage/who-asked-for-test-HR')
  }
  else if (reason == "My work, university or school has asked me to get a test") {
    res.redirect('/antigen/v2/refer-and-triage/who-asked-for-test-OER')
  }
  else {
    res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
  }

})

router.post('/antigen/v2/action3/reason-for-test-option-2', function (req, res) {
  let reason = req.session.data['reason-for-test']
  if (reason == "None of the above"){
    res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
  } else if (reason == "I have been in contact with someone who's tested positive for coronavirus"){
    res.redirect('/antigen/v2/refer-and-triage/contact-tracing-code')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/eligible')
  }

})

router.post('/antigen/v2/action3/who-asked-for-test-CT', function (req, res) {
  let whoAskedForTest = req.session.data['who-asked-for-test']
  if (whoAskedForTest == "None of the above"){
    res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/eligible')
  }

})

router.post('/antigen/v2/action3/who-asked-for-test-HR', function (req, res) {
  let whoAskedForTest = req.session.data['who-asked-for-test']
  if (whoAskedForTest == "None of the above"){
    res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/eligible')
  }

})

router.post('/antigen/v2/action3/who-asked-for-test-OER', function (req, res) {
  let whoAskedForTest = req.session.data['who-asked-for-test']
  if (whoAskedForTest == "None of the above"){
    res.redirect('/antigen/v2/refer-and-triage/cannot-have-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/eligible')
  }

})

// Version 2 - Antigen Refer and Triage - Do you have a car route

router.post('/antigen/v2/action3/security-check', function (req, res) {

  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress !== "Yes" && postcode == "N0000"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/how-will-you-get-test')
  }

})

// Version 2 - Antigen Refer and Triage - Do you have a car route

router.post('/antigen/v2/action3/landline-number', function (req, res) {

  let emailAddress = req.session.data['email']
  if (emailAddress == "Yes" ){
    res.redirect('/antigen/v2/global-registration/gender')
  } else {
    res.redirect('/antigen/v2/global-registration/email-address')
  }

})


// Version 2 - Antigen Refer and Triage - How will you get test route

router.post('/antigen/v2/action3/how-will-you-get-test', function (req, res) {
  let wayToTest = req.session.data['way-to-test']
  if (wayToTest == "drive-through"){
    res.redirect('/antigen/v2/refer-and-triage/visiting-drive-through')
  } else if (wayToTest == "walk-in") {
    res.redirect('/antigen/v2/refer-and-triage/visiting-walk-through')
  } else if (wayToTest == "home testing") {
    res.redirect('/antigen/v2/refer-and-triage/order-home-test-kit')
  }
})

// Version 2 - Antigen Global Registration - Ethnic group route

router.post('/antigen/v2/action3/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antigen/v2/global-registration/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-another')
  } else {
    res.redirect('/antigen/v2/global-registration/currently-in-work')
  }

})

router.post('/antigen/v2/action3/ethnic-group-person-1', function (req, res) {
  let ethnicGroupPerson1 = req.session.data['ethnic-group-person-1']
  if (ethnicGroupPerson1 == "Asian or Asian British"){
    res.redirect('/antigen/v2/global-registration/ethnic-background-asian-person-1')
  } else if (ethnicGroupPerson1 == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-black-person-1')
  } else if (ethnicGroupPerson1 == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-mixed-person-1')
  } else if (ethnicGroupPerson1 == "White") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-white-person-1')
  } else if (ethnicGroupPerson1 == "Another ethnic group") {
    res.redirect('/antigen/v2/global-registration/ethnic-background-another-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/currently-in-work-person-1')
  }
})

// Version 2 - Antigen Global Registration - Ethnic group edit check answers route

router.post('/antigen/v2/global-registration/edit-check-answers/action9/ethnic-group', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers/ethnic-background-asian')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/ethnic-background-black')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/ethnic-background-mixed')
  } else if (ethnicGroup == "White") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/ethnic-background-white')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/ethnic-background-another')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  }

})

router.post('/antigen/v2/global-registration/edit-check-answers-person-1/action9/ethnic-group-person-1', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group-person-1']
  if (ethnicGroup == "Asian or Asian British"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/ethnic-background-asian-person-1')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/ethnic-background-black-person-1')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/ethnic-background-mixed-person-1')
  } else if (ethnicGroup == "White") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/ethnic-background-white-person-1')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/ethnic-background-another-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  }

})

// Version 2 - Antigen Global registration - Currently in work

router.post('/antigen/v2/action3/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v2/global-registration/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v2/global-registration/study-grade')
  } else {
    res.redirect('/genomic-variants/1-have-you-travelled-overseas')
  }
})

router.post('/antigen/v2/action3/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v2/global-registration/industry-person-1')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v2/global-registration/study-grade-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/1-have-you-travelled-overseas-person-1')
  }
})

router.post('/antigen/v2/action3/1-have-you-travelled-overseas-person-1', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas-person-1']
  if (OverseasTravel == "No"){
    res.redirect('/antigen/v2/global-registration/previous-infection-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/1-which-countries-travelled-to-person-1')
  }

})

// Version 2 - Antigen Global registration - Industry

router.post('/antigen/v2/action3/industry', function (req, res) {
  let industry = req.session.data['industry']
  if (industry == "Prefer not to say"){
    res.redirect('/antigen/v2/global-registration/occupation')
  } else {
    res.redirect('/antigen/v2/global-registration/occupation')
  }
})

router.post('/antigen/v2/action3/industry-option-2', function (req, res) {
  let industry = req.session.data['industry']
  if (industry == "Prefer not to say"){
    res.redirect('/genomic-variants/1-have-you-travelled-overseas')
  } else {
    res.redirect('/antigen/v2/global-registration/occupation-option-2')
  }
})

router.post('/antigen/v2/action3/industry-person-1', function (req, res) {
  let industry = req.session.data['industry-person-1']
  if (industry == "Prefer not to say"){
    res.redirect('/genomic-variants/1-have-you-travelled-overseas')
  } else {
    res.redirect('/antigen/v2/global-registration/occupation-person-1')
  }
})

// Version 2 - Antigen Global registration - Study grade

router.post('/antigen/v2/action3/study-grade', function (req, res) {
  let studyGrade = req.session.data['study-grade']
  if (studyGrade == "Prefer not to say"){
    res.redirect('/genomic-variants/1-have-you-travelled-overseas')
  } else {
    res.redirect('/antigen/v2/global-registration/institution')
  }
})

router.post('/antigen/v2/action3/study-grade-person-1', function (req, res) {
  let studyGrade = req.session.data['study-grade-person-1']
  if (studyGrade == "Prefer not to say"){
    res.redirect('/genomic-variants/1-have-you-travelled-overseas')
  } else {
    res.redirect('/antigen/v2/global-registration/institution-person-1')
  }
})

// Version 2 - Antigen Global registration - Currently in edit check answers work

router.post('/antigen/v2/global-registration/edit-check-answers/action9/currently-in-work', function (req, res) {
  let inWork = req.session.data['currently-in-work']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers/industry')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers/study-grade')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  }
})

router.post('/antigen/v2/global-registration/edit-check-answers-person-1/action9/currently-in-work-person-1', function (req, res) {
  let inWork = req.session.data['currently-in-work-person-1']
  if (inWork == "Yes - they travel to a workplace"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/industry-person-1')
  } else if (inWork == "Yes - they go to nursery, school, college or university"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/study-grade-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  }
})

// Version 2 - Antigen Global registration - Study grade edit check answers

router.post('/antigen/v2/global-registration/edit-check-answers/action9/study-grade', function (req, res) {
  let studyGrade = req.session.data['study-grade']
  if (studyGrade == "Prefer not to say"){
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  } else {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/institution')
  }
})

// Version 2 - Antigen Global Registration - Coronavirus vaccine route

router.post('/antigen/v2/action9/coronavirus-vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/antigen/v2/global-registration/country')
  } else {
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine-date')
  }
})

router.post('/antigen/v2/action9/coronavirus-vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/antigen/v2/global-registration/country-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/coronavirus-vaccine-date-person-1')
  }
})

// Version 2 - Antigen Global Registration - Coronavirus vaccine edit cehck answers route

router.post('/antigen/v2/global-registration/edit-check-answers/action9/coronavirus-vaccine', function (req, res) {
  let vaccine = req.session.data['vaccine']
  if (vaccine == "No"){
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  } else {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/coronavirus-vaccine-date')
  }
})

router.post('/antigen/v2/global-registration/edit-check-answers-person-1/action9/coronavirus-vaccine-person-1', function (req, res) {
  let vaccine = req.session.data['vaccine-person-1']
  if (vaccine == "No"){
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/coronavirus-vaccine-date-person-1')
  }
})

// Genomic variance - route 1 edit check answers

router.post('/antigen/v2/global-registration/edit-check-answers/action9/have-you-travelled-overseas', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas']
  if (OverseasTravel == "No"){
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  } else {
    res.redirect('/antigen/v2/global-registration/edit-check-answers/which-countries-travelled-to')
  }

})

router.post('/antigen/v2/global-registration/edit-check-answers-person-1/action9/have-you-travelled-overseas-person-1', function (req, res) {
  let OverseasTravel = req.session.data['have-you-travelled-overseas-person-1']
  if (OverseasTravel == "No"){
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/which-countries-travelled-to-person-1')
  }

})

// Version 2 - Antigen Global Registration - GP address same route

router.post('/antigen/v2/action3/gp-address-same', function (req, res) {
  let gpAdressSame = req.session.data['gp-address-same']
  if (gpAdressSame == "No"){
    res.redirect('/antigen/v2/global-registration/address')
  } else {
    res.redirect('/antigen/v2/global-registration/nhs-number-known')
  }
})

router.post('/antigen/v2/action3/gp-address-same-option-2', function (req, res) {
  let gpAdressSame = req.session.data['gp-address-same']
  if (gpAdressSame == "No"){
    res.redirect('/antigen/v2/global-registration/address-option-2')
  } else {
    res.redirect('/antigen/v2/global-registration/nhs-number-known')
  }
})

router.post('/antigen/v2/action3/gp-address-same-person-1', function (req, res) {
  let gpAdressSame = req.session.data['gp-address-same-person-1']
  if (gpAdressSame == "No"){
    res.redirect('/antigen/v2/global-registration/address-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/nhs-number-known-person-1')
  }
})

// Version 2 - Antigen Global Registration - address route

router.post('/antigen/v2/action3/address', function (req, res) {
    let postcode = req.session.data['gp-postcode']
    if (!postcode) {
      res.redirect('/antigen/v2/global-registration/address-error')
    } else {
      res.redirect('/antigen/v2/global-registration/find-address-gp')
    }
})

router.post('/antigen/v2/action3/address-person-1', function (req, res) {
  let addressPerson1 = req.session.data['address-person-1']
  let postcodePerson1 = req.session.data['home-postcode-person-1']
    if (!addressPerson1|| !postcodePerson1) {
      res.redirect('/antigen/v2/global-registration/address-person-1-error')
    } else {
      res.redirect('/antigen/v2/global-registration/nhs-number-known-person-1')
    }
})

// Version 2 - Antigen Global Registration - NHS number known route

router.post('/antigen/v2/action3/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/nhs-number')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  }
})

router.post('/antigen/v2/action3/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/nhs-number-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  }
})

// Version 2 - Antigen Global Registration - NHS number known edit check answers route

router.post('/antigen/v2/global-registration/edit-check-answers/action9/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers/nhs-number')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers')
  }
})

router.post('/antigen/v2/global-registration/edit-check-answers-person-1/action9/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known-person-1']
  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/edit-check-answers-person-1/nhs-number-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  }
})

// Version 2 - Antigen Global Registration - people confirmed route

router.post('/antigen/v2/action3/people-confirmed', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  }

})

router.post('/antigen/v2/action3/people-confirmed-person-1', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/find-test-site')
  }

})

// Version 2 - Antigen Site Appointment Booking - find a test site route

router.post('/antigen/v2/action3/find-test-site', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-walk-through-site')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-walk-through-site')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  }

})

// Version 2 - Antigen Refer and Triage - Order home test kit route

router.post('/antigen/v2/action3/order-home-test-kit', function (req, res) {
  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  if (car == "No" && postcode == "N0000" && emailAddress == "Yes"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-home-test')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-walk-in-test')
  } else if (car == "No" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/refer-and-triage/call-us-for-test')
  } else if (car == "Yes" && emailAddress !== "Yes" && postcode == "N0000"){
    res.redirect('/antigen/v2/refer-and-triage/eligible-for-drive-through-test')
  } else {
    res.redirect('/antigen/v2/refer-and-triage/how-will-you-get-test')
  }

})

// Version 2 - Antigen Site Appointment Booking - find a test site route

router.post('/antigen/v2/action3/please-wait', function (req, res) {

  let prototype = {} || req.session.data['prototype']

  // pull in JSON data file
  delete req.session.data['centres']
  let idvFile = 'test-centres.json'
  let path = 'app/data/'
  req.session.data['centres'] = loadJSONFromFile(idvFile, path)

  prototype.version = req.session.data.version
  prototype.total = req.session.data['centres'].length
  prototype.count = 0

  req.session.data['prototype'] = prototype

  let postcode = req.session.data['home-postcode']
  let emailAddress = req.session.data['email']
  let car = req.session.data['do-you-have-a-car']
  let chosenWayToTest = req.session.data['way-to-test']
  if (chosenWayToTest == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  } else if (chosenWayToTest == "walk-in") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-walk-through-site')
  } else if (chosenWayToTest == "home testing") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "No" && postcode == "N0000" && emailAddress == "Yes") {
    res.redirect('/antigen/v2/order-home-test-kit/')
  } else if (car == "Yes" && postcode == "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  } else if (car == "No" && postcode !== "N0000" && emailAddress !== "Yes") {
    res.redirect('/antigen/v2/site-appointment-booking/choose-walk-through-site')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/choose-drive-through-site')
  }

})

// Version 2 - Antigen Site Appointment Booking - Choose time prev day route

router.post('/antigen/v2/action3/choose-time-drive', function (req, res) {
  let chosenType = req.session.data['way-to-test']
  if (chosenType == "drive-through"){
    res.redirect('/antigen/v2/site-appointment-booking/vehicle-registration-number')
  } else {
    res.redirect('/antigen/v2/site-appointment-booking/confirm-appointment-drive')
  }

})

// Version 1 - Antigen Order Home Test Kit - Confirm identity route

router.post('/antigen/v2/action5/confirm-identity', function (req, res) {
  let confirmIdentity = req.session.data['confirm-identity']
  if (confirmIdentity == "Yes"){
    res.redirect('/antigen/v2/order-home-test-kit/order-summary')
  } else {
    res.redirect('/antigen/v2/govuk/get-coronavirus-test')
  }

})

// Version 1 - Antigen Order Home Test Kit - Home address question route

router.post('/antigen/v2/action5/home-address-question', function (req, res) {
  let deliveryAddressSame = req.session.data['delivery-address-same']
  if (deliveryAddressSame == "Yes"){
    res.redirect('/antigen/v2/order-home-test-kit/confirm-email-address')
  } else {
    res.redirect('/antigen/v2/order-home-test-kit/delivery-postcode')
  }

})

// Version 2 - Antigen Home Registration - Kit return way known route
router.post('/antigen/v2/action3/kit-return-way-known', function (req, res) {
  let returnWayKnown = req.session.data['kit-return-way-known']

  if (returnWayKnown == "Yes"){
    res.redirect('/antigen/v2/home-testing/order-id')
  } else {
    res.redirect('/antigen/v2/home-testing/check-instructions')
  }

})

// Version 2 - Antigen Global Registration - Delivery address same route

router.post('/antigen/v2/action3/delivery-address-same', function (req, res) {
  let deliveryAdressSame = req.session.data['delivery-address-same']
  if (deliveryAdressSame == "No"){
    res.redirect('/antigen/v2/order-home-test-kit/delivery-postcode')
  } else {
    res.redirect('/antigen/v2/order-home-test-kit/confirm-email-address')
  }
})

router.post('/antigen/v2/action3/delivery-address-same-option-2', function (req, res) {
  let deliveryAdressSame = req.session.data['delivery-address-same']
  if (deliveryAdressSame == "No"){
    res.redirect('/antigen/v2/order-home-test-kit/delivery-postcode-option-2')
  } else {
    res.redirect('/antigen/v2/order-home-test-kit/confirm-email-address')
  }
})

// Antigen V2 - Antibody Test
router.post('/antigen/v2/action2/antibody-test', function (req, res) {
  let antibodyTest = req.session.data['antibody-test']

  if (antibodyTest == "Yes"){
    res.redirect('/antigen/v2/global-registration/fingerprick-test')
  }
  else  {
    res.redirect('/antigen/v2/global-registration/cannot-get-test')
  }
})

// Antigen V2 - Fingerprick Test
router.post('/antigen/v2/action2/fingerprick-test', function (req, res) {
  let fingerprickTest = req.session.data['fingerprick-test']

  if (fingerprickTest == "Yes"){
    res.redirect('/antigen/v2/global-registration/delivery-postcode')
  }
  else  {
    res.redirect('/antigen/v2/global-registration/cannot-get-test')
  }
})


// Antigen V2 - Antibody Test Person 1
router.post('/antigen/v2/action2/antibody-test-person-1', function (req, res) {
  let antibodyTestPersonOne = req.session.data['antibody-test-person-1']

  if (antibodyTestPersonOne == "Yes"){
    res.redirect('/antigen/v2/global-registration/fingerprick-test-person-1')
  }
  else  {
    res.redirect('/antigen/v2/global-registration/cannot-get-test-person-1')
  }
})

// Antigen V2 - Fingerprick Test Person 1
router.post('/antigen/v2/action2/fingerprick-test-person-1', function (req, res) {
  let leadBookerAddress = req.session.data['delivery-address-antibody']
  let leadBookerPostcode = req.session.data['delivery-address-postcode-manual-antibody']
  let fingerprickTest = req.session.data['fingerprick-test-person-1']

  if (fingerprickTest == "Yes" && leadBookerAddress || fingerprickTest == "Yes" && leadBookerPostcode){
    res.redirect('/antigen/v2/global-registration/check-your-answers-person-1')
  }
  else if (fingerprickTest == "Yes")  {
    res.redirect('/antigen/v2/global-registration/delivery-postcode-person-1')
  }
  else {
    res.redirect('/antigen/v2/global-registration/cannot-get-test-person-1')
  }
})

// Antigen V2 - NHS Number Known
router.post('/antigen/v2/action2/nhs-number-known', function (req, res) {
  let nhsNumberKnown = req.session.data['nhs-number-known']

  if (nhsNumberKnown == "Yes"){
    res.redirect('/antigen/v2/global-registration/nhs-number')
  } else {
    res.redirect('/antigen/v2/global-registration/antibody-test')
  }

})

// Antigen V2 - NHS Number Known Person 1
router.post('/antigen/v2/action2/nhs-number-known-person-1', function (req, res) {
  let nhsNumberKnownPersonOne = req.session.data['nhs-number-known-person-1']

  if (nhsNumberKnownPersonOne == "Yes"){
    res.redirect('/antigen/v2/global-registration/nhs-number-person-1')
  } else {
    res.redirect('/antigen/v2/global-registration/antibody-test-person-1')
  }

})

module.exports = router
