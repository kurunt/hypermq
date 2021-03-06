var preview = require('preview')('client');
var hypermq = require('./../../');

var options = {
  hostname: '127.0.0.1',
  port: 3443,
  secure: false,
  apikey: 'za91j2bk72f483ap62x',  
  rejectUnauthorized: false,    // false: if using self signed certificate.
  apikey: 'za91j2bk72f483ap62x' 
};
var service = hypermq.connect(options);

var myService = new service('myService', 'chat');

myService.on('message', function(msg){
  preview('myService', 'message', msg);
});

var y = 0;
setInterval(function(){
  myService.send({bar: 'lah', y: y++});     // can send messages back to the chat peer.
}, 2000);
