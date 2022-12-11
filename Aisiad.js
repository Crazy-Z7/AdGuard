var body=$response.body;

    var url = $request.url;

      var ojbk = JSON.parse(body);

   const Zoo = '/getAppList.xhtml'

if (url.indexOf(Zoo) != -1) {
     ojbk.app.image ="null";
    ojbk.app.content ="null";

 
     body = JSON.stringify(ojbk);
}

 $done(body);
