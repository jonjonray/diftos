var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Site = require("../models/site");


router.post('/sites', function(req, res) {
  if (!req.body.title || !req.body.url) {
    res.json({success: false, msg: 'Please pass title and url.'});
  } else {
    var newSite = new Site({
      title: req.body.title,
      url: req.body.url
    });
    // save the user
    newSite.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Invalid Parameters'});
      }
      res.json({success: true, msg: 'Successfully created new site.'});
    });
  }
});

router.get('/sites', function(req, res) {
  
});



module.exports = router;
