var request = require('request');
var requrl = 'http://qun.qzone.qq.com/group#!/462355695/member';
request(requrl, function (error, response, body) {
  console.log(error, response.statusCode);
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})
