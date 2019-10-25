var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  C_form = undefined;
  C_to = undefined;
  Date_fli = undefined;



  res.render('index', {
    c_from: C_form,
    c_to: C_to,
    date: Date_fli

  });
});

module.exports = router;
