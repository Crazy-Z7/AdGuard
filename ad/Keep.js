let body=$response.body;
body = body.replace(/tabType\":"entry"/g,'tabType":""');
body = body.replace(/tabType\":"mall"/g,'tabType":""');
body = body.replace(/type\":"homePrime"/g,'type":""');
$done(body);
