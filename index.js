var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  let dir = __dirname + '/data/'
  fs.readdir(dir, (err, files) => {
    if (err) {
          throw err;
    } else {
      res.render('index', {
        files: files,
        title: 'mighty!morphin markdown'
      });
      console.log(files);
    }
  });
});

module.exports = router;
