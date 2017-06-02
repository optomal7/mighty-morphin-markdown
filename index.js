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

router.delete('/:file', function (req, res) {
  let file = __dirname + '/data/' + req.params.file
  let dir = __dirname + '/data/';
  fs.unlink(file, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
})

router.post('/saveZone', (req, res) => {
  let dir = __dirname + '/data/' + req.body.file
  fs.writeFile(dir, req.body.data)
  res.sendStatus(200)
})


router.get('/:url', function(req, res) {

  let file  = __dirname + '/data/' + req.params.url;
  console.log('req ==> ',req)
  console.log('file => ',file)
  Promise.resolve( fs.readFileSync(file, 'utf8')).then(res.send.bind(res) );

});


module.exports = router;
