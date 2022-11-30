
var body=$response.body;
body = body.replace(/imageUrl\":".*?"/g,'imageUrl":"null"');
body = body.replace(/jumpUrl\":".*?"/g,'jumpUrl":"null"');
body = body.replace(/subtitle_cn\":".*?"/g,'subtitle_cn":""');
body = body.replace(/title_cn\":".*?"/g,'title_cn":""');
$done(body);
