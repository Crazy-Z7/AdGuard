

var body=$response.body;
body = body.replace(/skipTime\":\d+/g,'skipTime":-1');
body = body.replace(/skipTimeAgain\":\d/g,'skipTimeAgain":-1');
body = body.replace(/showSkipBtn\":\d/g,'showSkipBtn":-1');
body = body.replace(/filePath\":".*?"/g,'filePath":"null"');
$done(body);
