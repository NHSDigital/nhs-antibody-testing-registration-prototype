const express = require('express')
const router = express.Router()

// v0 routes

router.post('/organisational/register/v0/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v0/nhsnumber')
    } else {
    res.redirect('/organisational/register/v0/check')
    }
});

// v1 routes

router.post('/organisational/register/v1/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v1/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v1/single/staff')
    } else {
    res.redirect('/organisational/register/v1/how?error=empty')
    }
});

router.post('/organisational/register/v1/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v1/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v1/single/testkit')
    }
});


// v2 routes

router.post('/organisational/register/v2/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v2/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v2/single/staff')
    } else {
    res.redirect('/organisational/register/v2/how?error=empty')
    }
});

router.post('/organisational/register/v2/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v2/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v2/single/testkit')
    }
});




module.exports = router
