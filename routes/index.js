var express = require('express');
var https = require('https');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next){
  // res.render('index', { title: 'Express' });
  res.sendFile('weather.html',{root:'public'});
});

router.get('/owl', function(req, res, next){
  
  proxyOwl(req.query.q, function(data){
  	console.log(data);
  	res.status(200).json(data);
  });
  
});

router.get('/getcity',function(req,res,next) {
  console.log("In getcity route");

  var fs = require('fs');

  var myRe = new RegExp("^" + req.query.q);
  console.log("MYRE: ",myRe);


  fs.readFile(__dirname + '/cities.dat.txt',function(err,data){
   if(err) throw err;
   var cities = data.toString().split("\n"); 

   var jsonresult = [];

   for(var i = 0; i < cities.length; i++){
     var result = cities[i].search(myRe);
	   if(result != -1) {
	     	console.log(cities[i]);
	     	jsonresult.push({city:cities[i]});
    	}
  	}   
  // console.log(jsonresult);
  res.status(200).json(jsonresult);
  }); 

});

function proxyOwl(term, callback){

  var options = {
    hostname: 'owlbot.info',
    port:443,
    path:"/api/v1/dictionary/"+term+"?format=json",
    method: 'GET'
  };

  var req=https.request(options, function(res){
        var body = "";
        res.on('data', function (chunk){
        	var ch = JSON.parse(chunk);
        	console.log("chunk: ",ch);
        	callback(ch);
            // for(d in ch){
            // 	console.log("pro",ch[d].type);
            // }
        });
        res.on('end', function(){
        	// console.log("end: ", body);
             // client_res.writeHead(res.statusCode, res.headers);
             // client_res.end(body);
        });
    });
  req.end();
} 

module.exports = router;
