/**********************************************
作者:Zoo
#爱思助手屏蔽开屏广告
#去除发现页广告
#去除精选顶部广告
日期:2023.05.30
[rewrite_local]
^https?:\/\/.*\.i4\.cn\/getopfstadinfo\.* url reject-200
^https?:\/\/list-app-m\.i4\.cn\/getHotSearchList\.xhtml url reject-200
^http:\/\/d\.image\.i4\.cn\/adInfo\/image\/original\/*\.jpg url reject
^https?:\/\/list-app-m\.i4\.cn\/(getAppList|getHotSearchList)\.xhtml url script-response-body https://raw.githubusercontent.com/Crazy-Z7/AdGuard/main/Aisi.js
hostname = *.i4.*
**********************************************/
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
