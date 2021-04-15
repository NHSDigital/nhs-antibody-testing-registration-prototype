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
    res.redirect('/organisational/register/v2/single/have-coronavirus')
    }
});

router.post('/organisational/register/v2/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v2/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v2/single/testkit')
    }
});

router.post('/organisational/register/v2/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
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


// v3 routes

router.post('/organisational/register/v3/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'single') {
    res.redirect('/organisational/register/v2/how')
    } else {
    res.redirect('/organisational/register/v3/how')
    }
});

router.post('/organisational/register/v3/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v3/bulk/info')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v3/single/info')
    } else {
    res.redirect('/organisational/register/v3/how?error=empty')
    }
});

router.post('/organisational/register/v3/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v3/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v3/single/email')
    }
});

router.post('/organisational/register/v3/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v3/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v3/single/dob')
    }
});

router.post('/organisational/register/v3/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v3/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v3/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v3/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v3/single/country')
  } else {
    res.redirect('/organisational/register/v3/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v3/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v3/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v3/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v3/single/ethnic-group?error=empty')
    }
});

// v4 routes

router.post('/organisational/register/v4/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'single') {
    res.redirect('/organisational/register/v2/how')
    } else {
    res.redirect('/organisational/register/v4/how')
    }
});

router.post('/organisational/register/v4/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v4/bulk/info')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v4/single/info')
    } else {
    res.redirect('/organisational/register/v4/how?error=empty')
    }
});

router.post('/organisational/register/v4/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v4/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v4/single/email')
    }
});

router.post('/organisational/register/v4/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v4/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v4/single/dob')
    }
});

router.post('/organisational/register/v4/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v4/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v4/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v4/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v4/single/country')
  } else {
    res.redirect('/organisational/register/v4/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v4/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v4/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v4/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v4/single/ethnic-group?error=empty')
    }
});


// v5 routes


router.post('/organisational/register/v5/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v5/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v5/single/staff')
    } else {
    res.redirect('/organisational/register/v5/how?error=empty')
    }
});

router.post('/organisational/register/v5/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v5/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v5/single/have-coronavirus')
    }
});

router.post('/organisational/register/v5/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v5/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v5/single/7-day')
    }
});

router.post('/organisational/register/v5/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v5/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v5/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v5/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v5/single/country')
  } else {
    res.redirect('/organisational/register/v5/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v5/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v5/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v5/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v5/single/ethnic-group?error=empty')
    }
});





// v6 routes


router.post('/organisational/register/v6/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v6/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v5/single/staff')
    } else {
    res.redirect('/organisational/register/v6/how?error=empty')
    }
});

router.post('/organisational/register/v6/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v6/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v6/single/have-coronavirus')
    }
});

router.post('/organisational/register/v6/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v6/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v6/single/7-day')
    }
});

router.post('/organisational/register/v6/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v6/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v6/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v6/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v6/single/country')
  } else {
    res.redirect('/organisational/register/v6/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v6/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v6/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v6/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v6/single/ethnic-group?error=empty')
    }
});









// Antibody Care home routes

router.post('/organisational/antibody/v1/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/antibody/v1/bulk/type')
    } else if (answer == 'single') {
      res.redirect('/organisational/antibody/v1/single/type')
    } else {
    res.redirect('/organisational/antibody/v1/how?error=empty')
    }
});

router.post('/organisational/antibody/v1/single/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'Fingerprick blood test') {
    res.redirect('/organisational/antibody/v1/single/staff')
    } else if (answer == 'Swab test') {
      res.redirect('/organisational/register/v2/single/staff')
    } else {
    res.redirect('/organisational/antibody/v1/single/type')
    }
});

router.post('/organisational/antibody/v1/bulk/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'Fingerprick blood test') {
    res.redirect('/organisational/antibody/v1/bulk/staff')
    } else if (answer == 'Swab test') {
      res.redirect('/organisational/register/v2/bulk/staff')
    } else {
    res.redirect('/organisational/antibody/v1/bulk/type')
    }
});

router.post('/organisational/antibody/v1/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/antibody/v1/single/nhsnumber')
    } else {
    res.redirect('/organisational/antibody/v1/single/testkit')
    }
});

router.post('/organisational/antibody/v1/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuHaveCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/symptoms-end')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/condition')
    }
});

router.post('/organisational/antibody/v1/single/questions/index', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/when-symptoms')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/tested-positive')
    }
});

router.post('/organisational/antibody/v1/single/questions/condition', function (req, res) {
  let answer = req.body.cuCondition;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/condition-end')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/index')
    }
});

router.post('/organisational/antibody/v1/single/questions/tested-positive', function (req, res) {
  let answer = req.body.cuTestedBefore;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/swab-test')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/lived-with')
    }
});

