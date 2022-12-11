var body=$response.body;

    var url = $request.url;

      var ojbk = JSON.parse(body);

   const Zoo = '/getAppList.xhtml'

if (url.indexOf(Zoo) != -1) {
     obj.ad.image ="null";
    obj.adli.content ="null";

 
     body = JSON.stringify(ojbk);
}

 $done(body);
