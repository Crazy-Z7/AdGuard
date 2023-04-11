var obj = JSON.parse($response.body);
obj.data.thumb = null;
obj.data.url = {<<<>>>};
$done({body : JSON.stringify(obj)});
