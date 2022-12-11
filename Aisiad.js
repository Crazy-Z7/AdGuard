var body=$response.body;

    var url = $request.url;

      var ojbk = JSON.parse(body);

   const zooad = '/getAppList.xhtml'

if (url.indexOf(zooad) != -1) {
     ojbk.ad.image ="null";
    ojbk.adli.content ="null";

 
     body = JSON.stringify(ojbk);
}

 $done(body);
