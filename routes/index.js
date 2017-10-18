var express = require('express');
var router = express.Router();
var Incident=require('../models/incident')
/* GET home page. */
router.get('/', function(req, res, next) {
  var incidents = Incident.find(function(err,docs){
    res.render('index', { title: 'TAAS', Incidents: docs });
    
  });
  });

module.exports = router;
