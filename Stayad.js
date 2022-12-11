

var body=$response.body;
var url = $request.url;
var obj = JSON.parse(body);

const Zoo = '/stay-fork/browse/featured'

if (url.indexOf(Zoo) != -1) {
     obj.biz.imageUrl ="null";
    obj.biz.jumpUrl ="null";
    obj.biz.subtitle_cn ="null";
      obj.biz.title_cn ="null";
 
body = JSON.stringify(obj);
}

$done(body);
