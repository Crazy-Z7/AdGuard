

let obj = JSON.parse($response.body);

let item = [
  "adli", //搜索页推荐广告模块
  "ad", //精选页顶部广告模块
  "spappli", //大家都爱用 
  "bannerMenuItem", //应用顶部广告模块
];
if (obj) {
  item.forEach((i) => {
delete obj[i];
});
}
$done({ body: JSON.stringify(obj) });
