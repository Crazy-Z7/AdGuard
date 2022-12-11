

var body=$response.body;
var url = $request.url;
var obj = JSON.parse(body);

const Zoo = '/stay-fork/browse/featured'

if (url.indexOf(Zoo) != -1) {
     obj.blocks.imageUrl ="null";
    obj.blocks.jumpUrl ="null";
    obj.blocks.subtitle_cn ="null";
      obj.blocks.title_cn ="null";
 
body = JSON.stringify(obj);
}

$done(body);
