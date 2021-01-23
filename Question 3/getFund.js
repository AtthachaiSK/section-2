
var argsFundCode = process.argv.slice(2)[0];

var http = require('http');
var options = {
    hostname: 'codequiz.azurewebsites.net',
    method: 'GET',
    headers: { 'Cookie': 'hasCookie=true' }
};
var results = '';
var req = http.request(options, function (res) {
    res.on('data', function (chunk) {
        results = results + chunk;
        var regex = /(<([^>]+)>)/ig
        var resultArr = results.replace(regex, "#").split('#').filter(data => /\S/.test(data)).map(t => t.trim()).slice();
        var index = resultArr.indexOf(argsFundCode) + 1;
        if (index != 0){
            var nav = resultArr[index]
            console.log(nav)
        }else{
            console.log(0)
        }
           
    });
});
req.end();