router.post('/organisational/antibody/v1/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/antibody/v1/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/antibody/v1/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/antibody/v1/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/antibody/v1/single/country')
  } else {
    res.redirect('/organisational/antibody/v1/single/occupation/index?error=empty')
    }
});

router.post('/organisational/antibody/v1/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/antibody/v1/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/antibody/v1/single/ethnic-desc')
    } else {
    res.redirect('/organisational/antibody/v1/single/ethnic-group?error=empty')
    }
});











// enhanced routes

router.post('/organisational/register/enhanced/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/enhanced/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/enhanced/single/staff')
    } else {
    res.redirect('/organisational/register/enhanced/how?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/enhanced/single/contact')
    } else if (answer) {
      res.redirect('/organisational/register/enhanced/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/enhanced/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/enhanced/single/have-coronavirus')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else {
    res.redirect('/organisational/register/enhanced/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/enhanced/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/enhanced/single/testkit')
    }
});

router.post('/organisational/register/enhanced/single/have-vaccine', function (req, res) {
  let answer = req.body.cuVaccine;

  if (answer == '1 dose') {
    res.redirect('/organisational/register/enhanced/single/when-vaccine')
    } else if (answer == '2 doses') {
      res.redirect('/organisational/register/enhanced/single/when-vaccine')
    } else if (answer == 'no') {
      res.redirect('/organisational/register/enhanced/single/testkit')
    } else {
    res.redirect('/organisational/register/enhanced/single/have-vaccine?error=empty')
    }
});

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/request-method', function (req, res) {
  let answer = req.body.cuRequestMethod;

  if (answer == 'upload') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/upload-file')
    } else if (answer == 'manual') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/date-of-procedure')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/request-method?error=empty')
    }
})

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms', function (req, res) {
  let answer = req.body.cuSymptomatic;

  if (answer == 'Yes') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms-start')
    } else if (answer == 'No') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/check-your-answers-manual')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms?error=empty')
    }
})

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/have-vaccine', function (req, res) {
  let answer = req.body.cuVaccine;

  if (answer == '1 dose') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/when-vaccine')
    } else if (answer == '2 doses') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/when-vaccine')
    } else if (answer == 'No') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/check-your-answers-manual')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/have-vaccine?error=empty')
    }
});



// outer-return-box

router.post('/organisational/outer-return-box/option1/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/bulk/who-single')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option1/who-single')
    } else {
    res.redirect('/organisational/outer-return-box/option1/spreadsheet?error=empty')
    }
});

router.post('/organisational/outer-return-box/option2/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/bulk/who-single')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option2/who-single')
    } else {
    res.redirect('/organisational/outer-return-box/option2/spreadsheet?error=empty')
    }
});


router.post('/organisational/outer-return-box/option1/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/outer-return-box/option1/travel')
    } else if (answer) {
      res.redirect('/organisational/outer-return-box/option1/ethnic-desc')
    } else {
    res.redirect('/organisational/outer-return-box/option1/ethnic-group?error=empty')
    }
});

router.post('/organisational/outer-return-box/option1/travel', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == 'home') {
    res.redirect('/organisational/outer-return-box/option1/area')
  } else if (answer == 'travel') {
    res.redirect('/organisational/outer-return-box/option1/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/outer-return-box/option1/country')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/outer-return-box/option1/country')
  } else {
    res.redirect('/organisational/outer-return-box/option1/travel?error=empty')
    }
});

router.post('/organisational/outer-return-box/option1/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option1/nhsnumber')
    } else {
    res.redirect('/organisational/outer-return-box/option1/have-coronavirus')
    }
});

router.post('/organisational/outer-return-box/option1/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/outer-return-box/option1/when-symptoms')
    } else {
    res.redirect('/organisational/outer-return-box/option1/testkit')
    }
});

router.post('/organisational/outer-return-box/option1/option1', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option1/enterbarcode')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option1/checkno')
    } else {
    res.redirect('/organisational/outer-return-box/option1/option1?error=empty')
    }
});



router.post('/organisational/outer-return-box/option2/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/outer-return-box/option2/travel')
    } else if (answer) {
      res.redirect('/organisational/outer-return-box/option2/ethnic-desc')
    } else {
    res.redirect('/organisational/outer-return-box/option2/ethnic-group?error=empty')
    }
});

router.post('/organisational/outer-return-box/option2/travel', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == 'home') {
    res.redirect('/organisational/outer-return-box/option2/area')
  } else if (answer == 'travel') {
    res.redirect('/organisational/outer-return-box/option2/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/outer-return-box/option2/country')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/outer-return-box/option2/country')
  } else {
    res.redirect('/organisational/outer-return-box/option2/travel?error=empty')
    }
});

router.post('/organisational/outer-return-box/option2/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option2/nhsnumber')
    } else {
    res.redirect('/organisational/outer-return-box/option2/have-coronavirus')
    }
});

