const express = require('express')
const router = express.Router()

// Version 1 - Is your delivery address the same as your home address?
router.post('/v1/action/delivery-address-question', function (req, res) {
  var deliveryAddressAnswer = req.session.data['delivery-address']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/v1/home-test-kit/email-address')
  } else {
    res.redirect('/v1/home-test-kit/delivery-address')
  }

})

// Version 1 - Confirm identity
router.post('/v1/action/confirm-identity', function (req, res) {
  var deliveryAddressAnswer = req.session.data['identity']

  if (deliveryAddressAnswer == "Yes"){
    res.redirect('/v1/home-test-kit/order-summary')
  } else {
    res.redirect('/v1/home-test-kit/')
  }

})

// Version 1 - Registration - Get phone number for theeEmail address route
let mobilePhoneNumber = "";
router.post('/v1/action/mobile-number', function (req, res) {
  mobilePhoneNumber = req.session.data['mobile-number'];
  res.redirect('/v1/registration/email-address');

})


// Version 1 - Registration - Email address route
router.post('/v1/action/email-address', function (req, res) {
  var emailAddress = req.session.data['email']

  if (emailAddress == "No" && mobilePhoneNumber == "No"){
    res.redirect('/v1/registration/call-us')
  } else {
    res.redirect('/v1/registration/occupation')
  }

})

module.exports = router
