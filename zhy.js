var obj = JSON.parse($response.body);
obj.data.openScreenAdvertise.url = null;
obj.data.openScreenAdvertise.city_advert_startup_times = 1;
obj.data.openScreenAdvertise.new_thumb = null;
obj.data.openScreenAdvertise.thumb = null;
obj.data.openScreenAdvertise.title = "去除开屏";
obj.data.openScreenAdvertise.thumb = null;

$done({body : JSON.stringify(obj)});
