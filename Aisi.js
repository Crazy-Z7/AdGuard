
var body=$response.body;
body = body.replace(/content\":".*?"/g,'content":"null"');
body = body.replace(/image\":".*?"/g,'image":"null"');
$done(body);
