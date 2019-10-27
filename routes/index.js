var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  CForm = undefined;
  CTo = undefined;
  DateFli = undefined;



  res.render('index', {
    cFrom: CForm,
    cTo: CTo,
    date: DateFli

  });
});

module.exports = router;
