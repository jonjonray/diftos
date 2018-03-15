var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Site = require("../models/site");


router.post('/new', function(req, res) {
  if (!req.body.title || !req.body.url || !req.body.userId) {
    res.json({success: false, msg: 'Please pass title and url.'});
  } else {
    var newSite = new Site({
      title: req.body.title,
      url: req.body.url,
      userId: req.body.userId
    });

    newSite.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Invalid Parameters'});
      }
      res.json({success: true, msg: 'Successfully created new tracker.'});
    });
  }
});

router.get('/', function(req, res) {
  Site.find({userId: req.query.userId}, function (err, sites) {
    res.json({ sites });
  });

});

router.delete('/', function(req, res) {
  Site.remove({_id: req.query.id }, function (err, site) {
    if (err) {
      res.json({success: false, msg: "Deletion Failed"});
    } else {
      res.json({success: true, msg: "Deletion Successful"});
    }
  });
});


router.patch('/', function(req, res) {
  Site.findOneAndUpdate({_id: req.query.id},
                        {$set:{title: req.query.title, url: req.query.url}},
                        {new: true},
                        function(err, doc){
                          if (err) {
                            res.json({
                              success: false,
                              msg: "Update Failed",
                              site: doc
                            });
                          } else {
                            res.json({
                              success: true,
                              msg: "Update Successful",
                              site: doc
                            });
                          }
                      });
});


module.exports = router;
