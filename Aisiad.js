
var body=$response.body;

    var url = $request.url;

      var ojbk = JSON.parse(body);

   const Zoo = '/getAppList.xhtml'

if (url.indexOf(Zoo) != -1) {
     ojbk.ad.image ="null";
    ojbk.adli.content ="null";

 
     body = JSON.stringify(ojbk);
}

 $done(body);
