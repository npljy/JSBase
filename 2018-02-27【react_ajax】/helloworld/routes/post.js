var express = require('express');
var router = express.Router();

/* GET users listing. */

let person = [
  'chaoxue',
  'yangna',
  'jquery',
  '你真胖',
  'momo'
];

router.post('/', function(req, res, next) {
  let u = 'username';
  let obj = {
    code:0,
    msg:'有介个银了啦!'
  }
  let json = req.body;
  if(!person.includes(json[u])){
      obj.code = 1;
      obj.msg = '木有介个银!';
  }
  res.send(JSON.stringify(obj));
});

module.exports = router;
