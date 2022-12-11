
var ojbk = JSON.parse($response.body);
   
    ojbk = {
  "result": 0,
  "ads": [],
  "store": ""
}

$done({body : JSON.stringify(ojbk)});
