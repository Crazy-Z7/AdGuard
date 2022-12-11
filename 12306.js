var body=$response.body;
var url = $request.url;
var obj = JSON.parse(body);

const Zoo = '/ad/ser/getAdList'

if (url.indexOf(Zoo) != -1) {
     obj.materialsList.filePath ="null";
     obj.advertParam.skipTime=1;
     obj.advertParam.skipTimeAgain=-1;
     obj.advertParam.showSkipBtn=-1;
 
body = JSON.stringify(obj);
}

$done(body);
