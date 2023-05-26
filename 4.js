/**************************************

[mitm]

hostname = *naiyou3*

[rewrite_local]



^http[s]?:\/\/nz-api\.duitang\.com\/account\/me\/\?statics\=1.*$ url script-response-body https://raw.githubusercontent.com/zhangyang1520/11/main/3.js

***************************************/

var body = $response.body;
body = JSON.parse(body);
body.data.vip = true;
body.data.vip_time = "2999-09-09到期";
body.nickname = "by~恶魔";
body.statics.payTotal = 28;
$done({body: JSON.stringify(body)});
