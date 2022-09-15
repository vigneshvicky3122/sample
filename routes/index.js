var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/book', function(req, res) {  
  res.send({
    statuscode: 200,
    message : "user successfully booked",
  });
});


var Rooms =[];
router.post('/create-rooms', function(req, res) {
  req.push(res.body)
  res.send({
    statuscode: 200,
    message : "user successfully created",
  });
});

module.exports = router;
 