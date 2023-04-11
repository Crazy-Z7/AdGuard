var obj = JSON.parse($response.body);
obj.data.url = null;
obj.data.city_advert_startup_times = 1;
obj.data.new_thumb = null;
obj.data.thumb = null;
obj.data.title = "去除开屏";
obj.data.thumb = null;

$done({body : JSON.stringify(obj)});
