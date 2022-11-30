
var body=$response.body;
body = body.replace(/imageUrl\":".*?"/g,'imageUrl":"null"');
body = body.replace(/jumpUrl\":".*?"/g,'jumpUrl":"null"');
$done(body);