router.post('/organisational/outer-return-box/option2/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/outer-return-box/option2/when-symptoms')
    } else {
    res.redirect('/organisational/outer-return-box/option2/testkit')
    }
});

router.post('/organisational/outer-return-box/option2/option2', function (req, res) {
  let answer = req.body.outerreturnbox2;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option2/enterbarcode')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option2/checkno')
    } else {
    res.redirect('/organisational/outer-return-box/option2/option2?error=empty')
    }
})


// test-pass/create-single-reg

router.post('/organisational/test-pass/create-single-reg/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-single-reg/who-bulk')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-single-reg/name')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/spreadsheet?error=empty')
    }
});


router.post('/organisational/test-pass/create-single-reg/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-single-reg/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-single-reg/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-single-reg/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/area')
  } else {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/index?error=empty')
    }
});

router.post('/organisational/test-pass/create-single-reg/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-single-reg/nhsnumber')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/have-coronavirus')
    }
});

router.post('/organisational/test-pass/create-single-reg/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/create-single-reg/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/enterbarcode')
    }
});

router.post('/organisational/test-pass/create-single-reg/reg-with-pass/passID', function (req, res) {
  let answer = req.body.passID;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/referencenumber')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-single-reg/who-single')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/passID?error=empty')
    }
});


router.post('/organisational/test-pass/create-single-reg/reg-with-pass/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/enterbarcode')
    }
});



// test-pass/create-pass



router.post('/organisational/test-pass/create-pass/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/who-bulk')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/who-single')
    } else {
    res.redirect('/organisational/test-pass/create-pass/spreadsheet?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/residents/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/residents/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/residents/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/residents/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/staff/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/staff/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/staff/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/staff/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/other/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/other/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/other/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/other/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/who-single', function (req, res) {
  let answer = req.body.who;

  if (answer == 'residents') {
    res.redirect('/organisational/test-pass/create-pass/residents/personal')
  } else if (answer == 'staff') {
      res.redirect('/organisational/test-pass/create-pass/staff/personal')
  } else if (answer == 'other') {
      res.redirect('/organisational/test-pass/create-pass/other/personal')
    } else {
    res.redirect('/organisational/test-pass/create-pass/who-single?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/who-single', function (req, res) {
  let answer = req.body.who;

  if (answer == 'residents') {
    res.redirect('/organisational/test-pass/create-pass/create-more/residents/personal')
  } else if (answer == 'staff') {
      res.redirect('/organisational/test-pass/create-pass/create-more/staff/personal')
  } else if (answer == 'other') {
      res.redirect('/organisational/test-pass/create-pass/other/personal')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/who-single?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/staff/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/create-more/staff/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/create-more/staff/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/staff/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/residents/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/create-more/residents/confirmcontact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/create-more/residents/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/residents/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/other/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/create-more/other/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/create-more/other/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/other/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/staff/travel', function (req, res) {
  let answer = req.body.travel;

  if (answer == 'workplace') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else if (answer == 'education') {
    res.redirect('/organisational/test-pass/create-pass/staff/attendeducation')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-pass/checkyouranswers')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/checkyouranswers')
  } else {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/other/travel2', function (req, res) {
  let answer = req.body.travel2;

  if (answer == 'workplace') {
    res.redirect('/organisational/test-pass/create-pass/other/areawork')
  } else if (answer == 'education') {
    res.redirect('/organisational/test-pass/create-pass/other/attendeducation')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-pass/other/areawork')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/other/areawork')
  } else {
    res.redirect('/organisational/test-pass/create-pass/other/travel2?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/staff/travel2', function (req, res) {
  let answer = req.body.travel2;

  if (answer == 'workplace') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else if (answer == 'education') {
    res.redirect('/organisational/test-pass/create-pass/staff/attendeducation')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else {
    res.redirect('/organisational/test-pass/create-pass/staff/travel2?error=empty')
    }
});

// lft/carehome-registration

router.post('/organisational/lft/carehome-registration/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/lft/carehome-registration/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/lft/carehome-registration/single/staff')
    } else {
    res.redirect('/organisational/lft/carehome-registration/how?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/lft/carehome-registration/single/contact')
    } else if (answer) {
      res.redirect('/organisational/lft/carehome-registration/single/ethnic-desc')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/lft/carehome-registration/single/have-coronavirus')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/area')
  } else {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/index?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/lft/carehome-registration/single/when-symptoms')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/testkit')
    }
});

router.post('/organisational/lft/carehome-registration/single/have-return-box', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/return-box')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/add-second-test')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/have-return-box?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/add-second-test', function (req, res) {
  let answer = req.body.secondtest;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/testkit-lft-route')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/check-pcr')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/add-second-test?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/add-another', function (req, res) {
  let answer = req.body.addanotherperson;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/staff')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/confirm-result')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/add-another?error=empty')
    }
});


module.exports = router
