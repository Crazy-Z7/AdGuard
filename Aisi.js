if (!$response.body) $done({});
let obj = JSON.parse($response.body);

let item = [
  "adli", //搜索页推荐广告
  "ad", //精选页顶部广告
  "spappli", //大家都爱用 
  "bannerMenuItem", //应用顶部广告
];
if (obj) {
  item.forEach((i) => {
    delete obj[i];
  });
}

$done({ body: JSON.stringify(obj) });
