/**************************************

[mitm]

hostname = *keyboard*

[rewrite_local]



^http[s]?:\/\/nz-api\.duitang\.com\/account\/me\/?statics\=1.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/naiyou5.js

***************************************/

var body = $response.body;
let obj = JSON.parse($response.body);
obj={
    "status" : 1,
    "message" : "success",
    "data" : {
      "id" : 9999999,
      "bindQQ" : true,
      "vip" : true,
      "version" : 1,
      "bindWechat" : true,
      "createAt" : "2023-05-19 23:39:48",
      "avatar" : "",
      "bindApple" : false,
      "updateAt" : "2023-05-19 23:39:48",
      "statics" : {
        "payTotal" : 28,
        "blogCollectTotal" : 0,
        "blogDownloadTotal" : 0
      },
      "nickname" : "恶魔",
      "telephone" : "3",
      "status" : 0,
      "bindPhone" : false
    }
  }
  

$done({body: JSON.stringify(obj)});
