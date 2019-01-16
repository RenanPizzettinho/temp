var http = require("https");

var options = {
"method": "GET",
"hostname": "educacao-release.test.bethacloud.com.br",
"port": null,
"path": "/educacao/api/pessoa/aluno?filter=(nome%20like%20%22kay%2525%22%20or%20rg%20like%20%22kay%2525%22%20or%20cpf%20like%20%22kay%2525%22)&limit=25&offset=0",
"headers": {
"user-access": "eh2dEXeCZZSMY6_kcpKBJA==",
"filter-encoded": "true",
"app-context": "eyJhbm9sZXRpdm8iOnsidmFsdWUiOiIxNzIiLCJpbnN1bGF0aW9uIjpmYWxzZX19",
"authorization": "Bearer 90d937b5-6a78-4864-a869-0f14f8db7d9f",
"cache-control": "no-cache",
"postman-token": "711ea002-0033-f224-767b-e96287d73b74"
}
};

var i = 10; //total requests
var j = 0; //init request and control flow
doRequest(); //starts the treta

function doRequest() {
var req = http.request(options, function (res) {
var chunks = [];

res.on("data", function (chunk) {
chunks.push(chunk);
});

res.on("end", function () {
var body = Buffer.concat(chunks);
console.log(body.toString());
if (j <= i) {
doRequest()
j++;
}
});
});

req.end();
}
