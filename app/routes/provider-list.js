const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

// Load JSON data from file ----------------------------------------------------

// fileName excludes path but includes extension e.g. file.json
function loadJSONFromFile(fileName, path = "app/data/") {
  let jsonFile = fs.readFileSync(path + fileName)
  return JSON.parse(jsonFile) // Return JSON as object
}



// Provider list - route 1

router.post('/provider-list/v1/arrival-country', function (req, res) {
  let OverseasTravel = req.session.data['country']
  if (OverseasTravel == "England"){
    res.redirect('/provider-list/v1/departure-country')
  } else if (OverseasTravel == "Scotland") {
    res.redirect('/provider-list/v1/local-guidance-scotland')
  }else if (OverseasTravel == "Wales") {
    res.redirect('/provider-list/v1/local-guidance-wales')
  }else
  res.redirect('/provider-list/v1/local-guidance-northern-ireland')
})



// Provider list - route 2

  
router.post('/provider-list/v1/departure-country-select', function (req, res) {
  let departureCountry = req.session.data['country-departure']
  // create array of red list countries
  var redlist = ['Angola','Argentina', 'Bangladesh', 'Bolivia', 'Botswana', 'Brazil', 'Burundi', 'Cape Verde', 'Chile', 'Colombia', 'Congo, Democratic Republic of the', 'Ecuador', 'Eswatini', 'Ethiopia', 'French Guiana','Guyana', 'India', 'Kenya', 'Lesotho', 'Malawi','Mozambique', 'Namibia','Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Philippines', 'Qatar', 'Rwanda', 'Seychelles', 'Somalia', 'South Africa', 'Suriname', 'Tanzania', 'United Arab Emirates', 'Uruguay', 'Venzuela', 'Zambia', 'Zimbabwe']
  var greenlist = ['Malta','Portugal']
  for (i = 0; i < redlist.length; i++) {
    if (redlist[i] === departureCountry ) {
      res.redirect('/provider-list/v1/departure-country-redlisted')
      break
    }
  }
  for (j = 0; j < greenlist.length; j++) {
    if (greenlist[j] === departureCountry ) {
      res.redirect('/provider-list/v1/departure-country-greenlisted')
      break
    }
  }
  res.redirect('/provider-list/v1/arrival-date')
})

// Provider list - route 3

router.post('/provider-list/v2/amber-or-green', function (req, res) {
    let amberOrGreen = req.session.data['trafficlight']
  if (amberOrGreen == "Amber"){
    res.redirect('/provider-list/v2/amber-list1')
  }else
  res.redirect('/provider-list/v2/green-list1')
}) 

// Provider list - route 4

router.post('/provider-list/v2/green-list1', function (req,res) {
  let greenFilter = req.session.data['region']
if (greenFilter == "north-west"){
  res.redirect('/provider-list/v2/green-list-filtered')
}else
  res.redirect('/provider-list/v2/green-list2')
})

module.exports = router
