/**********************************************
作者:Zoo
12306去开屏广告倒计时去首页顶部广告
日期:2023.05.30
[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://raw.githubusercontent.com/Crazy-Z7/AdGuard/main/12306.js
hostname = ad.12306.cn
**********************************************/
let Zoo12306Ad = JSON.parse($response.body);

    Zoo12306Ad = {
  "code": "00",
  "materialsList": [{
    "billId": "3427",
    "billMaterialsId": "6052",
    "filePath": "null",
    "title": "郎溪县文化和旅游局",
    "linkUri": "https://mp.weixin.qq.com/s/jLuZkL1MExVz-JHOHPgwSw",
    "linkType": 2,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=3427&appId=2&mid=6052&pn=0060&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=3427&appId=2&mid=6052&pn=0060&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=2"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 1,
    "pn": "0060",
    "creativeType": 1,
    "areaCode": "LXU"
  }, {
    "billId": "4611",
    "billMaterialsId": "6304",
    "filePath": "null",
    "title": "铁路e卡通",
    "linkUri": "https://mp.weixin.qq.com/s/GuIM1ix0lw_3stdZg0S0bg",
    "linkType": 2,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4611&appId=2&mid=6304&pn=0061&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4611&appId=2&mid=6304&pn=0061&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=2"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 1,
    "pn": "0061",
    "creativeType": 1
  }, {
    "billId": "4705",
    "billMaterialsId": "6317",
    "filePath": "null",
    "title": "12306酒店",
    "linkUri": "app#60000014#/www/hotel-activity.html?showTitleBar=false&hotelFromPage=12306_sy_ggw&activityId=100043",
    "linkType": 3,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4705&appId=2&mid=6317&pn=0063&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4705&appId=2&mid=6317&pn=0063&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=2"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 4,
    "pn": "0063",
    "creativeType": 1
  }],
  "rid": "e2f930654b784e9dad0b804692a2d222",
  "advertParam": {
    "skipTime": 1,
    "showSkipBtn": -1,
    "skipTimeAgain": 1,
    "chacheTime": 600000,
    "fixedscreen": 3,
    "isDefault": 0,
    "displayNumDi": 1,
    "index": 2
  }
}

$done({body : JSON.stringify(Zoo12306Ad)});

