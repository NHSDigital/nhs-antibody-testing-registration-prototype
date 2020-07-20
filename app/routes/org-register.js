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

router.post('/organisational/register/v2/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v2/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v2/single/time')
    }
});

router.post('/organisational/register/v2/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == 'yes home') {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == 'yes travel') {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v2/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v2/single/country')
  } else {
    res.redirect('/organisational/register/v2/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v2/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v2/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v2/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v2/single/ethnic-group?error=empty')
    }
});











module.exports = router
